<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function adminStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'blog_category_id' => 'nullable|integer|exists:blog_categories,id',
            'image' => 'nullable|string|max:255',
        ]);
        $post = Blog::create($validated);
        return redirect()->route('admin.blog.index')->with('success', 'Article créé.');
    }
    public function adminCreate()
    {
        return \Inertia\Inertia::render('Admin/BlogCreate');
    }
    public function adminUpdate(Request $request, $id)
    {
        $post = Blog::findOrFail($id);
        $post->update($request->only(['title', 'content']));
        return redirect()->route('admin.blog.edit', $id)->with('success', 'Article mis à jour.');
    }
    public function adminEdit($id)
    {
        $post = Blog::with('category', 'tags')->findOrFail($id);
        return Inertia::render('Admin/BlogEdit', [
            'post' => $post,
        ]);
    }
    public function adminShow($id)
    {
        $post = Blog::with('category', 'tags')->findOrFail($id);
        return Inertia::render('Admin/BlogShow', [
            'post' => $post,
        ]);
    }
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
    public function adminDestroy($id)
    {
        $post = Blog::findOrFail($id);
        // Delete related comments first
        $post->comments()->delete();
        $post->delete();
        return redirect()->route('admin.blog.index')->with('success', 'Article supprimé.');
    }
}
