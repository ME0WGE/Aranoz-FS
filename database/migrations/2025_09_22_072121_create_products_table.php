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
            $table->integer('price');
            $table->integer('stock_quantity');
            $table->boolean('pinned');
            $table->string('picture_main'); // file or url
            $table->string('picture_rear'); // file or url
            $table->string('picture_left'); // file or url
            $table->string('picture_right'); // file or url
            $table->foreignId('product_category_id')->constrained('product_categories'); // Product category: only 1
            $table->foreignId('discount_id')->constrained('discounts'); // Discount on the price of the product: (price - discount)
            $table->foreignId('color_id')->constrained('colors'); // Product color: only 1
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
