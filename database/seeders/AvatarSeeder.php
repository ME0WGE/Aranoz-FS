<?php

namespace Database\Seeders;

use App\Models\Avatar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AvatarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Avatar::create([
            'url' => 'https://example.com/avatar1.png',
        ]);
        Avatar::create([
            'url' => 'https://example.com/avatar2.png',
        ]);
        Avatar::create([
            'url' => 'https://example.com/avatar3.png',
        ]);
    }
}
