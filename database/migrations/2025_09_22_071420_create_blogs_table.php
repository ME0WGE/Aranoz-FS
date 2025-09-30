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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('image'); // file or url
            $table->string('detail_image')->nullable();
            $table->string('title');
            $table->text('content');
            $table->text('excerpt')->nullable();
            $table->string('category')->nullable();
            $table->string('date')->nullable();
            $table->integer('comments')->nullable();
            $table->foreignId('blog_category_id')->constrained('blog_categories'); // Blog category: only 1
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
