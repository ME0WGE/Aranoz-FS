import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Analytics({ stats, monthlySales, topProducts, categorySales }) {
    return (
        <AdminLayout>
            <Head title="Analytics" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
                    
                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                                    <p className="text-2xl font-bold text-green-600">€{(stats.totalRevenue / 100).toFixed(2)}</p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                                    <p className="text-2xl font-bold text-blue-600">{stats.totalOrders}</p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Users</p>
                                    <p className="text-2xl font-bold text-purple-600">{stats.totalUsers}</p>
                                </div>
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Products</p>
                                    <p className="text-2xl font-bold text-orange-600">{stats.totalProducts}</p>
                                </div>
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Status Stats */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Status Distribution</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-yellow-600">{stats.pendingOrders}</p>
                                <p className="text-sm text-gray-600">Pending</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">{stats.confirmedOrders}</p>
                                <p className="text-sm text-gray-600">Confirmed</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-green-600">{stats.deliveredOrders}</p>
                                <p className="text-sm text-gray-600">Delivered</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-red-600">{stats.canceledOrders}</p>
                                <p className="text-sm text-gray-600">Canceled</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-orange-600">{stats.lowStockProducts}</p>
                                <p className="text-sm text-gray-600">Low Stock</p>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Sales Chart */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Monthly Sales (Last 12 Months)</h2>
                        <div className="space-y-3">
                            {monthlySales && monthlySales.map((month, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <span className="text-sm text-gray-600 w-24">{month.month}</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                                        <div 
                                            className="bg-gradient-to-r from-pink-500 to-orange-500 h-full flex items-center justify-end pr-2"
                                            style={{ 
                                                width: `${Math.min((month.sales / Math.max(...monthlySales.map(m => m.sales))) * 100, 100)}%` 
                                            }}
                                        >
                                            <span className="text-white text-sm font-semibold">€{month.sales.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Products */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Products (Most Liked)</h2>
                            <div className="space-y-3">
                                {topProducts && topProducts.map((product, index) => (
                                    <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                {index + 1}
                                            </span>
                                            <span className="font-medium text-gray-900">{product.name}</span>
                                        </div>
                                        <span className="text-sm text-gray-600">{product.liked_by_count || 0} likes</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Category Sales */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Sales by Category</h2>
                            <div className="space-y-3">
                                {categorySales && categorySales.map((category, index) => (
                                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium text-gray-900">{category.name}</span>
                                            <span className="text-pink-600 font-semibold">€{category.sales.toFixed(2)}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{category.products_count} products</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

