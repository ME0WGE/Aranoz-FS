<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{
    public function index()
    {
        $categories = \App\Models\ProductCategory::all();
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        return \Inertia\Inertia::render('Admin/Categories', [
            'categories' => $categories,
            'cartCount' => $cartCount,
        ]);
    }
}
