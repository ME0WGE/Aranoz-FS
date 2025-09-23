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
            'name' => 'No Discount',
            'percentage' => 0,
        ]);
        Discount::create([
            'name' => 'Summer Sale',
            'percentage' => 10,
        ]);
        Discount::create([
            'name' => 'Black Friday',
            'percentage' => 20,
        ]);
    }
}
