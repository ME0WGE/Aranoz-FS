<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index() {
        $blogs = Blog::all();
        return Inertia::render('Blog/Posts/Index', [
            'blogs' => $blogs,
        ]);
    }

    public function show($id) {
        $blog = Blog::find($id);
        return Inertia::render('Blog/Posts/Show', [
            'blog' => $blog,
        ]);
    }
}
