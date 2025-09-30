<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductCategory::create([
            'name' => 'Chairs',
            'image' => 'images/feature/feature_1.png',
        ]);
        ProductCategory::create([
            'name' => 'Tables',
            'image' => 'images/feature/feature_2.png',
        ]);
        ProductCategory::create([
            'name' => 'Sofas',
            'image' => 'images/feature/feature_3.png',
        ]);
        ProductCategory::create([
            'name' => 'Armchairs',
            'image' => 'images/feature/feature_4.png',
        ]);
    }
}
