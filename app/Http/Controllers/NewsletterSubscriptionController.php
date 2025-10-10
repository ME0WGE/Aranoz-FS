<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscription;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewsletterSubscriptionMail;

class NewsletterSubscriptionController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email|unique:newsletter_subscriptions,email',
        ]);

        NewsletterSubscription::create([
            'email' => $request->email,
            'is_active' => true,
        ]);

        // Envoyer l'email de remerciement
        try {
            Mail::to($request->email)->send(new NewsletterSubscriptionMail($request->email));
        } catch (\Exception $e) {
            // Log l'erreur mais ne pas bloquer l'inscription
            \Log::error('Erreur envoi email newsletter: ' . $e->getMessage());
        }

        return back()->with('success', 'Merci pour votre inscription à notre newsletter !');
    }
}
