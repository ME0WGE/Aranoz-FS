<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'name',
        'email',
        'message',
        'answered_by', // id de l'utilisateur qui a répondu
        'answered_at', // date de réponse
    ];
}
