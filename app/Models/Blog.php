<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'content',
        'image',
        'blog_category_id',
    ];

    // Relation with blog category
    public function blogCategory()
    {
        return $this->belongsTo(BlogCategory::class);
    }

    // Alias for compatibility with existing code
    public function category()
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    // Many-to-many relation with tags
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    // Relation with comments
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
