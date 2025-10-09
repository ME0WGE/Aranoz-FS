
import React from "react";
import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Blog({ posts, categories, recentPosts, tags, instagramFeeds, cartCount }) {
    return (
        <AppLayout cartCount={cartCount}>
            <Head title="Shop Single" />
            {/* Banner / Breadcrumb */}
            <section className="bg-[#EAF6FA] pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">Shop Single</h2>
                        <p className="text-gray-500 text-lg">Home <span className="mx-1">-</span> Shop Single</p>
                    </div>
                    <img src="/storage/images/banner/banner_img.png" alt="Category Chair" className="w-52 h-52 object-contain" />
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Blog Column */}
                    <div className="w-full lg:w-9/12">
                        <div className="flex flex-col gap-12">
                            {posts && posts.map(post => (
                                <article key={post.id} className="bg-white rounded shadow-sm overflow-hidden flex flex-col">
                                    <div className="relative">
                                        <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-pink-500 text-white px-4 py-2 rounded font-bold text-lg shadow">{post.date}</span>
                                        </div>
                                    </div>
                                    <div className="p-12 pb-8">
                                        <a href={post.url} className="block font-bold text-2xl mb-2 hover:text-pink-500 transition leading-tight">{post.title}</a>
                                        <div className="flex gap-4 text-gray-400 text-sm mb-2">
                                            <span>{post.category}</span>
                                            <span>{post.comments} Comments</span>
                                        </div>
                                        <p className="text-gray-600 mb-0 leading-relaxed">{post.excerpt}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-3/12 flex flex-col gap-8">
                        {/* Search */}
                        <div className="bg-white rounded shadow-sm p-6 mb-4">
                            <input type="text" placeholder="Search keyword" className="w-full border border-gray-200 rounded px-4 py-2 mb-4" />
                            <button className="w-full bg-pink-500 text-white py-2 rounded font-bold">SEARCH</button>
                        </div>
                        {/* Categories */}
                        <div className="bg-white rounded shadow-sm p-6 mb-4">
                            <h4 className="font-bold text-lg mb-4">Category</h4>
                            <ul className="space-y-2">
                                {categories && categories.map(cat => (
                                    <li key={cat.id} className="flex justify-between items-center text-gray-700 hover:text-pink-500 transition font-medium">
                                        <span>{cat.name}</span>
                                        <span className="text-xs text-gray-400 ml-2">({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Recent Posts */}
                        <div className="bg-white rounded shadow-sm p-6 mb-4">
                            <h4 className="font-bold text-lg mb-4">Recent Post</h4>
                            <ul className="space-y-4">
                                {recentPosts && recentPosts.map(post => (
                                    <li key={post.id} className="flex items-center gap-4">
                                        <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
                                        <div>
                                            <a href={post.url} className="font-medium text-gray-700 hover:text-pink-500 transition leading-tight">{post.title}</a>
                                            <div className="text-xs text-gray-400">{post.date}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Tag Clouds */}
                        <div className="bg-white rounded shadow-sm p-6 mb-4">
                            <h4 className="font-bold text-lg mb-4">Tag Clouds</h4>
                            <div className="flex flex-wrap gap-2">
                                {tags && tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 rounded text-gray-600 text-sm hover:bg-pink-100 cursor-pointer">{tag}</span>
                                ))}
                            </div>
                        </div>
                        {/* Newsletter */}
                        <div className="bg-white rounded shadow-sm p-6 mb-4">
                            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                            <input type="email" placeholder="Enter email" className="w-full border border-gray-200 rounded px-4 py-2 mb-4" />
                            <button className="w-full bg-pink-500 text-white py-2 rounded font-bold">SUBSCRIBE</button>
                        </div>
                    </aside>
                </div>
            </section>
        </AppLayout>
    );
}
