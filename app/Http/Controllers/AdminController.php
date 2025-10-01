<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
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
}
