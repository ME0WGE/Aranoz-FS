<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = [
        'quantity',
        'product_name',
        'product_price',
        'order_id',
        'product_id',
    ];
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
