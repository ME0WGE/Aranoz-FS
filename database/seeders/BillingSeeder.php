<?php

namespace Database\Seeders;

use App\Models\Billing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BillingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Billing::create([
            'user_id' => 1,
            'order_id' => 1,
            'address' => '12 rue des Lilas, Paris',
            'total' => 470,
        ]);
        Billing::create([
            'user_id' => 1,
            'order_id' => 2,
            'address' => '12 rue des Lilas, Paris',
            'total' => 120,
        ]);
    }
}
