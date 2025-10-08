import React, { useState } from "react";
import { router } from "@inertiajs/react";
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function ProductDetails({ product, reviews, bestSellers, cartCount }) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        router.post("/cart/add", {
            product_id: product.id,
            quantity,
        });
    };

    const handleDecrease = () => {
        setQuantity(q => Math.max(1, q - 1));
    };
    const handleIncrease = () => {
        setQuantity(q => q + 1);
    };

    return (
        <AppLayout cartCount={cartCount}>
            <Head title={product.name} />
            {/* Banner / Breadcrumb */}
            <section className="bg-[#EAF6FA] pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Shop Single</h2>
                        <p className="text-gray-500 text-lg">Home <span className="mx-1">-</span> Shop Single</p>
                    </div>
                    <img src="/storage/images/banner/banner_img.png" alt="Banner Chair" className="w-52 h-52 object-contain" />
                </div>
            </section>

            {/* Product Details */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Product Image + Thumbnails */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <img src={product.image} alt={product.name} className="w-[400px] h-[400px] object-contain mb-8" />
                        <div className="flex gap-4">
                            {product.thumbnails.map((thumb, idx) => (
                                <img key={idx} src={thumb} alt="Thumbnail" className="w-20 h-20 object-contain border rounded" />
                            ))}
                        </div>
                    </div>
                    {/* Right: Product Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start">
                        <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                            <span>Previous</span>
                            <span>Next</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                        <div className="text-pink-500 text-2xl font-bold mb-2">${product.price}</div>
                        <div className="mb-2 text-gray-500">Category: <span className="text-gray-700 font-medium">{product.category}</span></div>
                        <div className="mb-2 text-gray-500">Availability: <span className="text-green-600 font-medium">{product.availability}</span></div>
                        <p className="mb-6 text-gray-600">{product.description}</p>
                        <div className="flex items-center gap-2 mb-6">
                            <button className="px-4 py-2 border rounded" onClick={handleDecrease}>-</button>
                            <span className="px-4 py-2 border rounded">{quantity}</span>
                            <button className="px-4 py-2 border rounded" onClick={handleIncrease}>+</button>
                        </div>
                        <div className="flex gap-4 mb-8">
                            <button
                                className="bg-pink-500 text-white px-8 py-3 rounded shadow hover:bg-pink-600 transition"
                                onClick={handleAddToCart}
                            >
                                ADD TO CART
                            </button>
                            <button className="bg-white border px-4 py-3 rounded shadow text-pink-500"><i className="ti-heart" /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs: Description, Specification, Comments, Reviews */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="flex gap-4 border-b mb-8">
                    <button className="px-6 py-2 font-bold text-gray-700 border-b-2 border-pink-500">Reviews</button>
                    <button className="px-6 py-2 font-bold text-gray-500">Description</button>
                    <button className="px-6 py-2 font-bold text-gray-500">Specification</button>
                    <button className="px-6 py-2 font-bold text-gray-500">Comments</button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Review Summary & List */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex gap-8 mb-8">
                            <div className="bg-white rounded shadow p-6 flex flex-col items-center w-1/2">
                                <div className="text-4xl font-bold text-pink-500 mb-2">4.0</div>
                                <div className="text-gray-500 mb-2">Overall</div>
                                <div className="text-xs text-gray-400">(98 reviews)</div>
                            </div>
                            <div className="bg-white rounded shadow p-6 w-1/2">
                                <div className="font-bold mb-2">Based on 3 Reviews</div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm"><span>5 Star</span><span className="text-yellow-400">★★★★★</span><span>(01)</span></div>
                                    <div className="flex items-center gap-2 text-sm"><span>4 Star</span><span className="text-yellow-400">★★★★</span><span>(01)</span></div>
                                    <div className="flex items-center gap-2 text-sm"><span>3 Star</span><span className="text-yellow-400">★★★</span><span>(01)</span></div>
                                    <div className="flex items-center gap-2 text-sm"><span>2 Star</span><span className="text-yellow-400">★★</span><span>(01)</span></div>
                                    <div className="flex items-center gap-2 text-sm"><span>1 Star</span><span className="text-yellow-400">★</span><span>(01)</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            {reviews.map((review, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover" />
                                    <div>
                                        <div className="font-bold text-gray-700">{review.name}</div>
                                        <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
                                        <div className="text-gray-600 mb-2">{review.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right: Add Review Form */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded shadow p-6">
                            <div className="font-bold mb-4">Add a Review</div>
                            <div className="mb-2 text-sm">Your Rating <span className="text-yellow-400">★★★★★</span> Outstanding</div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Your Full name" className="w-full border rounded px-4 py-2" />
                                <input type="email" placeholder="Email address" className="w-full border rounded px-4 py-2" />
                                <input type="text" placeholder="Phone number" className="w-full border rounded px-4 py-2" />
                                <textarea placeholder="Review" className="w-full border rounded px-4 py-2" rows={3}></textarea>
                                <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded font-bold">SUBMIT NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Sellers */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="section_tittle text-center mb-8">
                    <h2 className="text-3xl font-bold">Best Sellers <span className="text-pink-500">Shop</span></h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {bestSellers.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                            <img src={item.image} alt={item.name} className="w-32 h-32 object-contain mb-4" />
                            <div className="text-center">
                                <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                                <h3 className="text-gray-700 font-bold text-xl mb-2">${item.price}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AppLayout>
    );
}
