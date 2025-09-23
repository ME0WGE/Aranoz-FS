<?php

namespace Database\Seeders;

use App\Models\Mailing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MailingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mailing::create([
            'email' => 'newsletter@example.com',
            'subject' => 'Newsletter Subscription',
            'message' => 'Thank you for subscribing to our newsletter!',
            'status' => 'pending',
            'archived' => false,
        ]);
        Mailing::create([
            'email' => 'contact@example.com',
            'subject' => 'Contact Form Submission',
            'message' => 'Hello, I would like to know more about your products.',
            'status' => 'replied',
            'archived' => false,
        ]);
    }
}
