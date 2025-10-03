import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function BlogEdit({ post }) {
  const [form, setForm] = useState({
    title: post.title || '',
    content: post.content || '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.patch(`/admin/blog/${post.id}`, form);
  }

  function handleDelete() {
    if (confirm('Supprimer cet article ?')) {
      router.delete(`/admin/blog/${post.id}`);
    }
  }

  return (
    <div className="p-8 bg-white max-w-lg mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-black">Edit Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Content</label>
          <textarea name="content" value={form.content} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
        </div>
        <div className="flex gap-4 mt-6">
          <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </form>
    </div>
  );
}
