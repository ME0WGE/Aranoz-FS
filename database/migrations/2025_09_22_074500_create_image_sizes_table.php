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
        Schema::create('image_sizes', function (Blueprint $table) {
            $table->id();
            $table->string('original_path'); // Original image path
            $table->string('resized_path'); // Resized image path
            $table->string('size_type'); // banner, shop, invoice, etc.
            $table->integer('width'); // Resized width
            $table->integer('height'); // Resized height
            $table->string('model_type'); // Product, Blog, etc.
            $table->unsignedBigInteger('model_id'); // Model ID
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('image_sizes');
    }
};
