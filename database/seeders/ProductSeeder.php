<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Chaise Scandinave',
            'description' => 'Chaise confortable et design pour le salon.',
            'price' => 12000, // Price in cents
            'stock_quantity' => 10,
            'pinned' => true,
            'picture_main' => 'chaise1.jpg',
            'picture_rear' => 'chaise2.jpg',
            'picture_left' => 'chaise3.jpg',
            'picture_right' => 'chaise4.jpg',
            'product_category_id' => 1,
            'discount_id' => 1,
            'color_id' => 1,
        ]);
        Product::create([
            'name' => 'Table en bois',
            'description' => 'Table robuste en bois massif.',
            'price' => 35000, // Price in cents
            'stock_quantity' => 5,
            'pinned' => false,
            'picture_main' => 'table1.jpg',
            'picture_rear' => 'table2.jpg',
            'picture_left' => 'table3.jpg',
            'picture_right' => 'table4.jpg',
            'product_category_id' => 2,
            'discount_id' => 2,
            'color_id' => 2,
        ]);
    }
}
