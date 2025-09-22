<?php

namespace Database\Seeders;

use App\Models\Discount;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DiscountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Discount::create([
            'name' => 'Aucune',
            'percent' => 0,
        ]);
        Discount::create([
            'name' => 'Promo été',
            'percent' => 10,
        ]);
        Discount::create([
            'name' => 'Black Friday',
            'percent' => 20,
        ]);
    }
}
