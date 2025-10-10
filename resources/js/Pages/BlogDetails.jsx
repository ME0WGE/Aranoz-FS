import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function BlogDetails({ blog, relatedBlogs, cartCount, auth }) {
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        
        if (!auth.user) {
            alert('Vous devez être connecté pour commenter');
            return;
        }

        if (!comment.trim()) {
            return;
        }

        setIsSubmitting(true);
        
        router.post(`/blog/${blog.id}/comment`, 
            { content: comment },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setComment('');
                    setIsSubmitting(false);
                },
                onError: () => {
                    setIsSubmitting(false);
                }
            }
        );
    };

    return (
        <AppLayout cartCount={cartCount}>
            <Head title={blog.title} />
            
            {/* Banner */}
            <section className="bg-[#EAF6FA] pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-gray-500 text-lg">
                        <Link href="/" className="hover:text-gray-700">Home</Link>
                        <span className="mx-1">-</span>
                        <Link href="/blog" className="hover:text-gray-700">Blog</Link>
                        <span className="mx-1">-</span>
                        Article
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Blog Image */}
                        <div className="mb-8">
                            <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Blog Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {blog.user?.name || 'Admin'}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(blog.created_at).toLocaleDateString('fr-FR', { 
                                    day: 'numeric', 
                                    month: 'long', 
                                    year: 'numeric' 
                                })}
                            </span>
                            {blog.category && (
                                <span className="bg-[#FF3368] text-white px-3 py-1 rounded-full text-xs">
                                    {blog.category.name}
                                </span>
                            )}
                        </div>

                        {/* Blog Content */}
                        <div className="prose max-w-none mb-12">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {blog.content}
                            </div>
                        </div>

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-12">
                                {blog.tags.map(tag => (
                                    <span 
                                        key={tag.id}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
                                    >
                                        #{tag.name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Comments Section */}
                        <div className="border-t pt-8">
                            <h3 className="text-2xl font-bold mb-6">
                                Commentaires ({blog.comments?.length || 0})
                            </h3>

                            {/* Comment Form */}
                            {auth.user ? (
                                <form onSubmit={handleCommentSubmit} className="mb-8">
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Ajouter un commentaire..."
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3368] focus:border-transparent resize-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !comment.trim()}
                                        className="mt-3 bg-[#FF3368] text-white px-6 py-2 rounded-lg hover:bg-[#ff1f5a] transition disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Envoi...' : 'Publier le commentaire'}
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
                                    <p className="text-gray-600 mb-3">
                                        Vous devez être connecté pour laisser un commentaire
                                    </p>
                                    <Link
                                        href="/login"
                                        className="inline-block bg-[#FF3368] text-white px-6 py-2 rounded-lg hover:bg-[#ff1f5a] transition"
                                    >
                                        Se connecter
                                    </Link>
                                </div>
                            )}

                            {/* Comments List */}
                            <div className="space-y-6">
                                {blog.comments && blog.comments.length > 0 ? (
                                    blog.comments.map(comment => (
                                        <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-full bg-[#FF3368] text-white flex items-center justify-center font-bold text-lg">
                                                    {comment.user?.name?.charAt(0).toUpperCase() || 'U'}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="font-semibold text-gray-900">
                                                            {comment.user?.name || 'Utilisateur'}
                                                        </span>
                                                        <span className="text-sm text-gray-500">
                                                            {new Date(comment.created_at).toLocaleDateString('fr-FR')}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {comment.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-center py-8">
                                        Aucun commentaire pour le moment. Soyez le premier à commenter !
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Related Blogs */}
                        {relatedBlogs && relatedBlogs.length > 0 && (
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h4 className="text-xl font-bold mb-4">Articles similaires</h4>
                                <div className="space-y-4">
                                    {relatedBlogs.map(relatedBlog => (
                                        <Link
                                            key={relatedBlog.id}
                                            href={`/blog/${relatedBlog.id}`}
                                            className="block group"
                                        >
                                            <div className="flex gap-3">
                                                <img 
                                                    src={relatedBlog.image} 
                                                    alt={relatedBlog.title}
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                                <div className="flex-1">
                                                    <h5 className="font-semibold text-sm group-hover:text-[#FF3368] transition line-clamp-2">
                                                        {relatedBlog.title}
                                                    </h5>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {new Date(relatedBlog.created_at).toLocaleDateString('fr-FR')}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Back to Blog */}
                        <Link
                            href="/blog"
                            className="block w-full text-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
                        >
                            ← Retour au blog
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}

