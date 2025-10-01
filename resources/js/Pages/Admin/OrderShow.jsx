import React from 'react';
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
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title={`Commande #${order.id}`} />
            <div className="max-w-3xl mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold mb-6">Commande #{order.id}</h1>
                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <div className="mb-2"><span className="font-semibold">Utilisateur:</span> {order.user?.name || 'N/A'}</div>
                    <div className="mb-2"><span className="font-semibold">Statut:</span> {order.status}</div>
                    <div className="mb-2"><span className="font-semibold">Total:</span> €{order.total_price}</div>
                    <div className="mb-2"><span className="font-semibold">Méthode de paiement:</span> {order.payment_method}</div>
                    <div className="mb-2"><span className="font-semibold">Méthode d'expédition:</span> {order.shipping_method}</div>
                </div>
                <h2 className="text-xl font-semibold mb-4">Articles</h2>
                <ul className="bg-white shadow rounded-lg p-6">
                    {order.items && order.items.length > 0 ? (
                        order.items.map(item => (
                            <li key={item.id} className="mb-2 flex justify-between">
                                <span>{item.product?.name || 'Produit supprimé'}</span>
                                <span>Quantité: {item.quantity}</span>
                                <span>Prix: €{item.price}</span>
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
