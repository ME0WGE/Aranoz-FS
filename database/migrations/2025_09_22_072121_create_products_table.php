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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->integer('price'); // Price in cents
            $table->integer('stock_quantity');
            $table->boolean('pinned')->default(false); // For homepage carousel
            $table->string('picture_main'); // Main product image
            $table->string('picture_rear')->nullable(); // Rear view
            $table->string('picture_left')->nullable(); // Left view  
            $table->string('picture_right')->nullable(); // Right view
            $table->foreignId('product_category_id')->constrained('product_categories');
            $table->foreignId('discount_id')->nullable()->constrained('discounts'); // Can be null for no discount
            $table->foreignId('color_id')->constrained('colors');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
