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
    public function updateStatus(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $status = $request->input('status');
        if ($status === 'approved') $status = 'confirmed';
        if ($status === 'cancelled') $status = 'canceled';
        if (in_array($status, ['pending', 'confirmed', 'canceled'])) {
            $order->status = $status;
            $order->save();
            $msg = $status === 'confirmed' ? 'Commande validée avec succès.' : ($status === 'canceled' ? 'Commande annulée.' : 'Statut mis à jour.');
            return redirect()->route('admin.orders.index')->with('success', $msg);
        }
        return back()->with('error', 'Statut non autorisé.');
    }
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
    // Delete related order items first
    $order->items()->delete();
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
