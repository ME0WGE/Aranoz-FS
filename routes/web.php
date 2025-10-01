<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\LikedProductController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\NewsletterSubscriptionController;
use App\Mail\DemoMail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// PUBLIC ROUTES
// Cart (panier)
Route::get('/checkout', function() {
    $user = Auth::user();
    $cartItems = \App\Models\Cart::with('product')->where('user_id', $user->id)->get();
    return Inertia::render('Checkout', [
        'cartItems' => $cartItems,
        'user' => $user,
    ]);
})->middleware(['auth', 'verified'])->name('checkout');
Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
Route::post('/cart/remove', [CartController::class, 'remove'])->name('cart.remove');
Route::post('/cart/clear', [CartController::class, 'clear'])->name('cart.clear');
// ========================================

// Homepage
Route::get('/', [HomeController::class, "index"])->name('home');

// Product browsing (public)
Route::get('/products', [ProductController::class, "index"])->name('products');
Route::get('/products/{id}', [ProductController::class, "show"])->name('products.show');
Route::get('/products/category/{category}', [ProductController::class, "category"])->name('products.category');

// Blog (public)
Route::get('/blog', [BlogController::class, "index"])->name('blog');
Route::get('/blog/{id}', [BlogController::class, "show"])->name('blog.show');

// Contact (public)
Route::get('/contact', [ContactController::class, "index"])->name('contact');
Route::post('/contact', [ContactController::class, "store"])->name('contact.store');

// Newsletter subscription (public)
Route::post('/newsletter', [NewsletterSubscriptionController::class, "store"])->name('newsletter.subscribe');

// ========================================
// AUTHENTICATED USER ROUTES
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/orders/{id}', [OrderController::class, 'show'])->name('orders.show');
    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/orders/track', [OrderController::class, 'track'])->name('orders.track');
// ========================================

Route::middleware(['auth', 'verified'])->group(function () {
    
    // User Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // User Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Shopping Cart
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');
    Route::patch('/cart/update/{id}', [CartController::class, 'update'])->name('cart.update');
    Route::delete('/cart/remove/{id}', [CartController::class, 'remove'])->name('cart.remove');
    Route::delete('/cart/clear', [CartController::class, 'clear'])->name('cart.clear');

    // Liked Products (Wishlist)
    Route::get('/liked-products', [LikedProductController::class, 'index'])->name('liked-products.index');
    Route::post('/liked-products/{product}', [LikedProductController::class, 'store'])->name('liked-products.store');
    Route::delete('/liked-products/{product}', [LikedProductController::class, 'destroy'])->name('liked-products.destroy');

    // Orders
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/orders/{id}', [OrderController::class, 'show'])->name('orders.show');
    Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
    Route::get('/orders/{id}/track', [OrderController::class, 'track'])->name('orders.track');

    // Blog Comments (authenticated users can comment)
    Route::post('/blog/{id}/comment', [BlogController::class, 'comment'])->name('blog.comment');
});

// ========================================
// ADMIN ROUTES (Admin, Webmaster, Agent, Community Manager)
// ========================================

Route::middleware(['auth', 'verified', 'role:admin,webmaster,agent,community-manager'])->group(function () {
    
    // Admin Dashboard
    Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    
    // Order Management (Admin, Agent)
    Route::middleware('role:admin,agent')->group(function () {
        Route::get('/admin/orders', [OrderController::class, 'adminIndex'])->name('admin.orders.index');
        Route::get('/admin/orders/{id}', [OrderController::class, 'adminShow'])->name('admin.orders.show');
        Route::patch('/admin/orders/{id}/status', [OrderController::class, 'updateStatus'])->name('admin.orders.update-status');
    });
    
        // ADMIN MAILBOX
        Route::get('/admin/mailbox', function() {
            return inertia('Admin/Mailbox');
        })->name('admin.mailbox');
});

// ========================================
// WEBMASTER ROUTES (Webmaster, Admin)
// ========================================

Route::middleware(['auth', 'verified', 'role:webmaster,admin'])->group(function () {
    
    // Product Management
    Route::get('/admin/products', [ProductController::class, 'adminIndex'])->name('admin.products.index');
    Route::get('/admin/products/create', [ProductController::class, 'create'])->name('admin.products.create');
    Route::post('/admin/products', [ProductController::class, 'store'])->name('admin.products.store');
    Route::get('/admin/products/{id}/edit', [ProductController::class, 'edit'])->name('admin.products.edit');
    Route::patch('/admin/products/{id}', [ProductController::class, 'update'])->name('admin.products.update');
    Route::delete('/admin/products/{id}', [ProductController::class, 'destroy'])->name('admin.products.destroy');
    Route::patch('/admin/products/{id}/pin', [ProductController::class, 'pin'])->name('admin.products.pin');

    // Product Categories
    Route::get('/admin/categories', [ProductCategoryController::class, 'index'])->name('admin.categories.index');
    Route::post('/admin/categories', [ProductCategoryController::class, 'store'])->name('admin.categories.store');
    Route::patch('/admin/categories/{id}', [ProductCategoryController::class, 'update'])->name('admin.categories.update');
    Route::delete('/admin/categories/{id}', [ProductCategoryController::class, 'destroy'])->name('admin.categories.destroy');

    // Discounts Management
    Route::get('/admin/discounts', [DiscountController::class, 'index'])->name('admin.discounts.index');
    Route::post('/admin/discounts', [DiscountController::class, 'store'])->name('admin.discounts.store');
    Route::patch('/admin/discounts/{id}', [DiscountController::class, 'update'])->name('admin.discounts.update');
    Route::delete('/admin/discounts/{id}', [DiscountController::class, 'destroy'])->name('admin.discounts.destroy');

    // Coupons Management
    Route::get('/admin/coupons', [CouponController::class, 'index'])->name('admin.coupons.index');
    Route::post('/admin/coupons', [CouponController::class, 'store'])->name('admin.coupons.store');
    Route::patch('/admin/coupons/{id}', [CouponController::class, 'update'])->name('admin.coupons.update');
    Route::delete('/admin/coupons/{id}', [CouponController::class, 'destroy'])->name('admin.coupons.destroy');
});

// ========================================
// COMMUNITY MANAGER ROUTES (Community Manager, Admin)
// ========================================

Route::middleware(['auth', 'verified', 'role:community-manager,admin'])->group(function () {
    
    // Blog Management
    Route::get('/admin/blog', [BlogController::class, 'adminIndex'])->name('admin.blog.index');
    Route::get('/admin/blog/create', [BlogController::class, 'create'])->name('admin.blog.create');
    Route::post('/admin/blog', [BlogController::class, 'store'])->name('admin.blog.store');
    Route::get('/admin/blog/{id}/edit', [BlogController::class, 'edit'])->name('admin.blog.edit');
    Route::patch('/admin/blog/{id}', [BlogController::class, 'update'])->name('admin.blog.update');
    Route::delete('/admin/blog/{id}', [BlogController::class, 'destroy'])->name('admin.blog.destroy');

    // Blog Categories
    Route::get('/admin/blog-categories', [BlogController::class, 'categoriesIndex'])->name('admin.blog-categories.index');
    Route::post('/admin/blog-categories', [BlogController::class, 'categoryStore'])->name('admin.blog-categories.store');
    Route::patch('/admin/blog-categories/{id}', [BlogController::class, 'categoryUpdate'])->name('admin.blog-categories.update');
    Route::delete('/admin/blog-categories/{id}', [BlogController::class, 'categoryDestroy'])->name('admin.blog-categories.destroy');

    // Blog Tags
    Route::get('/admin/blog-tags', [BlogController::class, 'tagsIndex'])->name('admin.blog-tags.index');
    Route::post('/admin/blog-tags', [BlogController::class, 'tagStore'])->name('admin.blog-tags.store');
    Route::patch('/admin/blog-tags/{id}', [BlogController::class, 'tagUpdate'])->name('admin.blog-tags.update');
    Route::delete('/admin/blog-tags/{id}', [BlogController::class, 'tagDestroy'])->name('admin.blog-tags.destroy');
});

// ========================================
// ADMIN ONLY ROUTES
// ========================================

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    
    // User Management
    Route::get('/admin/users', [AdminController::class, 'users'])->name('admin.users.index');
    Route::patch('/admin/users/{id}/role', [AdminController::class, 'updateUserRole'])->name('admin.users.update-role');
    Route::delete('/admin/users/{id}', [AdminController::class, 'destroyUser'])->name('admin.users.destroy');

    // Analytics & Reports
    Route::get('/admin/analytics', [AdminController::class, 'analytics'])->name('admin.analytics');
    Route::get('/admin/reports', [AdminController::class, 'reports'])->name('admin.reports');
});

// Admin Management Pages
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'users'])->name('admin.users.index');
    Route::get('/admin/orders', [OrderController::class, 'adminIndex'])->name('admin.orders.index');
    Route::get('/admin/products', [ProductController::class, 'adminIndex'])->name('admin.products.index');
    Route::get('/admin/coupons', [CouponController::class, 'index'])->name('admin.coupons.index');
    Route::get('/admin/blog', [BlogController::class, 'adminIndex'])->name('admin.blog.index');
    Route::get('/admin/categories', [ProductCategoryController::class, 'index'])->name('admin.categories.index');
    Route::get('/admin/discounts', [DiscountController::class, 'index'])->name('admin.discounts.index');
});

// Admin CRUD routes
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    // Users
    Route::get('/admin/users/{id}', [AdminController::class, 'showUser'])->name('admin.users.show');
    Route::get('/admin/users/{id}/edit', [AdminController::class, 'editUser'])->name('admin.users.edit');
    Route::patch('/admin/users/{id}', [AdminController::class, 'updateUser'])->name('admin.users.update');
    Route::delete('/admin/users/{id}', [AdminController::class, 'destroyUser'])->name('admin.users.destroy');

    // Orders
    Route::get('/admin/orders/{id}', [OrderController::class, 'adminShow'])->name('admin.orders.show');
    Route::get('/admin/orders/{id}/edit', [OrderController::class, 'adminEdit'])->name('admin.orders.edit');
    Route::patch('/admin/orders/{id}', [OrderController::class, 'adminUpdate'])->name('admin.orders.update');
    Route::delete('/admin/orders/{id}', [OrderController::class, 'adminDestroy'])->name('admin.orders.destroy');

    // Products
    Route::get('/admin/products/{id}', [ProductController::class, 'adminShow'])->name('admin.products.show');
    Route::get('/admin/products/{id}/edit', [ProductController::class, 'adminEdit'])->name('admin.products.edit');
    Route::patch('/admin/products/{id}', [ProductController::class, 'adminUpdate'])->name('admin.products.update');
    Route::delete('/admin/products/{id}', [ProductController::class, 'adminDestroy'])->name('admin.products.destroy');
    Route::get('/admin/products/create', [ProductController::class, 'adminCreate'])->name('admin.products.create');
    Route::post('/admin/products', [ProductController::class, 'adminStore'])->name('admin.products.store');

    // Coupons
    Route::get('/admin/coupons/{id}/edit', [CouponController::class, 'edit'])->name('admin.coupons.edit');
    Route::patch('/admin/coupons/{id}', [CouponController::class, 'update'])->name('admin.coupons.update');
    Route::delete('/admin/coupons/{id}', [CouponController::class, 'destroy'])->name('admin.coupons.destroy');
    Route::get('/admin/coupons/create', [CouponController::class, 'create'])->name('admin.coupons.create');
    Route::post('/admin/coupons', [CouponController::class, 'store'])->name('admin.coupons.store');

    // Blog
    Route::get('/admin/blog/{id}', [BlogController::class, 'adminShow'])->name('admin.blog.show');
    Route::get('/admin/blog/{id}/edit', [BlogController::class, 'adminEdit'])->name('admin.blog.edit');
    Route::patch('/admin/blog/{id}', [BlogController::class, 'adminUpdate'])->name('admin.blog.update');
    Route::delete('/admin/blog/{id}', [BlogController::class, 'adminDestroy'])->name('admin.blog.destroy');
    Route::get('/admin/blog/create', [BlogController::class, 'adminCreate'])->name('admin.blog.create');
    Route::post('/admin/blog', [BlogController::class, 'adminStore'])->name('admin.blog.store');

    // Categories
    Route::get('/admin/categories/{id}/edit', [ProductCategoryController::class, 'edit'])->name('admin.categories.edit');
    Route::patch('/admin/categories/{id}', [ProductCategoryController::class, 'update'])->name('admin.categories.update');
    Route::delete('/admin/categories/{id}', [ProductCategoryController::class, 'destroy'])->name('admin.categories.destroy');
    Route::get('/admin/categories/create', [ProductCategoryController::class, 'create'])->name('admin.categories.create');
    Route::post('/admin/categories', [ProductCategoryController::class, 'store'])->name('admin.categories.store');

    // Discounts
    Route::get('/admin/discounts/{id}/edit', [DiscountController::class, 'edit'])->name('admin.discounts.edit');
    Route::patch('/admin/discounts/{id}', [DiscountController::class, 'update'])->name('admin.discounts.update');
    Route::delete('/admin/discounts/{id}', [DiscountController::class, 'destroy'])->name('admin.discounts.destroy');
    Route::get('/admin/discounts/create', [DiscountController::class, 'create'])->name('admin.discounts.create');
    Route::post('/admin/discounts', [DiscountController::class, 'store'])->name('admin.discounts.store');
});

// Route /admin/dashboard retirée (doublon)

if (app()->environment('local')) {
    Route::get('/mail-test', function () {
        Mail::to(Auth::user()->email)->send(new DemoMail());
        return 'Mail envoyé.';
    });
}

require __DIR__.'/auth.php';
