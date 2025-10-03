<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;


use App\Models\Mailing;

class ContactController extends Controller
{
    public function index() {
        $contacts = Contact::all();
        return Inertia::render('Contact/Index', [
            'contacts' => $contacts,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        // Enregistre le message dans la table mailings
        Mailing::create([
            'email' => $validated['email'],
            'subject' => $validated['subject'] ?? '',
            'message' => $validated['message'],
            'status' => 'pending',
            'archived' => false,
        ]);

        // ...envoi du mail existant ici...

        return back()->with('success', 'Votre message a été envoyé avec succès.');
    }
}
