<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Order::create([
            'user_id' => 1,
            'total_price' => 47000, // Price in cents
            'order_number' => 'ARZ-2025-001',
            'status' => 'pending',
            'payment_method' => 'paypal',
            'shipping_method' => 'free_worldwide',
        ]);
        Order::create([
            'user_id' => 1,
            'total_price' => 12000, // Price in cents
            'order_number' => 'ARZ-2025-002',
            'status' => 'confirmed',
            'payment_method' => 'check',
            'shipping_method' => 'free_worldwide',
        ]);
    }
}
