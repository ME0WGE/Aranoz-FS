<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use Illuminate\Database\Seeder;

class BlogCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BlogCategory::create([
            'name' => 'Actualités',
        ]);
        BlogCategory::create([
            'name' => 'Conseils',
        ]);
        BlogCategory::create([
            'name' => 'Inspiration',
        ]);
    }
}
