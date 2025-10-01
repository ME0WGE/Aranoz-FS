
import React from "react";
import AppLayout from '@/Layouts/AppLayout';
import { Head, router } from '@inertiajs/react';

export default function Category({ categories, products, bestSellers, cartCount }) {
    return (
        <AppLayout cartCount={cartCount}>
            <Head title="Shop Category" />
            {/* Banner / Breadcrumb */}
            <section className="bg-[#eaf6fa] pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Shop Category</h2>
                        <p className="text-gray-500 text-lg">Home <span className="mx-1">-</span> Shop Category</p>
                    </div>
                    <img src="/storage/images/banner/banner_img.png" alt="Category Chair" className="w-52 h-52 object-contain" />
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-auto" style={{flex: '0 0 15%'}}>
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4">Browse Categories</h3>
                        <ul className="space-y-3">
                            {categories && categories.map(cat => (
                                <li key={cat.id} className="flex justify-between items-center text-gray-700 hover:text-pink-500 transition font-medium">
                                    <a href={`/products/category/${cat.id}`}>{cat.name}</a>
                                    <span className="text-xs text-gray-400 ml-2">({cat.product_count ?? 0})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4">Product filters</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Apple</li>
                            <li>Asus</li>
                            <li>iPhone</li>
                            <li>Micromax</li>
                            <li>Samsung</li>
                        </ul>
                        <ul className="space-y-2 text-gray-600 text-sm mt-4">
                            <li>Apple</li>
                            <li>Asus</li>
                            <li>iPhone</li>
                            <li>Micromax</li>
                            <li>Samsung</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4">Color Filter</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Black</li>
                            <li>Black Leather</li>
                            <li>Black with red</li>
                            <li>Gold</li>
                            <li>Spongy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Price Filter</h3>
                        <div className="flex items-center gap-2 mb-2">
                            <input type="range" min="0" max="500" className="w-full accent-pink-500" />
                            <span className="text-xs text-gray-500">Price: <span className="text-pink-500">0</span> to <span className="text-pink-500">500</span></span>
                        </div>
                    </div>
                </aside>

                {/* Products */}
                <div className="w-full md:w-auto" style={{flex: '0 0 85%'}}>
                    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                        <div className="single_product_menu text-pink-500 font-bold text-lg">
                            <span>{products ? products.length : 0}</span> Product Found
                        </div>
                        <div className="single_product_menu flex items-center gap-2">
                            <h5 className="font-medium text-gray-700">Short by :</h5>
                            <select className="border rounded px-2 py-1">
                                <option>Select</option>
                                <option>Price</option>
                                <option>Name</option>
                            </select>
                        </div>
                        <div className="single_product_menu flex items-center gap-2">
                            <h5 className="font-medium text-gray-700">Show :</h5>
                            <div className="flex gap-1">
                                <a href="#" className="px-2 py-1 border rounded text-gray-700 hover:bg-pink-100">1</a>
                                <a href="#" className="px-2 py-1 border rounded text-gray-700 hover:bg-pink-100">2</a>
                                <a href="#" className="px-2 py-1 border rounded text-gray-700 hover:bg-pink-100">3</a>
                            </div>
                        </div>
                        <div className="single_product_menu flex items-center gap-2">
                            <div className="input-group">
                                <input type="text" className="border rounded px-2 py-1" placeholder="Search" />
                                <button className="ml-2 text-pink-500"><i className="ti-search" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 latest_product_inner">
                        {products && products.map(product => (
                            <div key={product.id} className="single_product_item bg-white rounded-lg shadow p-6 flex flex-col items-center max-w-xs mx-auto">
                                <img src={product.picture_main} alt={product.name} className="w-48 h-48 object-contain mb-4" />
                                <div className="single_product_text text-center">
                                                                        <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                                                                        <h3 className="text-gray-700 font-bold text-xl mb-2">${product.price}</h3>
                                                                        <button
                                                                                className="add_cart inline-block bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition"
                                                                                onClick={() => router.post('/cart/add', { product_id: product.id, quantity: 1 })}
                                                                        >
                                                                                + add to cart <i className="ti-heart ml-2" />
                                                                        </button>
                                                                        <a
                                                                            href={`/products/${product.id}`}
                                                                            className="mt-2 inline-block px-2 py-1 bg-pink-100 text-pink-600 rounded text-xs hover:bg-pink-200"
                                                                        >
                                                                            Voir le produit
                                                                        </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        <nav className="inline-flex gap-2 text-gray-700">
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">&lt;</a>
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">1</a>
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">2</a>
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">3</a>
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">4</a>
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">5</a>
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">6</a>
                            <a href="#" className="px-3 py-1 border rounded hover:bg-pink-100">&gt;</a>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Best Sellers */}
            <section className="product_list best_seller py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="section_tittle text-center mb-8">
                        <h2 className="text-3xl font-bold">Best Sellers <span className="text-pink-500">shop</span></h2>
                    </div>
                    <div className="flex gap-8 justify-center items-center">
                        {bestSellers && bestSellers.map(product => (
                            <div key={product.id} className="single_product_item bg-white rounded-lg shadow p-6 flex flex-col items-center">
                                <img src={product.picture_main} alt={product.name} className="w-40 h-40 object-contain mb-4" />
                                <div className="single_product_text text-center">
                                    <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                                    <h3 className="text-gray-700 font-bold text-xl mb-2">${product.price}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
