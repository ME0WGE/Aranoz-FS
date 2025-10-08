import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Show({ order, cartCount }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'confirmed':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'canceled':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'sent':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'delivered':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'pending':
                return 'En attente';
            case 'confirmed':
                return 'Confirmée';
            case 'canceled':
                return 'Annulée';
            case 'sent':
                return 'Expédiée';
            case 'delivered':
                return 'Livrée';
            default:
                return status;
        }
    };

    return (
        <AppLayout cartCount={cartCount}>
            <Head title={`Commande #${order.order_number}`} />
            
            {/* Banner / Breadcrumb */}
            <section className="bg-[#EAF6FA] pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-4xl font-bold mb-2">Détails de la commande</h2>
                            <p className="text-gray-500 text-lg">
                                <Link href="/" className="hover:text-gray-700">Home</Link>
                                <span className="mx-1">-</span>
                                <Link href="/orders" className="hover:text-gray-700">Mes Commandes</Link>
                                <span className="mx-1">-</span>
                                {order.order_number}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Order Details */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Order Info Card */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Order Header */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Commande #{order.order_number}</h3>
                                    <p className="text-gray-600">Passée le {new Date(order.created_at).toLocaleDateString('fr-FR', { 
                                        day: 'numeric', 
                                        month: 'long', 
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}</p>
                                </div>
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(order.status)}`}>
                                    {getStatusText(order.status)}
                                </span>
                            </div>

                            {/* Items List */}
                            <div className="border-t pt-6">
                                <h4 className="font-semibold text-lg mb-4">Articles commandés</h4>
                                <div className="space-y-4">
                                    {order.items && order.items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
                                            <img 
                                                src={item.product?.picture_main || '/storage/images/product/product_1.png'} 
                                                alt={item.product?.name || 'Product'} 
                                                className="w-24 h-24 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <h5 className="font-semibold text-gray-900 mb-1">{item.product?.name || 'Produit inconnu'}</h5>
                                                <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                                                <p className="text-sm text-gray-600">Prix unitaire: €{(item.price / 100).toFixed(2)}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-lg text-gray-900">€{((item.price * item.quantity) / 100).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Total */}
                            <div className="border-t pt-6 mt-6">
                                <div className="flex justify-between items-center text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-[#FF3368]">€{(order.total_price / 100).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Customer Info */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Informations client
                            </h4>
                            <div className="space-y-2 text-sm">
                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-900">{order.user?.name || 'N/A'}</span>
                                </p>
                                <p className="text-gray-600">{order.user?.email || 'N/A'}</p>
                            </div>
                        </div>

                        {/* Order Status Timeline */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Statut de la commande
                            </h4>
                            <div className="space-y-4">
                                <div className={`flex items-start gap-3 ${order.status === 'pending' ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`w-3 h-3 rounded-full mt-1 ${order.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>
                                    <div>
                                        <p className="font-semibold text-sm">En attente</p>
                                        <p className="text-xs text-gray-600">Commande reçue</p>
                                    </div>
                                </div>
                                <div className={`flex items-start gap-3 ${order.status === 'confirmed' || order.status === 'sent' || order.status === 'delivered' ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`w-3 h-3 rounded-full mt-1 ${order.status === 'confirmed' || order.status === 'sent' || order.status === 'delivered' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                                    <div>
                                        <p className="font-semibold text-sm">Confirmée</p>
                                        <p className="text-xs text-gray-600">Commande validée</p>
                                    </div>
                                </div>
                                <div className={`flex items-start gap-3 ${order.status === 'sent' || order.status === 'delivered' ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`w-3 h-3 rounded-full mt-1 ${order.status === 'sent' || order.status === 'delivered' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                                    <div>
                                        <p className="font-semibold text-sm">Expédiée</p>
                                        <p className="text-xs text-gray-600">En cours de livraison</p>
                                    </div>
                                </div>
                                <div className={`flex items-start gap-3 ${order.status === 'delivered' ? 'opacity-100' : 'opacity-50'}`}>
                                    <div className={`w-3 h-3 rounded-full mt-1 ${order.status === 'delivered' ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
                                    <div>
                                        <p className="font-semibold text-sm">Livrée</p>
                                        <p className="text-xs text-gray-600">Commande reçue</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="font-semibold text-lg mb-4">Actions</h4>
                            <div className="space-y-3">
                                <Link
                                    href={route('track.form')}
                                    className="block w-full text-center px-4 py-2 bg-[#FF3368] text-white rounded-lg hover:bg-[#ff1f5a] transition-colors font-medium"
                                >
                                    Suivre la commande
                                </Link>
                                <Link
                                    href="/orders"
                                    className="block w-full text-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                                >
                                    Retour aux commandes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}

