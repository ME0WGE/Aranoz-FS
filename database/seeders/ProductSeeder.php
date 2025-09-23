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
            'name' => 'Modern Dining Chair',
            'description' => 'Elegant dining chair with ergonomic design and premium materials. Perfect for contemporary dining rooms.',
            'price' => 24900, // €249.00
            'stock_quantity' => 15,
            'pinned' => true,
            'picture_main' => 'images/product/product_1.png',
            'picture_rear' => 'images/product/product_1.png',
            'picture_left' => 'images/product/product_1.png',
            'picture_right' => 'images/product/product_1.png',
            'product_category_id' => 1, // Chairs
            'discount_id' => 1, // No discount
            'color_id' => 1, // White
        ]);

        Product::create([
            'name' => 'Scandinavian Sofa',
            'description' => 'Comfortable 3-seater sofa with clean lines and premium fabric upholstery. Ideal for modern living spaces.',
            'price' => 129900, // €1299.00
            'stock_quantity' => 8,
            'pinned' => true,
            'picture_main' => 'images/product/product_2.png',
            'picture_rear' => 'images/product/product_2.png',
            'picture_left' => 'images/product/product_2.png',
            'picture_right' => 'images/product/product_2.png',
            'product_category_id' => 3, // Sofas
            'discount_id' => 2, // 10% discount
            'color_id' => 2, // Black
        ]);

        Product::create([
            'name' => 'Oak Dining Table',
            'description' => 'Solid oak dining table with natural wood finish. Seats 6 people comfortably.',
            'price' => 89900, // €899.00
            'stock_quantity' => 12,
            'pinned' => false,
            'picture_main' => 'images/product/product_3.png',
            'picture_rear' => 'images/product/product_3.png',
            'picture_left' => 'images/product/product_3.png',
            'picture_right' => 'images/product/product_3.png',
            'product_category_id' => 2, // Tables
            'discount_id' => 1, // No discount
            'color_id' => 3, // Wood
        ]);

        Product::create([
            'name' => 'Minimalist Coffee Table',
            'description' => 'Sleek coffee table with glass top and metal legs. Perfect for modern living rooms.',
            'price' => 39900, // €399.00
            'stock_quantity' => 20,
            'pinned' => false,
            'picture_main' => 'images/product/product_4.png',
            'picture_rear' => 'images/product/product_4.png',
            'picture_left' => 'images/product/product_4.png',
            'picture_right' => 'images/product/product_4.png',
            'product_category_id' => 2, // Tables
            'discount_id' => 3, // 20% discount
            'color_id' => 1, // White
        ]);

        Product::create([
            'name' => 'Ergonomic Office Chair',
            'description' => 'Professional office chair with lumbar support and adjustable height. Perfect for home offices.',
            'price' => 59900, // €599.00
            'stock_quantity' => 25,
            'pinned' => true,
            'picture_main' => 'images/product/product_5.png',
            'picture_rear' => 'images/product/product_5.png',
            'picture_left' => 'images/product/product_5.png',
            'picture_right' => 'images/product/product_5.png',
            'product_category_id' => 1, // Chairs
            'discount_id' => 1, // No discount
            'color_id' => 2, // Black
        ]);

        Product::create([
            'name' => 'Luxury Armchair',
            'description' => 'Premium armchair with leather upholstery and wooden legs. A statement piece for any room.',
            'price' => 79900, // €799.00
            'stock_quantity' => 6,
            'pinned' => false,
            'picture_main' => 'images/product/product_6.png',
            'picture_rear' => 'images/product/product_6.png',
            'picture_left' => 'images/product/product_6.png',
            'picture_right' => 'images/product/product_6.png',
            'product_category_id' => 1, // Chairs
            'discount_id' => 2, // 10% discount
            'color_id' => 3, // Wood
        ]);

        Product::create([
            'name' => 'Sectional Sofa Set',
            'description' => 'Large modular sectional sofa perfect for family rooms. Includes corner piece and ottoman.',
            'price' => 199900, // €1999.00
            'stock_quantity' => 4,
            'pinned' => true,
            'picture_main' => 'images/product/product_7.png',
            'picture_rear' => 'images/product/product_7.png',
            'picture_left' => 'images/product/product_7.png',
            'picture_right' => 'images/product/product_7.png',
            'product_category_id' => 3, // Sofas
            'discount_id' => 1, // No discount
            'color_id' => 2, // Black
        ]);

        Product::create([
            'name' => 'Modern Side Table',
            'description' => 'Compact side table with storage drawer. Perfect for bedrooms or living rooms.',
            'price' => 19900, // €199.00
            'stock_quantity' => 18,
            'pinned' => false,
            'picture_main' => 'images/product/product_8.png',
            'picture_rear' => 'images/product/product_8.png',
            'picture_left' => 'images/product/product_8.png',
            'picture_right' => 'images/product/product_8.png',
            'product_category_id' => 2, // Tables
            'discount_id' => 3, // 20% discount
            'color_id' => 1, // White
        ]);

        Product::create([
            'name' => 'Designer Bar Stool',
            'description' => 'High-quality bar stool with adjustable height and comfortable seating.',
            'price' => 29900, // €299.00
            'stock_quantity' => 30,
            'pinned' => false,
            'picture_main' => 'images/product/product_9.png',
            'picture_rear' => 'images/product/product_9.png',
            'picture_left' => 'images/product/product_9.png',
            'picture_right' => 'images/product/product_9.png',
            'product_category_id' => 1, // Chairs
            'discount_id' => 2, // 10% discount
            'color_id' => 3, // Wood
        ]);
    }
}
