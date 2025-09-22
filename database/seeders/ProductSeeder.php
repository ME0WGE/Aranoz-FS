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
            'price' => 120,
            'quantity' => 10,
            'pinned' => true,
            'image_1' => 'chaise1.jpg',
            'image_2' => 'chaise2.jpg',
            'image_3' => 'chaise3.jpg',
            'image_4' => 'chaise4.jpg',
            'product_category_id' => 1,
            'discount_id' => 1,
            'color_id' => 1,
        ]);
        Product::create([
            'name' => 'Table en bois',
            'description' => 'Table robuste en bois massif.',
            'price' => 350,
            'quantity' => 5,
            'pinned' => false,
            'image_1' => 'table1.jpg',
            'image_2' => 'table2.jpg',
            'image_3' => 'table3.jpg',
            'image_4' => 'table4.jpg',
            'product_category_id' => 1,
            'discount_id' => 1,
            'color_id' => 1,
        ]);
    }
}
