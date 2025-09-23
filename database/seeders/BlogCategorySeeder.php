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
            'name' => 'News',
        ]);
        BlogCategory::create([
            'name' => 'Tips',
        ]);
        BlogCategory::create([
            'name' => 'Inspiration',
        ]);
    }
}
