import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Reports({ salesReport, customerReport, productReport, orderStatusReport }) {
    return (
        <AdminLayout>
            <Head title="Reports" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Business Reports</h1>
                    
                    {/* Sales Report */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Sales Report
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                                <p className="text-sm text-green-800 font-medium mb-2">Today</p>
                                <p className="text-3xl font-bold text-green-600">€{salesReport.today.toFixed(2)}</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                                <p className="text-sm text-blue-800 font-medium mb-2">This Week</p>
                                <p className="text-3xl font-bold text-blue-600">€{salesReport.thisWeek.toFixed(2)}</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                                <p className="text-sm text-purple-800 font-medium mb-2">This Month</p>
                                <p className="text-3xl font-bold text-purple-600">€{salesReport.thisMonth.toFixed(2)}</p>
                            </div>
                            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
                                <p className="text-sm text-pink-800 font-medium mb-2">This Year</p>
                                <p className="text-3xl font-bold text-pink-600">€{salesReport.thisYear.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        {/* Customer Report */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Customer Report
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Total Customers</span>
                                    <span className="font-bold text-xl text-purple-600">{customerReport.totalCustomers}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">New This Month</span>
                                    <span className="font-bold text-xl text-blue-600">{customerReport.newThisMonth}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Active Customers</span>
                                    <span className="font-bold text-xl text-green-600">{customerReport.activeCustomers}</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Report */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                Product Report
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Total Products</span>
                                    <span className="font-bold text-xl text-orange-600">{productReport.totalProducts}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Low Stock</span>
                                    <span className="font-bold text-xl text-yellow-600">{productReport.lowStock}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Out of Stock</span>
                                    <span className="font-bold text-xl text-red-600">{productReport.outOfStock}</span>
                                </div>
                            </div>
                        </div>

                        {/* Order Status Report */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Order Status
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Pending</span>
                                    <span className="font-bold text-xl text-yellow-600">{orderStatusReport.pending}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Confirmed</span>
                                    <span className="font-bold text-xl text-blue-600">{orderStatusReport.confirmed}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                    <span className="text-gray-700">Delivered</span>
                                    <span className="font-bold text-xl text-green-600">{orderStatusReport.delivered}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

