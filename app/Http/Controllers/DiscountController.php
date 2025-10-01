<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public function index()
    {
        $discounts = \App\Models\Discount::all();
        return \Inertia\Inertia::render('Admin/Discounts', [
            'discounts' => $discounts,
        ]);
    }
}
