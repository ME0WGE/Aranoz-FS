<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public function index()
    {
        $discounts = \App\Models\Discount::withCount('products')->get();
        return \Inertia\Inertia::render('Admin/Discounts', [
            'discounts' => $discounts,
        ]);
    }

    public function create()
    {
        return \Inertia\Inertia::render('Admin/Discounts/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|numeric|min:0|max:100',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        \App\Models\Discount::create($validated);

        return redirect()->route('admin.discounts.index')->with('success', 'Discount created successfully!');
    }

    public function edit($id)
    {
        $discount = \App\Models\Discount::findOrFail($id);
        
        return \Inertia\Inertia::render('Admin/Discounts/Edit', [
            'discount' => $discount,
        ]);
    }

    public function update(Request $request, $id)
    {
        $discount = \App\Models\Discount::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'percentage' => 'required|numeric|min:0|max:100',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        $discount->update($validated);

        return redirect()->route('admin.discounts.index')->with('success', 'Discount updated successfully!');
    }

    public function destroy($id)
    {
        $discount = \App\Models\Discount::findOrFail($id);
        
        // Check if discount is used by products
        if ($discount->products()->count() > 0) {
            return back()->with('error', 'Cannot delete discount that is currently applied to products!');
        }
        
        $discount->delete();

        return redirect()->route('admin.discounts.index')->with('success', 'Discount deleted successfully!');
    }
}
