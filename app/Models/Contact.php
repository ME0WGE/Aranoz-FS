<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'street',
        'state',
        'city',
        'zip_code',
        'house_number',
        'email',
        'phone_number',
    ];
}
