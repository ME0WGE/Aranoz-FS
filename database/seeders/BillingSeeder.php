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
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john@example.com',
            'phone_number' => '+32 123 456 789',
            'street' => 'rue des Lilas',
            'number' => '12',
            'city' => 'Paris',
            'zip_code' => '75001',
            'country_id' => 1,
        ]);
        Billing::create([
            'user_id' => 2,
            'first_name' => 'Jane',
            'last_name' => 'Smith',
            'email' => 'jane@example.com',
            'phone_number' => '+32 987 654 321',
            'street' => 'avenue de la Paix',
            'number' => '45',
            'city' => 'Bruxelles',
            'zip_code' => '1000',
            'country_id' => 2,
        ]);
    }
}
