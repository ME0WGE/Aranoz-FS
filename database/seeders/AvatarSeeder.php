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
            'path' => 'images/avatars/avatar1.png',
        ]);
        Avatar::create([
            'path' => 'images/avatars/avatar2.png',
        ]);
        Avatar::create([
            'path' => 'images/avatars/avatar3.png',
        ]);
    }
}
