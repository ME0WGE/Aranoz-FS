import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Mailbox({ messages }) {
    const [selectedId, setSelectedId] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({ response: '' });
    const [success, setSuccess] = useState(null);

    // Split messages by status
    const pendingMessages = messages.filter(msg => msg.status === 'pending');
    const repliedMessages = messages.filter(msg => msg.status === 'replied');

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
        <AdminLayout>
            <Head title="Mailbox" />
            <div className="p-8 bg-white min-h-screen">
                <h1 className="text-3xl font-extrabold mb-8 text-black">Mailbox</h1>
                {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg shadow">{success}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-black">À répondre</h2>
                    <ul className="space-y-4">
                        {pendingMessages.length === 0 && <li className="py-4 text-gray-500">Aucun message à répondre</li>}
                        {pendingMessages.map(msg => (
                            <li key={msg.id}
                                className={`p-6 rounded-xl shadow-lg border transition cursor-pointer ${selectedId === msg.id ? 'bg-pink-50 border-pink-400' : 'bg-white hover:bg-pink-100 border-gray-200'}`}
                                onClick={() => handleSelect(msg.id)}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-pink-600">{msg.email}</span>
                                    <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-100 text-yellow-700">Non répondu</span>
                                </div>
                                <div className="text-sm text-gray-700 font-semibold mb-1">{msg.subject}</div>
                                <div className="text-gray-800 mb-2 whitespace-pre-line">{msg.message}</div>
                                <div className="text-xs text-gray-400">ID: {msg.id}</div>
                            </li>
                        ))}
                    </ul>
                    {/* Reply form only for pending messages */}
                    {selectedId && pendingMessages.some(msg => msg.id === selectedId) && (
                        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                            <h2 className="text-xl font-bold mb-2">Répondre au message</h2>
                            <textarea
                                className="w-full border rounded-xl p-4"
                                rows={6}
                                name="response"
                                placeholder="Votre réponse..."
                                value={data.response}
                                onChange={e => setData('response', e.target.value)}
                            />
                            {errors.response && <div className="text-red-500 text-sm">{errors.response}</div>}
                            <button
                                type="submit"
                                className="bg-pink-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:bg-pink-600 transition"
                                disabled={processing}
                            >
                                {processing ? 'Envoi...' : 'Envoyer la réponse'}
                            </button>
                        </form>
                    )}
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-black">Déjà répondu</h2>
                    <ul className="space-y-4">
                        {repliedMessages.length === 0 && <li className="py-4 text-gray-500">Aucun message répondu</li>}
                        {repliedMessages.map(msg => (
                            <li key={msg.id}
                                className="p-6 rounded-xl shadow-lg border bg-gray-50 border-gray-200">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-pink-600">{msg.email}</span>
                                    <span className="px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-700">Répondu</span>
                                </div>
                                <div className="text-sm text-gray-700 font-semibold mb-1">{msg.subject}</div>
                                <div className="text-gray-800 mb-2 whitespace-pre-line">{msg.message}</div>
                                <div className="text-xs text-gray-400">ID: {msg.id}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </AdminLayout>
    );
}
