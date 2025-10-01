<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\ProductCategory;

class HomeController extends Controller
{
    public function index() {
        $categories = ProductCategory::all();
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        return Inertia::render('Home', [
            'categories' => $categories,
            'cartCount' => $cartCount,
        ]);
    }
}
