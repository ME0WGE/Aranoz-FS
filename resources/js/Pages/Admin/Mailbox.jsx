import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Mailbox({ messages }) {
    const [selectedMessage, setSelectedMessage] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({ response: '' });

    const handleSelect = (msg) => {
        setSelectedMessage(msg);
        reset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/admin/mailbox/${selectedMessage.id}/answer`, {
            onSuccess: () => {
                setSelectedMessage(null);
                reset();
            },
        });
    };

    return (
        <div className="p-8">
            <Head title="Messagerie" />
            <h1 className="text-3xl font-bold mb-6">Messagerie</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Messages List */}
                <div className="bg-white rounded-lg shadow">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold">Messages ({messages.length})</h2>
                    </div>
                    <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                        {messages.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">Aucun message</div>
                        ) : (
                            messages.map(msg => (
                                <div
                                    key={msg.id}
                                    onClick={() => handleSelect(msg)}
                                    className={`p-4 cursor-pointer transition ${
                                        selectedMessage?.id === msg.id 
                                            ? 'bg-blue-50 border-l-4 border-blue-500' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="font-medium text-gray-900">{msg.name}</div>
                                        {msg.status === 'pending' ? (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                                                Non lu
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                                Répondu
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-sm text-gray-600 mb-1">{msg.email}</div>
                                    <div className="text-sm text-gray-500 truncate">{msg.subject}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Reply Area */}
                <div className="bg-white rounded-lg shadow">
                    {selectedMessage ? (
                        <div className="flex flex-col h-full">
                            {/* Message Details */}
                            <div className="p-4 border-b border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-2">{selectedMessage.subject}</h3>
                                <div className="text-sm text-gray-600 mb-1">De: {selectedMessage.name}</div>
                                <div className="text-sm text-gray-600">{selectedMessage.email}</div>
                            </div>
                            
                            {/* Message Content */}
                            <div className="p-4 border-b border-gray-200 bg-gray-50">
                                <p className="text-sm text-gray-700 whitespace-pre-line">{selectedMessage.message}</p>
                            </div>

                            {/* Reply Form */}
                            {selectedMessage.status === 'pending' && (
                                <form onSubmit={handleSubmit} className="p-4 flex-1 flex flex-col">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Votre réponse
                                    </label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-lg p-3 flex-1 min-h-[200px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Écrivez votre réponse..."
                                        value={data.response}
                                        onChange={e => setData('response', e.target.value)}
                                        required
                                    />
                                    {errors.response && (
                                        <div className="text-red-500 text-sm mt-2">{errors.response}</div>
                                    )}
                                    <button
                                        type="submit"
                                        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
                                        disabled={processing}
                                    >
                                        {processing ? 'Envoi...' : 'Envoyer la réponse'}
                                    </button>
                                </form>
                            )}

                            {selectedMessage.status === 'replied' && (
                                <div className="p-4">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                        <p className="text-green-700 font-medium">✓ Message déjà répondu</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-12 text-center text-gray-400">
                            <p>Sélectionnez un message pour voir les détails</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Mailbox.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;
