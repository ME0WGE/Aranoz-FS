<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index() {
        $products = Product::all();
        $categories = \App\Models\ProductCategory::all();
        return Inertia::render('Category', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }

    public function show($id) {
        $product = Product::with('category')->findOrFail($id);
        // Demo thumbnails (replace with real images if needed)
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

        // Demo reviews (replace with real reviews if needed)
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

        // Demo best sellers (replace with real products if needed)
        $bestSellers = Product::orderBy('id', 'desc')->take(4)->get()->map(function($item) {
            return [
                'name' => $item->name,
                'price' => $item->price,
                'image' => $item->image,
            ];
        });

        return Inertia::render('ProductDetails', [
            'product' => $productData,
            'reviews' => $reviews,
            'bestSellers' => $bestSellers,
        ]);
    }
}
