<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Mail\DemoMail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public route
Route::get('/', [HomeController::class, "index"])->name('home');
Route::get('/products', [ProductController::class, "index"])->name('products');
Route::get('/products/{id}', [ProductController::class, "show"])->name('products.show');
Route::get('/contact', [ContactController::class, "index"])->name('contact');
Route::get('/blog', [BlogController::class, "index"])->name('blog');
Route::get('/blog/{id}', [BlogController::class, "show"])->name('blog.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Mailing route
Route::get('/mail-test', function () {
    Mail::to(Auth::user()->email)->send(new DemoMail());
    return 'Mail envoyé.';
});

require __DIR__.'/auth.php';
