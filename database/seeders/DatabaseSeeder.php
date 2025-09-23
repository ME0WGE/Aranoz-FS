<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            RoleSeeder::class,
            CountrySeeder::class,
            ColorSeeder::class,
            DiscountSeeder::class,
            ProductCategorySeeder::class,
            BlogCategorySeeder::class,
            TagSeeder::class,
            AvatarSeeder::class,
            ContactSeeder::class,
            CouponSeeder::class,
            NewsletterSubscriptionSeeder::class,
            UserSeeder::class,
            ProductSeeder::class,
            BlogSeeder::class,
            OrderSeeder::class,
            OrderItemSeeder::class,
            CartSeeder::class,
            LikedProductSeeder::class,
            BillingSeeder::class,
            MailingSeeder::class,
            CommentSeeder::class,
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role_id' => 1,
        ]);
    }
}
