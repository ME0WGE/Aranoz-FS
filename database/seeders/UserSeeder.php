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
            'name' => 'John Doe',
            'avatar' => null,
            'role_id' => 1,
            'email' => 'john@example.com',
            'password' => Hash::make('password'),
        ]);
        User::create([
            'name' => 'Jane Smith',
            'avatar' => null,
            'role_id' => 2,
            'email' => 'jane@example.com',
            'password' => Hash::make('password'),
        ]);
    }
}
