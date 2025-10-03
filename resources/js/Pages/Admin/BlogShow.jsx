import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

export default function BlogShow({ post }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <h1 className="text-2xl font-bold mb-4">Article introuvable</h1>
          <Link href="/admin/blog" className="text-black underline">Retour à la liste des articles</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-extrabold mb-6 text-black">{post.title}</h1>
        <div className="mb-4 text-gray-600">Catégorie : {post.category?.name || 'N/A'}</div>
        <div className="mb-4 text-gray-600">Tags : {post.tags?.map(tag => tag.name).join(', ') || 'Aucun'}</div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
          <div className="text-black whitespace-pre-line">{post.content}</div>
        </div>
        <Link href="/admin/blog" className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800 transition">Retour à la liste</Link>
      </div>
    </div>
  );
}

BlogShow.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;
