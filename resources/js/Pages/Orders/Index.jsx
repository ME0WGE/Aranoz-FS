import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ orders, cartCount }) {
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
            <Head title="Mes Commandes" />
            
            {/* Banner / Breadcrumb */}
            <section className="bg-[#EAF6FA] pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Mes Commandes</h2>
                        <p className="text-gray-500 text-lg">Home <span className="mx-1">-</span> Mes Commandes</p>
                    </div>
                    <img src="/storage/images/banner/banner_img.png" alt="Orders" className="w-52 h-52 object-contain" />
                </div>
            </section>

            {/* Orders List */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                {orders && orders.length > 0 ? (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                {/* Order Header */}
                                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center gap-6">
                                            <div>
                                                <p className="text-sm text-gray-600">Numéro de commande</p>
                                                <p className="font-bold text-lg">{order.order_number}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Date</p>
                                                <p className="font-medium">{new Date(order.created_at).toLocaleDateString('fr-FR')}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">Total</p>
                                                <p className="font-bold text-[#FF3368]">€{(order.total_price / 100).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(order.status)}`}>
                                                {getStatusText(order.status)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="px-6 py-4">
                                    <div className="space-y-4">
                                        {order.items && order.items.map((item) => (
                                            <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
                                                <img 
                                                    src={item.product?.picture_main || '/storage/images/product/product_1.png'} 
                                                    alt={item.product?.name || 'Product'} 
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900">{item.product?.name || 'Produit inconnu'}</h4>
                                                    <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold text-gray-900">€{((item.price * item.quantity) / 100).toFixed(2)}</p>
                                                    <p className="text-sm text-gray-500">€{(item.price / 100).toFixed(2)} / unité</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Order Actions */}
                                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                    <div className="flex flex-wrap gap-3 justify-end">
                                        <Link
                                            href={`/orders/${order.id}`}
                                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                                        >
                                            Voir les détails
                                        </Link>
                                        <Link
                                            href={route('track.form')}
                                            className="px-4 py-2 bg-[#FF3368] text-white rounded-lg hover:bg-[#ff1f5a] transition-colors text-sm font-medium"
                                        >
                                            Suivre la commande
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <div className="text-6xl mb-4">📦</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucune commande</h3>
                        <p className="text-gray-600 mb-6">Vous n'avez pas encore passé de commande.</p>
                        <Link
                            href="/products"
                            className="inline-block px-6 py-3 bg-[#FF3368] text-white rounded-lg hover:bg-[#ff1f5a] transition-colors font-medium"
                        >
                            Commencer vos achats
                        </Link>
                    </div>
                )}
            </section>
        </AppLayout>
    );
}

