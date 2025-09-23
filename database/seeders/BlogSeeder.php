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
        $blog1 = Blog::create([
            'title' => 'Modern Interior Design Trends 2025',
            'content' => 'Discover the latest trends in modern interior design for 2025. From minimalist aesthetics to sustainable materials, explore how contemporary design is evolving to create more functional and beautiful living spaces. Learn about color palettes, furniture choices, and layout strategies that define modern homes today.',
            'image' => 'images/blog/m-blog-1.jpg',
            'blog_category_id' => 1, // Actualités
        ]);
        $blog1->tags()->attach([1, 2]); // Attach tags: moderne, bois

        $blog2 = Blog::create([
            'title' => 'Sustainable Furniture: A Complete Guide',
            'content' => 'Learn everything about sustainable furniture choices for your home. From eco-friendly materials to ethical manufacturing processes, discover how to furnish your space while being environmentally conscious. Tips on identifying sustainable brands and making informed purchasing decisions.',
            'image' => 'images/blog/m-blog-2.jpg',
            'blog_category_id' => 2, // Conseils
        ]);
        $blog2->tags()->attach([2, 3]); // Attach tags: bois, design

        $blog3 = Blog::create([
            'title' => 'Small Space Living: Maximizing Your Home',
            'content' => 'Transform your small space into a functional and stylish home with our expert tips. From clever storage solutions to furniture that serves multiple purposes, learn how to make the most of limited square footage. Real examples and practical advice for urban living.',
            'image' => 'images/blog/m-blog-3.jpg',
            'blog_category_id' => 3, // Inspiration
        ]);
        $blog3->tags()->attach([1, 3]); // Attach tags: moderne, design

        $blog4 = Blog::create([
            'title' => 'Color Psychology in Home Design',
            'content' => 'Understand how colors affect mood and behavior in your home. From calming blues to energizing yellows, discover the psychological impact of different color choices and how to use them effectively in your interior design. Create spaces that support your wellbeing.',
            'image' => 'images/blog/m-blog-4.jpg',
            'blog_category_id' => 2, // Conseils
        ]);
        $blog4->tags()->attach([1, 2]); // Attach tags: moderne, bois

        $blog5 = Blog::create([
            'title' => 'Scandinavian Design Principles',
            'content' => 'Explore the timeless principles of Scandinavian design and how to incorporate them into your home. From hygge philosophy to clean lines and natural materials, learn what makes Scandinavian interiors so appealing and how to achieve this look in any space.',
            'image' => 'images/blog/m-blog-5.jpg',
            'blog_category_id' => 3, // Inspiration
        ]);
        $blog5->tags()->attach([2, 3]); // Attach tags: bois, design
    }
}
