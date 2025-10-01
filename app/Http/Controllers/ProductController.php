<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function adminIndex()
    {
        $products = Product::with('category')->get();
        return Inertia::render('Admin/Products', [
            'products' => $products,
        ]);
    }
    public function index() {
        $products = Product::all();
        $categories = \App\Models\ProductCategory::all();
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        return Inertia::render('Category', [
            'products' => $products,
            'categories' => $categories,
            'cartCount' => $cartCount,
        ]);
    }

    public function show($id) {
        $product = Product::with('category')->findOrFail($id);
        $thumbnails = [$product->image, $product->image, $product->image];
        $productData = [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'image' => $product->image,
            'thumbnails' => $thumbnails,
            'category' => $product->category ? $product->category->name : '',
            'availability' => $product->stock > 0 ? 'In stock' : 'Out of stock',
            'description' => $product->description,
        ];

        $reviews = [
            [
                'name' => 'Blake Ruiz',
                'avatar' => '/storage/images/avatar1.jpg',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ],
            [
                'name' => 'Blake Ruiz',
                'avatar' => '/storage/images/avatar2.jpg',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ],
            [
                'name' => 'Blake Ruiz',
                'avatar' => '/storage/images/avatar3.jpg',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            ],
        ];

        $bestSellers = Product::orderBy('id', 'desc')->take(4)->get()->map(function($item) {
            return [
                'name' => $item->name,
                'price' => $item->price,
                'image' => $item->image,
            ];
        });

        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }

        return Inertia::render('ProductDetails', [
            'product' => $productData,
            'reviews' => $reviews,
            'bestSellers' => $bestSellers,
            'cartCount' => $cartCount,
        ]);
    }
}
