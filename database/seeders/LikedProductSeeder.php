<?php

namespace Database\Seeders;

use App\Models\LikedProduct;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikedProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LikedProduct::create([
            'user_id' => 1,
            'product_id' => 1,
        ]);
        LikedProduct::create([
            'user_id' => 1,
            'product_id' => 2,
        ]);
    }
}
