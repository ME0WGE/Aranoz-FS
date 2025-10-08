<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        'pinned',
        'image_1',
        'image_2',
        'image_3',
        'image_4',
        'product_category_id',
        'discount_id',
        'color_id',
    ];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }

    public function discount()
    {
        return $this->belongsTo(Discount::class, 'discount_id');
    }

    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }

    // Relation: users who liked this product
    public function likedBy()
    {
        return $this->belongsToMany(User::class, 'liked_products', 'product_id', 'user_id');
    }
}
