<?php

namespace App\Http\Controllers;


use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $cartItems = Cart::with('product')->where('user_id', $user->id)->get();
        $cartCount = 0;
        if ($cartItems) {
            $cartCount = $cartItems->sum('quantity');
        }
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
            'cartCount' => $cartCount,
        ]);
    }

    public function add(Request $request)
    {
        $user = Auth::user();
        $productId = $request->input('product_id');
        $quantity = $request->input('quantity', 1);

        $cartItem = Cart::where([
            'user_id' => $user->id,
            'product_id' => $productId,
        ])->first();
        if ($cartItem) {
            $cartItem->quantity += $quantity;
            $cartItem->save();
        } else {
            Cart::create([
                'user_id' => $user->id,
                'product_id' => $productId,
                'quantity' => $quantity,
            ]);
        }

        $cartCount = Cart::where('user_id', $user->id)->sum('quantity');
        $cartItems = Cart::with('product')->where('user_id', $user->id)->get();
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
            'cartCount' => $cartCount,
        ]);
    }

    public function remove(Request $request)
    {
        $user = Auth::user();
        $productId = $request->input('product_id');
        Cart::where('user_id', $user->id)->where('product_id', $productId)->delete();
        $cartCount = Cart::where('user_id', $user->id)->sum('quantity');
        $cartItems = Cart::with('product')->where('user_id', $user->id)->get();
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
            'cartCount' => $cartCount,
        ]);
    }

    public function clear()
    {
        $user = Auth::user();
        Cart::where('user_id', $user->id)->delete();
        $cartCount = 0;
        $cartItems = [];
        return Inertia::render('Cart', [
            'cartItems' => $cartItems,
            'cartCount' => $cartCount,
        ]);
    }
}
