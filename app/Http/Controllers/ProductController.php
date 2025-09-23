<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index() {
        $products = Product::all();
        return Inertia::render('Shop/Index', [
            'products' => $products,
        ]);
    }

    public function show($id) {
        $product = Product::find($id);
        return Inertia::render('Shop/Show', [
            'product' => $product,
        ]);
    }
}
