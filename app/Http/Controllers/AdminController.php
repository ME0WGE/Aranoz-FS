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
}
