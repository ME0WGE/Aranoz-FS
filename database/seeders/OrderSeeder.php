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
            'total' => 470,
            'status' => 'en attente',
        ]);
        Order::create([
            'user_id' => 1,
            'total' => 120,
            'status' => 'payé',
        ]);
    }
}
