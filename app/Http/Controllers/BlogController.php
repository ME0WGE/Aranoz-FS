<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function adminIndex()
    {
        $posts = Blog::with('category', 'tags')->get();
        return Inertia::render('Admin/Blog', [
            'posts' => $posts,
        ]);
    }
    public function index() {
        $posts = collect(Blog::with('tags')->get());
        $categories = [
            ['id' => 1, 'name' => 'Travel news', 'count' => 2],
            ['id' => 2, 'name' => 'Modern Technology', 'count' => 1],
            ['id' => 3, 'name' => 'Product', 'count' => 1],
            ['id' => 4, 'name' => 'Inspiration', 'count' => 2],
            ['id' => 5, 'name' => 'Health Care', 'count' => 1],
        ];
        $recentPosts = $posts->take(3);
        $tags = ['project', 'love', 'technology', 'travel', 'lifestyle', 'design', 'inspiration'];
        $instagramFeeds = [
            '/storage/images/blog/insta1.jpg',
            '/storage/images/blog/insta2.jpg',
            '/storage/images/blog/insta3.jpg',
            '/storage/images/blog/insta4.jpg',
            '/storage/images/blog/insta5.jpg',
            '/storage/images/blog/insta6.jpg',
        ];
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        return Inertia::render('Blog', [
            'posts' => $posts,
            'categories' => $categories,
            'recentPosts' => $recentPosts,
            'tags' => $tags,
            'instagramFeeds' => $instagramFeeds,
            'cartCount' => $cartCount,
        ]);
    }

    public function show($id) {
        $blog = Blog::find($id);
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        return Inertia::render('Blog', [
            'blog' => $blog,
            'cartCount' => $cartCount,
        ]);
    }
}
