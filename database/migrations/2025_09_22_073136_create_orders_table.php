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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['pending', 'confirmed', 'canceled']);
            $table->integer('total_price'); // Total in cents
            $table->string('order_number')->unique(); // Unique order tracking number
            $table->enum('payment_method', ['check', 'paypal']); // Payment method for receipt
            $table->string('shipping_method')->default('free_worldwide'); // Shipping method
            $table->foreignId('user_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
