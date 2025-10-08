import { Head, useForm, Link } from '@inertiajs/react';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Track({ order, errors, auth, recentOrders, cartCount }) {
    const [searchPerformed, setSearchPerformed] = useState(!!order);
    
    const { data, setData, post, processing } = useForm({
        order_number: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('track.search'), {
            onSuccess: () => {
                setSearchPerformed(true);
            }
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'confirmed':
                return 'bg-blue-100 text-blue-800';
            case 'canceled':
                return 'bg-red-100 text-red-800';
            case 'sent':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
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
            default:
                return status;
        }
    };

    return (
        <AppLayout cartCount={cartCount}>
            <Head title="Suivi de commande" />
            
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Suivi de commande
                        </h1>
                        <p className="text-gray-600 mb-4">
                            Bonjour {auth?.user?.name}, entrez votre numéro de commande pour suivre votre colis
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href={route('orders.index')}
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Mes commandes
                            </Link>
                        </div>
                    </div>

                    {/* Search Form */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <form onSubmit={handleSubmit} className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="order_number" className="block text-sm font-medium text-gray-700 mb-2">
                                    Numéro de commande
                                </label>
                                <input
                                    type="text"
                                    id="order_number"
                                    value={data.order_number}
                                    onChange={(e) => setData('order_number', e.target.value)}
                                    placeholder="Ex: ARZ1234567890"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                {errors?.order_number && (
                                    <p className="mt-2 text-sm text-red-600">{errors.order_number}</p>
                                )}
                            </div>
                            <div className="flex items-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? 'Recherche...' : 'Rechercher'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Recent Orders */}
                    {!searchPerformed && recentOrders && recentOrders.length > 0 && (
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Vos commandes récentes
                            </h3>
                            <div className="space-y-3">
                                {recentOrders.map((recentOrder) => (
                                    <div key={recentOrder.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4">
                                                <span className="font-medium text-gray-900">
                                                    #{recentOrder.order_number}
                                                </span>
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(recentOrder.status)}`}>
                                                    {getStatusText(recentOrder.status)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {new Date(recentOrder.created_at).toLocaleDateString('fr-FR')} - €{recentOrder.total_price}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setData('order_number', recentOrder.order_number);
                                                post(route('track.search'), {
                                                    onSuccess: () => {
                                                        setSearchPerformed(true);
                                                    }
                                                });
                                            }}
                                            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                                        >
                                            Suivre
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-center">
                                <Link
                                    href={route('orders.index')}
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    Voir toutes mes commandes →
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Order Details */}
                    {searchPerformed && order && (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            {/* Order Header */}
                            <div className="bg-gray-50 px-6 py-4 border-b">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            Commande #{order.order_number}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            Passée le {new Date(order.created_at).toLocaleDateString('fr-FR')}
                                        </p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                        {getStatusText(order.status)}
                                    </span>
                                </div>
                            </div>

                            {/* Order Info */}
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* Customer Info */}
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-3">Informations client</h3>
                                        <div className="space-y-2">
                                            <p><span className="font-medium">Nom:</span> {order.user?.name}</p>
                                            <p><span className="font-medium">Email:</span> {order.user?.email}</p>
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-3">Résumé de la commande</h3>
                                        <div className="space-y-2">
                                            <p><span className="font-medium">Méthode de paiement:</span> {order.payment_method}</p>
                                            <p><span className="font-medium">Livraison:</span> {order.shipping_method}</p>
                                            <p><span className="font-medium">Total:</span> <span className="font-bold text-lg">€{order.total_price}</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-3">Articles commandés</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Produit
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Prix unitaire
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Quantité
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {order.items?.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {item.product_name}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            €{item.product_price}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            {item.quantity}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            €{(item.product_price * item.quantity).toFixed(2)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Status Timeline */}
                                <div className="mt-8">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Statut de la commande</h3>
                                    <div className="flow-root">
                                        <ul className="-mb-8">
                                            <li>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                                            ['pending', 'confirmed', 'sent'].includes(order.status) 
                                                                ? 'bg-green-500' 
                                                                : 'bg-gray-300'
                                                        }`}>
                                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                            <div>
                                                                <p className="text-sm text-gray-500">Commande passée</p>
                                                            </div>
                                                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                                {new Date(order.created_at).toLocaleDateString('fr-FR')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="relative pb-8">
                                                    <div className="relative flex space-x-3">
                                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                                            ['confirmed', 'sent'].includes(order.status) 
                                                                ? 'bg-green-500' 
                                                                : order.status === 'canceled' 
                                                                    ? 'bg-red-500' 
                                                                    : 'bg-gray-300'
                                                        }`}>
                                                            {order.status === 'canceled' ? (
                                                                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                            <div>
                                                                <p className="text-sm text-gray-500">
                                                                    {order.status === 'canceled' ? 'Commande annulée' : 'Commande confirmée'}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            {order.status === 'sent' && (
                                                <li>
                                                    <div className="relative">
                                                        <div className="relative flex space-x-3">
                                                            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                                                                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            </div>
                                                            <div className="min-w-0 flex-1 pt-1.5">
                                                                <p className="text-sm text-gray-500">Commande expédiée</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* No Results */}
                    {searchPerformed && !order && (
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune commande trouvée</h3>
                            <p className="text-gray-600 mb-4">
                                Vérifiez que le numéro de commande est correct et réessayez.
                            </p>
                            <button
                                onClick={() => setSearchPerformed(false)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Nouvelle recherche
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}