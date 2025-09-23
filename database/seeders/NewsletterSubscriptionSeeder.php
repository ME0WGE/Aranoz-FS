<?php

namespace Database\Seeders;

use App\Models\NewsletterSubscription;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NewsletterSubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        NewsletterSubscription::create([
            'email' => 'newsletter@example.com',
            'is_active' => true,
        ]);
        NewsletterSubscription::create([
            'email' => 'subscriber@example.com',
            'is_active' => true,
        ]);
    }
}
