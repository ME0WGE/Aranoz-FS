
import React, { useState } from "react";
import AppLayout from '@/Layouts/AppLayout';
import { Head, router, Link } from '@inertiajs/react';

export default function Category({ categories, colors, products, bestSellers, filters, priceRange, cartCount }) {
    const [localFilters, setLocalFilters] = useState({
        category: filters.category || '',
        color: filters.color || '',
        min_price: filters.min_price || priceRange.min,
        max_price: filters.max_price || priceRange.max,
        search: filters.search || '',
        sort_by: filters.sort_by || '',
        per_page: filters.per_page || 9,
    });

    const handleFilterChange = (key, value) => {
        const newFilters = { ...localFilters, [key]: value };
        setLocalFilters(newFilters);
        applyFilters(newFilters);
    };

    const applyFilters = (filtersToApply) => {
        router.get('/products', filtersToApply, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const resetFilters = () => {
        const defaultFilters = {
            category: '',
            color: '',
            min_price: priceRange.min,
            max_price: priceRange.max,
            search: '',
            sort_by: '',
            per_page: 9,
        };
        setLocalFilters(defaultFilters);
        router.get('/products', {}, {
            preserveState: false,
        });
    };

    const handleAddToCart = (productId) => {
        router.post('/cart/add', { 
            product_id: productId, 
            quantity: 1 
        }, {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout cartCount={cartCount}>
            <Head title="Shop Category" />
            {/* Banner / Breadcrumb */}
            <section className="bg-[#EAF6FA] pt-16 pb-8">
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
                <aside className="w-full md:w-64 flex-shrink-0">
                    {/* Browse Categories */}
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4">Browse Categories</h3>
                        <ul className="space-y-3">
                            <li 
                                className={`flex justify-between items-center transition font-medium cursor-pointer ${
                                    !localFilters.category ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                                }`}
                                onClick={() => handleFilterChange('category', '')}
                            >
                                <span>All Categories</span>
                            </li>
                            {categories && categories.map(cat => (
                                <li 
                                    key={cat.id} 
                                    className={`flex justify-between items-center transition font-medium cursor-pointer ${
                                        localFilters.category === cat.id ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                                    }`}
                                    onClick={() => handleFilterChange('category', cat.id)}
                                >
                                    <span>{cat.name}</span>
                                    <span className="text-xs text-gray-400 ml-2">({cat.products_count ?? 0})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Color Filter */}
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4">Color Filter</h3>
                        <ul className="space-y-2">
                            <li 
                                className={`flex items-center gap-2 cursor-pointer transition ${
                                    !localFilters.color ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'
                                }`}
                                onClick={() => handleFilterChange('color', '')}
                            >
                                <input 
                                    type="radio" 
                                    checked={!localFilters.color}
                                    onChange={() => {}}
                                    className="accent-pink-500"
                                />
                                <span className="text-sm">All Colors</span>
                            </li>
                            {colors && colors.map(color => (
                                <li 
                                    key={color.id} 
                                    className={`flex items-center gap-2 cursor-pointer transition ${
                                        localFilters.color === color.id ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'
                                    }`}
                                    onClick={() => handleFilterChange('color', color.id)}
                                >
                                    <input 
                                        type="radio" 
                                        checked={localFilters.color === color.id}
                                        onChange={() => {}}
                                        className="accent-pink-500"
                                    />
                                    <div 
                                        className="w-4 h-4 rounded-full border border-gray-300"
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <span className="text-sm">{color.name}</span>
                                    <span className="text-xs text-gray-400">({color.products_count ?? 0})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-8">
                        <h3 className="font-bold text-lg mb-4">Price Filter</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-600 mb-1 block">Min Price: €{localFilters.min_price}</label>
                                <input 
                                    type="range" 
                                    min={priceRange.min} 
                                    max={priceRange.max} 
                                    value={localFilters.min_price}
                                    onChange={(e) => handleFilterChange('min_price', e.target.value)}
                                    className="w-full accent-pink-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-600 mb-1 block">Max Price: €{localFilters.max_price}</label>
                                <input 
                                    type="range" 
                                    min={priceRange.min} 
                                    max={priceRange.max} 
                                    value={localFilters.max_price}
                                    onChange={(e) => handleFilterChange('max_price', e.target.value)}
                                    className="w-full accent-pink-500"
                                />
                            </div>
                            <div className="text-sm text-gray-600">
                                Price Range: <span className="text-pink-500 font-medium">€{localFilters.min_price} - €{localFilters.max_price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Reset Filters */}
                    <button 
                        onClick={resetFilters}
                        className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                    >
                        Reset Filters
                    </button>
                </aside>

                {/* Products */}
                <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                        <div className="single_product_menu text-pink-500 font-bold text-lg">
                            <span>{products.total}</span> Product{products.total !== 1 ? 's' : ''} Found
                        </div>
                        
                        {/* Sort by */}
                        <div className="single_product_menu flex items-center gap-2">
                            <h5 className="font-medium text-gray-700">Sort by:</h5>
                            <select 
                                className="border rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                value={localFilters.sort_by}
                                onChange={(e) => handleFilterChange('sort_by', e.target.value)}
                            >
                                <option value="">Default</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                                <option value="name_asc">Name: A to Z</option>
                                <option value="name_desc">Name: Z to A</option>
                            </select>
                        </div>

                        {/* Show per page */}
                        {/* <div className="single_product_menu flex items-center gap-2">
                            <h5 className="font-medium text-gray-700">Show:</h5>
                            <div className="flex gap-1">
                                {[9, 18, 27].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => handleFilterChange('per_page', num)}
                                        className={`px-3 py-1 border rounded transition ${
                                            localFilters.per_page === num 
                                                ? 'bg-pink-500 text-white border-pink-500' 
                                                : 'text-gray-700 hover:bg-pink-100'
                                        }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div> */}

                        {/* Search */}
                        <div className="single_product_menu flex items-center gap-2">
                            <input 
                                type="text" 
                                className="border rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                                placeholder="Search products..."
                                value={localFilters.search}
                                onChange={(e) => setLocalFilters({...localFilters, search: e.target.value})}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        applyFilters(localFilters);
                                    }
                                }}
                            />
                            <button 
                                onClick={() => applyFilters(localFilters)}
                                className="px-3 py-1.5 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 latest_product_inner">
                        {products.data && products.data.length > 0 ? products.data.map(product => (
                            <div key={product.id} className="single_product_item bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
                                <Link href={`/products/${product.id}`} className="block">
                                    <img src={product.picture_main} alt={product.name} className="w-48 h-48 object-contain mb-4 hover:scale-105 transition" />
                                </Link>
                                <div className="single_product_text text-center w-full">
                                    <h4 className="font-bold text-lg mb-2">{product.name}</h4>
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <h3 className="text-gray-700 font-bold text-xl">€{(product.price / 100).toFixed(2)}</h3>
                                        {product.discount && (
                                            <span className="text-sm text-red-500 font-semibold">
                                                -{product.discount.percentage}%
                                            </span>
                                        )}
                                    </div>
                                    {product.color && (
                                        <div className="flex items-center justify-center gap-2 mb-3">
                                            <span className="text-xs text-gray-600">Color:</span>
                                            <div 
                                                className="w-4 h-4 rounded-full border border-gray-300"
                                                style={{ backgroundColor: product.color.hex }}
                                                title={product.color.name}
                                            />
                                        </div>
                                    )}
                                    <button
                                        className="add_cart inline-block bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition w-full mb-2"
                                        onClick={() => handleAddToCart(product.id)}
                                    >
                                        + add to cart
                                    </button>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="inline-block px-2 py-1 bg-pink-100 text-pink-600 rounded text-xs hover:bg-pink-200 w-full"
                                    >
                                        View Product
                                    </Link>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-3 text-center py-12 text-gray-500">
                                No products found matching your filters.
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {products.last_page > 1 && (
                        <div className="flex justify-center mt-8">
                            <nav className="inline-flex gap-2 text-gray-700">
                                {products.prev_page_url && (
                                    <Link
                                        href={products.prev_page_url}
                                        className="px-3 py-1 border rounded hover:bg-pink-100"
                                        preserveState
                                        preserveScroll
                                    >
                                        &lt;
                                    </Link>
                                )}
                                
                                {[...Array(products.last_page)].map((_, index) => (
                                    <Link
                                        key={index + 1}
                                        href={`/products?page=${index + 1}`}
                                        className={`px-3 py-1 border rounded hover:bg-pink-100 ${
                                            products.current_page === index + 1 
                                                ? 'bg-pink-500 text-white' 
                                                : ''
                                        }`}
                                        preserveState
                                        preserveScroll
                                    >
                                        {index + 1}
                                    </Link>
                                ))}
                                
                                {products.next_page_url && (
                                    <Link
                                        href={products.next_page_url}
                                        className="px-3 py-1 border rounded hover:bg-pink-100"
                                        preserveState
                                        preserveScroll
                                    >
                                        &gt;
                                    </Link>
                                )}
                            </nav>
                        </div>
                    )}
                </div>
            </section>

            {/* Best Sellers */}
            {bestSellers && bestSellers.length > 0 && (
                <section className="product_list best_seller py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="section_tittle text-center mb-8">
                            <h2 className="text-3xl font-bold">Best Sellers <span className="text-pink-500">shop</span></h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {bestSellers.map(product => (
                                <div key={product.id} className="single_product_item bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-lg transition">
                                    <Link href={`/products/${product.id}`}>
                                        <img src={product.picture_main} alt={product.name} className="w-40 h-40 object-contain mb-4 hover:scale-105 transition" />
                                    </Link>
                                    <div className="single_product_text text-center">
                                        <h4 className="font-bold text-base mb-2">{product.name}</h4>
                                        <h3 className="text-gray-700 font-bold text-lg">€{(product.price / 100).toFixed(2)}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </AppLayout>
    );
}
