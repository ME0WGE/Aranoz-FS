<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index() {
        $contacts = Contact::all();
        return Inertia::render('Contact/Index', [
            'contacts' => $contacts,
        ]);
    }
}
