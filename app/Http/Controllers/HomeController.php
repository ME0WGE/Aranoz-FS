<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use App\Models\ProductCategory;
use App\Models\Product;
use App\Models\Blog;
use App\Mail\PromoCodeRequestMail;

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
        
        // Set weekly sale end date (fixed date, not relative to now)
        // This ensures the timer doesn't reset on page refresh
        $saleEndDate = now()->endOfWeek()->addDays(2)->setTime(23, 59, 59)->toIso8601String();
            
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
            'saleEndDate' => $saleEndDate,
            'blogs' => $blogs,
            'cartCount' => $cartCount,
        ]);
    }

    public function requestPromoCode()
    {
        $user = Auth::user();
        
        try {
            Mail::to($user->email)->send(new PromoCodeRequestMail($user));
        } catch (\Exception $e) {
            \Log::error('Erreur envoi email code promo: ' . $e->getMessage());
            return back()->with('error', 'Une erreur est survenue. Veuillez réessayer.');
        }
        
        return back()->with('success', 'Votre demande a été enregistrée ! Vous recevrez bientôt votre code promo par email.');
    }
}
