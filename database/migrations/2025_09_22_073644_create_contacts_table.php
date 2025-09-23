<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('street')->default('Pl. de la Minoterie');
            $table->string('state')->default('Brussels');
            $table->string('number')->default('10');
            $table->string('city')->default('Molenbeek');
            $table->string('zip_code')->default('1080');
            $table->string('country_code')->default('BE');
            $table->string('email')->default('baldygakamil@gmail.com');
            $table->string('phone_number')->default('+32 01 02 03 04');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
