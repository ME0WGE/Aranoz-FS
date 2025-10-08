<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\ProductCategory;
use App\Models\Product;
use App\Models\Blog;

class HomeController extends Controller
{
    public function index() {
        // Get categories for Featured Category section
        $categories = ProductCategory::limit(4)->get();
        
        // Get featured products for Awesome Shop section
        $featuredProducts = Product::with('category')
            ->where('pinned', true)
            ->limit(8)
            ->get();
            
        // If not enough pinned products, get random products
        if ($featuredProducts->count() < 8) {
            $additionalProducts = Product::with('category')
                ->where('pinned', false)
                ->inRandomOrder()
                ->limit(8 - $featuredProducts->count())
                ->get();
            $featuredProducts = $featuredProducts->merge($additionalProducts);
        }
        
        // Get best sellers (most liked products)
        $bestSellers = Product::with('category')
            ->withCount('likedBy')
            ->orderBy('liked_by_count', 'desc')
            ->limit(4)
            ->get();
            
        // Get sale product for Weekly Sale section
        $saleProduct = Product::with('discount')
            ->whereHas('discount')
            ->inRandomOrder()
            ->first();
            
        // Get recent blogs
        $blogs = Blog::with('category')
            ->orderBy('created_at', 'desc')
            ->limit(4)
            ->get();
        
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        
        return Inertia::render('Home', [
            'categories' => $categories,
            'products' => $featuredProducts,
            'bestSellers' => $bestSellers,
            'saleProduct' => $saleProduct,
            'blogs' => $blogs,
            'cartCount' => $cartCount,
        ]);
    }
}
