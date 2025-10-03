import React from 'react';
import axios from 'axios';
import { useForm, router } from '@inertiajs/react';
import { Head, Link } from '@inertiajs/react';

export default function OrderShow({ order }) {
    if (!order) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Head title="Order Not Found" />
                <div className="bg-white shadow rounded-lg p-8">
                    <h1 className="text-2xl font-bold mb-4">Commande introuvable</h1>
                    <Link href="/admin/orders" className="text-blue-600 hover:underline">Retour à la liste des commandes</Link>
                </div>
            </div>
        );
    }
    const [message, setMessage] = React.useState('');
    const handleApprove = () => {
        router.patch(`/admin/orders/${order.id}/status`, { status: 'confirmed' }, {
            onSuccess: () => router.visit('/admin/orders'),
        });
    };
    const handleCancel = () => {
        router.patch(`/admin/orders/${order.id}/status`, { status: 'canceled' }, {
            onSuccess: () => router.visit('/admin/orders'),
        });
    };
    return (
    <div className="min-h-screen bg-white">
            <Head title={`Commande #${order.id}`} />
            <div className="max-w-3xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-extrabold mb-8 text-black">Commande #{order.id}</h1>
                <div className="bg-white rounded-xl p-8 mb-6 border border-gray-200">
                    <div className="mb-2"><span className="font-semibold">Utilisateur:</span> <span className="text-blue-700 font-bold">{order.user?.name || 'N/A'}</span></div>
                    <div className="mb-2"><span className="font-semibold">Statut:</span> <span className={`px-2 py-1 rounded text-white ${order.status === 'confirmed' ? 'bg-green-500' : order.status === 'canceled' ? 'bg-red-500' : 'bg-gray-400'}`}>{order.status}</span></div>
                    <div className="mb-2"><span className="font-semibold">Total:</span> <span className="font-bold">€{order.total_price}</span></div>
                    <div className="mb-2"><span className="font-semibold">Méthode de paiement:</span> <span className="font-semibold">{order.payment_method}</span></div>
                    <div className="mb-2"><span className="font-semibold">Méthode d'expédition:</span> <span className="font-semibold">{order.shipping_method}</span></div>
                    <div className="flex gap-4 mt-4">
                        <button onClick={handleApprove} className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-green-700 transition">Approuver</button>
                        <button onClick={handleCancel} className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-red-700 transition">Annuler</button>
                    </div>
                    {message && (
                        <div className="mt-4 text-center text-lg text-green-700 font-bold">{message}</div>
                    )}
                </div>
                <h2 className="text-2xl font-bold mb-6 text-black">Articles</h2>
                <ul className="bg-white rounded-xl p-6 border border-gray-200">
                    {order.items && order.items.length > 0 ? (
                        order.items.map(item => (
                            <li key={item.id} className="mb-2 flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200">
                                <span className="font-semibold">{item.product?.name || 'Produit supprimé'}</span>
                                <span>Quantité: <span className="font-bold">{item.quantity}</span></span>
                                <span>Prix: <span className="font-bold">€{item.price}</span></span>
                            </li>
                        ))
                    ) : (
                        <li>Aucun article dans cette commande.</li>
                    )}
                </ul>
                <div className="mt-8">
                    <Link href="/admin/orders" className="text-blue-600 hover:underline">Retour à la liste des commandes</Link>
                </div>
            </div>
        </div>
    );
}
