<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::create([
            'name' => 'Alice',
            'email' => 'alice@example.com',
            'message' => 'Bonjour, je souhaite en savoir plus sur vos produits.',
        ]);
        Contact::create([
            'name' => 'Bob',
            'email' => 'bob@example.com',
            'message' => 'Avez-vous des réductions en ce moment ?',
        ]);
    }
}
