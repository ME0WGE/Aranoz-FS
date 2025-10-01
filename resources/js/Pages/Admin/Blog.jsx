import React from 'react';
import { Link } from '@inertiajs/react';

export default function AdminBlog({ posts }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Blog Management</h1>
      <table className="min-w-full bg-white shadow rounded">
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
              <td className="px-4 py-2">{post.title}</td>
              <td className="px-4 py-2">{post.category?.name || 'N/A'}</td>
              <td className="px-4 py-2">{post.tags?.map(tag => tag.name).join(', ')}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/blog/${post.id}`} className="text-blue-600 hover:underline mr-2">View</Link>
                <Link href={`/admin/blog/${post.id}/edit`} className="text-pink-600 hover:underline">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
