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
        $blogs = [
            [
                'title' => 'Google inks pact for new 35-storey office',
                'content' => "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
                'excerpt' => "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
                'category' => 'Travel, Lifestyle',
                'image' => '/storage/images/blog/single_blog_1.png',
                'date' => '15 Jan',
                'comments' => 63,
                'blog_category_id' => 1,
                'tags' => [1,2],
            ],
            [
                'title' => 'The Amazing Hubble',
                'content' => "Astronomy Or Astrology. Asteroids telescope.",
                'excerpt' => "Astronomy Or Astrology. Asteroids telescope.",
                'category' => 'Modern Technology',
                'image' => '/storage/images/blog/single_blog_2.png',
                'date' => '21 hours ago',
                'comments' => 12,
                'blog_category_id' => 2,
                'tags' => [2,3],
            ],
            [
                'title' => 'Mother of the Bride',
                'content' => "Heaven fruitful doesn't over lesser in days. Appear creeping.",
                'excerpt' => "Heaven fruitful doesn't over lesser in days. Appear creeping.",
                'category' => 'Inspiration',
                'image' => '/storage/images/blog/single_blog_3.png',
                'date' => '31 hours ago',
                'comments' => 8,
                'blog_category_id' => 3,
                'tags' => [1,3],
            ],
            [
                'title' => 'Asteroids telescope',
                'content' => "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
                'excerpt' => "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
                'category' => 'Health Care',
                'image' => '/storage/images/blog/single_blog_4.png',
                'date' => '31 hours ago',
                'comments' => 5,
                'blog_category_id' => 2,
                'tags' => [1,2],
            ],
        ];

        foreach ($blogs as $blog) {
            $blogModel = Blog::create([
                'title' => $blog['title'],
                'content' => $blog['content'],
                'excerpt' => $blog['excerpt'],
                'category' => $blog['category'],
                'image' => $blog['image'],
                'date' => $blog['date'],
                'comments' => $blog['comments'],
                'blog_category_id' => $blog['blog_category_id'],
            ]);
            $blogModel->tags()->attach($blog['tags']);
        }
    }
}
