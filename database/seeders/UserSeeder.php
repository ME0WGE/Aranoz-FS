<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'avatar' => null,
            'role_id' => 1,
            'email' => 'john@example.com',
            'password' => Hash::make('password'),
        ]);
        User::create([
            'first_name' => 'Jane',
            'last_name' => 'Smith',
            'avatar' => null,
            'role_id' => 2,
            'email' => 'jane@example.com',
            'password' => Hash::make('password'),
        ]);
    }
}
