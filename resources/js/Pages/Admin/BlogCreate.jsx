import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function BlogCreate() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    content: '',
    blog_category_id: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/blog', {
      preserveScroll: true,
    });
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-black">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block mb-1 font-bold text-black">Title</label>
          <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="w-full border px-3 py-2 rounded" />
          {errors.title && <div className="text-red-600 text-sm mt-1">{errors.title}</div>}
        </div>
        <div>
          <label className="block mb-1 font-bold text-black">Content</label>
          <textarea value={data.content} onChange={e => setData('content', e.target.value)} className="w-full border px-3 py-2 rounded" rows={6} />
          {errors.content && <div className="text-red-600 text-sm mt-1">{errors.content}</div>}
        </div>
        <div>
          <label className="block mb-1 font-bold text-black">Category ID</label>
          <input type="text" value={data.blog_category_id} onChange={e => setData('blog_category_id', e.target.value)} className="w-full border px-3 py-2 rounded" />
          {errors.blog_category_id && <div className="text-red-600 text-sm mt-1">{errors.blog_category_id}</div>}
        </div>
        <div>
          <label className="block mb-1 font-bold text-black">Image URL</label>
          <input type="text" value={data.image} onChange={e => setData('image', e.target.value)} className="w-full border px-3 py-2 rounded" />
          {errors.image && <div className="text-red-600 text-sm mt-1">{errors.image}</div>}
        </div>
        <button type="submit" disabled={processing} className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800 transition">Create</button>
      </form>
    </div>
  );
}

BlogCreate.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default BlogCreate;
