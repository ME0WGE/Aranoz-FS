<?php

namespace Database\Seeders;

use App\Models\Color;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Color::create([
            'name' => 'White',
            'hex' => '#FFFFFF',
        ]);
        Color::create([
            'name' => 'Black',
            'hex' => '#000000',
        ]);
        Color::create([
            'name' => 'Wood',
            'hex' => '#A0522D',
        ]);
    }
}
