import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Mailbox({ messages }) {
    const [selectedId, setSelectedId] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({ response: '' });
    const [success, setSuccess] = useState(null);

    const handleSelect = (id) => {
        setSelectedId(id);
        reset();
        setSuccess(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/admin/mailbox/${selectedId}/answer`, {
            onSuccess: () => {
                setSuccess('Réponse envoyée et message archivé.');
                setSelectedId(null);
                reset();
            },
        });
    };

    return (
        <AppLayout>
            <Head title="Mailbox" />
            <h1 className="text-3xl font-bold mb-6">Mailbox</h1>
            {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">{success}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold mb-4">Messages reçus</h2>
                    <ul className="divide-y">
                        {messages.length === 0 && <li className="py-4 text-gray-500">Aucun message</li>}
                        {messages.map(msg => (
                            <li key={msg.id} className={`py-4 cursor-pointer ${selectedId === msg.id ? 'bg-pink-50' : ''}`}
                                onClick={() => handleSelect(msg.id)}>
                                <div className="font-bold">{msg.email}</div>
                                <div className="text-sm text-gray-600">{msg.subject}</div>
                                <div className="mt-2">{msg.message}</div>
                                <div className="text-xs text-gray-400 mt-1">Status: {msg.status}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {selectedId && (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h2 className="text-xl font-bold mb-2">Répondre au message</h2>
                            <textarea
                                className="w-full border rounded-lg p-4"
                                rows={6}
                                name="response"
                                placeholder="Votre réponse..."
                                value={data.response}
                                onChange={e => setData('response', e.target.value)}
                            />
                            {errors.response && <div className="text-red-500 text-sm">{errors.response}</div>}
                            <button
                                type="submit"
                                className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-600 transition"
                                disabled={processing}
                            >
                                {processing ? 'Envoi...' : 'Envoyer la réponse'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
