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
    public function index(Request $request) {
        $query = Product::with(['category', 'color', 'discount']);
        
        // Filter by category
        if ($request->has('category') && $request->category) {
            $query->where('product_category_id', $request->category);
        }
        
        // Filter by color
        if ($request->has('color') && $request->color) {
            $query->where('color_id', $request->color);
        }
        
        // Filter by price range
        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->min_price * 100); // Convert to cents
        }
        
        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->max_price * 100); // Convert to cents
        }
        
        // Search by name
        if ($request->has('search') && $request->search) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }
        
        // Sort by
        if ($request->has('sort_by')) {
            switch ($request->sort_by) {
                case 'price_asc':
                    $query->orderBy('price', 'asc');
                    break;
                case 'price_desc':
                    $query->orderBy('price', 'desc');
                    break;
                case 'name_asc':
                    $query->orderBy('name', 'asc');
                    break;
                case 'name_desc':
                    $query->orderBy('name', 'desc');
                    break;
                default:
                    $query->orderBy('created_at', 'desc');
            }
        } else {
            $query->orderBy('created_at', 'desc');
        }
        
        // Pagination
        $perPage = $request->has('per_page') ? $request->per_page : 9;
        $products = $query->paginate($perPage)->withQueryString();
        
        // Get categories with product count
        $categories = \App\Models\ProductCategory::withCount('products')->get();
        
        // Get colors with product count
        $colors = \App\Models\Color::withCount('products')->get();
        
        // Get best sellers
        $bestSellers = Product::with('category')
            ->withCount('likedBy')
            ->orderBy('liked_by_count', 'desc')
            ->limit(4)
            ->get();
        
        // Get price range
        $minPrice = floor(Product::min('price') / 100); // Convert from cents
        $maxPrice = ceil(Product::max('price') / 100); // Convert from cents
        
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        
        return Inertia::render('Category', [
            'products' => $products,
            'categories' => $categories,
            'colors' => $colors,
            'bestSellers' => $bestSellers,
            'filters' => [
                'category' => $request->category,
                'color' => $request->color,
                'min_price' => $request->min_price ?? $minPrice,
                'max_price' => $request->max_price ?? $maxPrice,
                'search' => $request->search,
                'sort_by' => $request->sort_by,
                'per_page' => $perPage,
            ],
            'priceRange' => [
                'min' => $minPrice,
                'max' => $maxPrice,
            ],
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
