<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function adminShow($id)
    {
        $order = Order::with('user', 'items')->findOrFail($id);
        return Inertia::render('Admin/OrderShow', [
            'order' => $order,
        ]);
    }

    public function adminEdit($id)
    {
        $order = Order::with('user', 'items')->findOrFail($id);
        return Inertia::render('Admin/OrderEdit', [
            'order' => $order,
        ]);
    }

    public function adminUpdate(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->update($request->only(['status', 'payment_method', 'shipping_method']));
        return redirect()->route('admin.orders.index');
    }

    public function adminDestroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return redirect()->route('admin.orders.index');
    }
    public function adminIndex()
    {
        $orders = Order::with('user')->get();
        return Inertia::render('Admin/Orders', [
            'orders' => $orders,
        ]);
    }
    public function index()
    {
        $orders = Order::where('user_id', Auth::id())->orderByDesc('created_at')->get();
        return Inertia::render('Orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function show($id)
    {
        $order = Order::with('items')->where('user_id', Auth::id())->findOrFail($id);
        return Inertia::render('Orders/Show', [
            'order' => $order,
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $cartItems = Cart::with('product')->where('user_id', $user->id)->get();
        if ($cartItems->isEmpty()) {
            return redirect()->route('cart.index');
        }
        $total = $cartItems->sum(fn($item) => $item->product->price * $item->quantity);
        $order = Order::create([
            'user_id' => $user->id,
            'status' => 'pending',
            'total_price' => $total,
            'order_number' => uniqid('ARZ'),
            'payment_method' => $request->input('payment_method', 'check'),
            'shipping_method' => 'free_worldwide',
        ]);
        foreach ($cartItems as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item->product_id,
                'product_name' => $item->product->name,
                'product_price' => $item->product->price,
                'quantity' => $item->quantity,
            ]);
        }
        Cart::where('user_id', $user->id)->delete();
        return redirect()->route('orders.show', $order->id);
    }

    public function track(Request $request)
    {
        $order = Order::where('order_number', $request->input('order_number'))->firstOrFail();
        return Inertia::render('Orders/Track', [
            'order' => $order,
        ]);
    }
}
