<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use App\Models\Mailing;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\AdminReplyMail;

class AdminController extends Controller
{
    public function mailbox()
    {
    $messages = Mailing::latest()->get();
        return Inertia::render('Admin/Mailbox', [
            'messages' => $messages,
        ]);
    }

    public function answerMessage(Request $request, $id)
    {
        $mailing = Mailing::findOrFail($id);
        $validated = $request->validate([
            'response' => 'required|string',
        ]);
    $mailing->status = 'replied';
        $mailing->archived = true;
        $mailing->save();

    // Envoi la réponse par email à l'expéditeur
    Mail::to($mailing->email)->send(new AdminReplyMail($validated['response']));

        return redirect()->route('admin.mailbox')->with('success', 'Réponse envoyée et message archivé.');
    }
    public function dashboard()
    {
        $stats = [
            'totalSales' => Order::sum('total_price'),
            'ordersCount' => Order::count(),
            'usersCount' => User::count(),
            'productsCount' => Product::count(),
        ];

        $recentOrders = Order::latest()->take(5)->get(['id', 'status']);
        $topProducts = Product::withCount('likedBy')->orderByDesc('liked_by_count')->take(5)->get(['id', 'name']);
        $recentUsers = User::latest()->take(6)->get(['id', 'name', 'email']);

        // likes count for topProducts
        $topProducts = $topProducts->map(function ($product) {
            $product->likes = $product->liked_by_count ?? 0;
            return $product;
        });

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentOrders' => $recentOrders,
            'topProducts' => $topProducts,
            'recentUsers' => $recentUsers,
        ]);
    }

    public function users()
    {
        $users = User::with('role:id,name')->get(['id', 'name', 'email', 'role_id']);
        // Format for frontend: add role name
        $users = $users->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role ? $user->role->name : null,
            ];
        });
        return Inertia::render('Admin/Users', [
            'users' => $users,
        ]);
    }

    public function showUser($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Admin/UserShow', [
            'user' => $user,
        ]);
    }

    public function editUser($id)
    {
        $user = User::findOrFail($id);
        $roles = \App\Models\Role::all(['id', 'name']);
        return Inertia::render('Admin/UserEdit', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    public function updateUser(Request $request, $id)
    {
    $user = User::findOrFail($id);
    $user->update($request->only(['name', 'email', 'role_id']));
    return redirect()->route('admin.users.index')->with('success', 'Utilisateur modifié avec succès.');
    }

    public function destroyUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->route('admin.users.index');
    }

    public function updateUserRole(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        $validated = $request->validate([
            'role_id' => 'required|exists:roles,id',
        ]);

        $user->update(['role_id' => $validated['role_id']]);

        return back()->with('success', 'User role updated successfully!');
    }

    public function analytics()
    {
        $stats = [
            'totalRevenue' => Order::where('status', '!=', 'canceled')->sum('total_price'),
            'totalOrders' => Order::count(),
            'pendingOrders' => Order::where('status', 'pending')->count(),
            'confirmedOrders' => Order::where('status', 'confirmed')->count(),
            'canceledOrders' => Order::where('status', 'canceled')->count(),
            'deliveredOrders' => Order::where('status', 'delivered')->count(),
            'totalUsers' => User::count(),
            'totalProducts' => Product::count(),
            'lowStockProducts' => Product::where('stock_quantity', '<', 10)->count(),
        ];

        // Monthly sales data (last 12 months)
        $monthlySales = [];
        for ($i = 11; $i >= 0; $i--) {
            $date = now()->subMonths($i);
            $monthlySales[] = [
                'month' => $date->format('M Y'),
                'sales' => Order::whereYear('created_at', $date->year)
                    ->whereMonth('created_at', $date->month)
                    ->where('status', '!=', 'canceled')
                    ->sum('total_price') / 100, // Convert to euros
            ];
        }

        // Top selling products
        $topProducts = Product::withCount('likedBy')
            ->orderByDesc('liked_by_count')
            ->take(10)
            ->get();

        // Category sales distribution
        $categorySales = \App\Models\ProductCategory::withCount('products')
            ->get()
            ->map(function ($category) {
                $totalSales = OrderItem::whereHas('product', function ($query) use ($category) {
                    $query->where('product_category_id', $category->id);
                })->sum('price');
                
                return [
                    'name' => $category->name,
                    'sales' => $totalSales / 100,
                    'products_count' => $category->products_count,
                ];
            });

        return Inertia::render('Admin/Analytics', [
            'stats' => $stats,
            'monthlySales' => $monthlySales,
            'topProducts' => $topProducts,
            'categorySales' => $categorySales,
        ]);
    }

    public function reports()
    {
        // Sales report
        $salesReport = [
            'today' => Order::whereDate('created_at', today())
                ->where('status', '!=', 'canceled')
                ->sum('total_price') / 100,
            'thisWeek' => Order::whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])
                ->where('status', '!=', 'canceled')
                ->sum('total_price') / 100,
            'thisMonth' => Order::whereMonth('created_at', now()->month)
                ->where('status', '!=', 'canceled')
                ->sum('total_price') / 100,
            'thisYear' => Order::whereYear('created_at', now()->year)
                ->where('status', '!=', 'canceled')
                ->sum('total_price') / 100,
        ];

        // Customer report
        $customerReport = [
            'totalCustomers' => User::count(),
            'newThisMonth' => User::whereMonth('created_at', now()->month)->count(),
            'activeCustomers' => User::whereHas('orders')->count(),
        ];

        // Product report
        $productReport = [
            'totalProducts' => Product::count(),
            'lowStock' => Product::where('stock_quantity', '<', 10)->count(),
            'outOfStock' => Product::where('stock_quantity', 0)->count(),
            'totalValue' => Product::sum('price') / 100,
        ];

        // Order status report
        $orderStatusReport = [
            'pending' => Order::where('status', 'pending')->count(),
            'confirmed' => Order::where('status', 'confirmed')->count(),
            'sent' => Order::where('status', 'sent')->count(),
            'delivered' => Order::where('status', 'delivered')->count(),
            'canceled' => Order::where('status', 'canceled')->count(),
        ];

        return Inertia::render('Admin/Reports', [
            'salesReport' => $salesReport,
            'customerReport' => $customerReport,
            'productReport' => $productReport,
            'orderStatusReport' => $orderStatusReport,
        ]);
    }
}
