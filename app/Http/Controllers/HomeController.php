<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProductCategory;

class HomeController extends Controller
{
    public function index() {
        $categories = ProductCategory::all();
        return Inertia::render('Home', [
            'categories' => $categories,
        ]);
    }
}
