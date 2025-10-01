<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'status',
        'total_price',
        'user_id',
        'order_number',
        'payment_method',
        'shipping_method',
    ];
    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
