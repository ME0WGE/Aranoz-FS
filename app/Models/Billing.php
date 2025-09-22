<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    protected $fillable = [
        'first_name', 
        'last_name', 
        'company',
        'phone_number',
        'address',
        'number',
        'city',
        'zip_code',
        'user_id',
        'country_id'
    ];
}
