
import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function AdminBlog({ posts }) {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-black">Blog Management</h1>
      <div className="mb-6 flex justify-end">
        <Link href="/admin/blog/create" className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800 transition">Create New Post</Link>
      </div>
      <table className="min-w-full bg-white rounded-xl border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Tags</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id} className="border-t">
              <td className="px-4 py-2 font-bold text-black">{post.title}</td>
              <td className="px-4 py-2">{post.category?.name || 'N/A'}</td>
              <td className="px-4 py-2">{post.tags?.map(tag => tag.name).join(', ')}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/blog/${post.id}`} className="text-blue-600 hover:underline mr-2 font-bold">View</Link>
                <Link href={`/admin/blog/${post.id}/edit`} className="text-pink-600 hover:underline font-bold">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminBlog.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default AdminBlog;
