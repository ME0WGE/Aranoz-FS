<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{
    public function index()
    {
        $categories = \App\Models\ProductCategory::all();
        return \Inertia\Inertia::render('Admin/Categories', [
            'categories' => $categories,
        ]);
    }
}
