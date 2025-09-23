<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImageSize extends Model
{
    use HasFactory;

    protected $fillable = [
        'original_path',
        'resized_path',
        'size_type',
        'width',
        'height',
        'model_type',
        'model_id',
    ];
}
