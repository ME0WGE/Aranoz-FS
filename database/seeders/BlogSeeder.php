<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Blog::create([
            'title' => 'Premier article',
            'content' => 'Ceci est le premier article du blog.',
            'image' => 'blog1.jpg',
            'blog_category_id' => 1,
        ]);
        Blog::create([
            'title' => 'Deuxième article',
            'content' => 'Un autre article intéressant.',
            'image' => 'blog2.jpg',
            'blog_category_id' => 1,
        ]);
        Blog::create([
            'title' => 'Troisième article',
            'content' => 'Encore du contenu pour le blog.',
            'image' => 'blog3.jpg',
            'blog_category_id' => 1,
        ]);
    }
}
