<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        'name',
    ];

    // Many-to-many relation with blogs
    public function blogs()
    {
        return $this->belongsToMany(Blog::class);
    }
}
