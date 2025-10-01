import React from 'react';
import { Head } from '@inertiajs/react';

export default function Mailbox() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="Mailbox" />
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-6">Répondre aux mails</h1>
                {/* TODO: Afficher la liste des messages reçus, avec bouton pour répondre */}
                <div className="bg-white shadow rounded-lg p-6">
                    <p className="text-gray-600">Aucun message à afficher pour le moment.</p>
                </div>
            </div>
        </div>
    );
}
