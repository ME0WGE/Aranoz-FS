<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Comment::create([
            'name' => 'Alice Martin',
            'message' => 'Excellent article, très informatif !',
            'email' => 'alice@example.com',
            'website' => 'https://alice-blog.com',
            'user_id' => 1,
            'blog_id' => 1,
        ]);
        Comment::create([
            'name' => 'Bob Dupont',
            'message' => 'Merci pour ces conseils pratiques.',
            'email' => 'bob@example.com',
            'website' => null,
            'user_id' => 2,
            'blog_id' => 1,
        ]);
    }
}
