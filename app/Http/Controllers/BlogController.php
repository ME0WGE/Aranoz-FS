<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $blog = Blog::with(['category', 'tags', 'user', 'comments.user'])->findOrFail($id);
        
        // Get related blogs from same category
        $relatedBlogs = Blog::with('category')
            ->where('blog_category_id', $blog->blog_category_id)
            ->where('id', '!=', $blog->id)
            ->limit(3)
            ->get();
        
        $cartCount = 0;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $cartCount = \App\Models\Cart::where('user_id', \Illuminate\Support\Facades\Auth::id())->sum('quantity');
        }
        
        return Inertia::render('BlogDetails', [
            'blog' => $blog,
            'relatedBlogs' => $relatedBlogs,
            'cartCount' => $cartCount,
        ]);
    }

    // Admin Blog CRUD Methods
    public function create()
    {
        $categories = \App\Models\BlogCategory::all();
        $tags = \App\Models\Tag::all();
        
        return Inertia::render('Admin/Blog/Create', [
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'blog_category_id' => 'required|exists:blog_categories,id',
            'image' => 'required|image|max:2048',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/blog', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $blog = Blog::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'blog_category_id' => $validated['blog_category_id'],
            'image' => $validated['image'],
            'user_id' => Auth::id(),
        ]);

        // Attach tags
        if (isset($validated['tags'])) {
            $blog->tags()->sync($validated['tags']);
        }

        return redirect()->route('admin.blog.index')->with('success', 'Blog post created successfully!');
    }

    public function edit($id)
    {
        $blog = Blog::with(['category', 'tags'])->findOrFail($id);
        $categories = \App\Models\BlogCategory::all();
        $tags = \App\Models\Tag::all();
        
        return Inertia::render('Admin/Blog/Edit', [
            'blog' => $blog,
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }

    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'blog_category_id' => 'required|exists:blog_categories,id',
            'image' => 'nullable|image|max:2048',
            'tags' => 'nullable|array',
            'tags.*' => 'exists:tags,id',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/blog', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $blog->update([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'blog_category_id' => $validated['blog_category_id'],
            'image' => $validated['image'] ?? $blog->image,
        ]);

        // Sync tags
        if (isset($validated['tags'])) {
            $blog->tags()->sync($validated['tags']);
        }

        return redirect()->route('admin.blog.index')->with('success', 'Blog post updated successfully!');
    }

    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog->tags()->detach(); // Remove tag associations
        $blog->delete();

        return redirect()->route('admin.blog.index')->with('success', 'Blog post deleted successfully!');
    }

    // Blog Categories Management
    public function categoriesIndex()
    {
        $categories = \App\Models\BlogCategory::withCount('blogs')->get();
        
        return Inertia::render('Admin/BlogCategories', [
            'categories' => $categories,
        ]);
    }

    public function categoryStore(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:blog_categories,name',
        ]);

        \App\Models\BlogCategory::create($validated);

        return back()->with('success', 'Category created successfully!');
    }

    public function categoryUpdate(Request $request, $id)
    {
        $category = \App\Models\BlogCategory::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:blog_categories,name,' . $id,
        ]);

        $category->update($validated);

        return back()->with('success', 'Category updated successfully!');
    }

    public function categoryDestroy($id)
    {
        $category = \App\Models\BlogCategory::findOrFail($id);
        
        // Check if category has blogs
        if ($category->blogs()->count() > 0) {
            return back()->with('error', 'Cannot delete category with existing blog posts!');
        }
        
        $category->delete();

        return back()->with('success', 'Category deleted successfully!');
    }

    // Blog Tags Management
    public function tagsIndex()
    {
        $tags = \App\Models\Tag::withCount('blogs as posts_count')->get();
        
        return Inertia::render('Admin/Tags', [
            'tags' => $tags,
        ]);
    }

    public function tagStore(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:tags,name',
        ]);

        \App\Models\Tag::create($validated);

        return back()->with('success', 'Tag created successfully!');
    }

    public function tagUpdate(Request $request, $id)
    {
        $tag = \App\Models\Tag::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:tags,name,' . $id,
        ]);

        $tag->update($validated);

        return back()->with('success', 'Tag updated successfully!');
    }

    public function tagDestroy($id)
    {
        $tag = \App\Models\Tag::findOrFail($id);
        $tag->blogs()->detach(); // Remove associations
        $tag->delete();

        return back()->with('success', 'Tag deleted successfully!');
    }

    // Blog Comments
    public function comment(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);
        $user = Auth::user();
        
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        Comment::create([
            'message' => $validated['content'],
            'name' => $user->name,
            'email' => $user->email,
            'website' => null,
            'user_id' => $user->id,
            'blog_id' => $blog->id,
        ]);

        return back()->with('success', 'Commentaire ajouté avec succès !');
    }
}
