<?php

namespace Database\Seeders;

use App\Models\OrderItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OrderItem::create([
            'order_id' => 1,
            'product_id' => 1,
            'quantity' => 2,
            'product_name' => 'Chaise Scandinave',
            'product_price' => 12000, // Price in cents
        ]);
        OrderItem::create([
            'order_id' => 1,
            'product_id' => 2,
            'quantity' => 1,
            'product_name' => 'Table en bois',
            'product_price' => 35000, // Price in cents
        ]);
        OrderItem::create([
            'order_id' => 2,
            'product_id' => 1,
            'quantity' => 1,
            'product_name' => 'Chaise Scandinave',
            'product_price' => 12000, // Price in cents
        ]);
    }
}
