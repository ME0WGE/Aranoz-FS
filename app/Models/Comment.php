<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'name',
        'message',
        'email',
        'website',
        'user_id',
        'blog_id',
    ];

    // Relation with user (author)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relation with blog
    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }
}
