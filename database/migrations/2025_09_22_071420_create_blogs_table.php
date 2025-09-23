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
            $table->string('title');
            $table->text('content');
            $table->foreignId('blog_category_id')->constrained('blog_categories'); // Blog category: only 1
            $table->foreignId('tag_id')->nullable()->constrained('tags'); // Blog tags: null or have 1 or more tags
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
