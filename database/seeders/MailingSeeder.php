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
        ]);
        Mailing::create([
            'email' => 'contact@example.com',
        ]);
    }
}
