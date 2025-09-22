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
            'name' => 'Blanc',
            'hex' => '#FFFFFF',
        ]);
        Color::create([
            'name' => 'Noir',
            'hex' => '#000000',
        ]);
        Color::create([
            'name' => 'Bois',
            'hex' => '#A0522D',
        ]);
    }
}
