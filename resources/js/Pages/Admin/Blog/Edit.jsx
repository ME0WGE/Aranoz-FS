import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Edit({ blog, categories, tags }) {
    const { data, setData, post, processing, errors } = useForm({
        title: blog.title || '',
        content: blog.content || '',
        blog_category_id: blog.blog_category_id || '',
        image: null,
        tags: blog.tags ? blog.tags.map(t => t.id) : [],
        _method: 'PATCH',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.blog.update', blog.id));
    };

    const handleTagToggle = (tagId) => {
        if (data.tags.includes(tagId)) {
            setData('tags', data.tags.filter(id => id !== tagId));
        } else {
            setData('tags', [...data.tags, tagId]);
        }
    };

    return (
        <AdminLayout>
            <Head title={`Edit ${blog.title}`} />
            
            <div className="py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Blog Post: {blog.title}</h1>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    required
                                />
                                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                            </div>

                            {/* Content */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Content *
                                </label>
                                <textarea
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    rows={10}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    required
                                />
                                {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Category *
                                </label>
                                <select
                                    value={data.blog_category_id}
                                    onChange={(e) => setData('blog_category_id', e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                {errors.blog_category_id && <p className="text-red-500 text-sm mt-1">{errors.blog_category_id}</p>}
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tags
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map(tag => (
                                        <button
                                            key={tag.id}
                                            type="button"
                                            onClick={() => handleTagToggle(tag.id)}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                                                data.tags.includes(tag.id)
                                                    ? 'bg-pink-500 text-white'
                                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                        >
                                            {tag.name}
                                        </button>
                                    ))}
                                </div>
                                {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags}</p>}
                            </div>

                            {/* Current Image */}
                            {blog.image && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Current Image
                                    </label>
                                    <img src={blog.image} alt={blog.title} className="w-64 h-48 object-cover rounded-lg" />
                                </div>
                            )}

                            {/* New Image */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Update Featured Image
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-4 pt-6 border-t">
                                <button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-3 bg-[#FF3368] text-white rounded-lg hover:bg-[#ff1f5a] transition-colors font-medium disabled:opacity-50"
                                >
                                    {processing ? 'Updating...' : 'Update Blog Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

