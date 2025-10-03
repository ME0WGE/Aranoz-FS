
import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function AdminCategories({ categories }) {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-black">Category Management</h1>
      <table className="min-w-full bg-white shadow-lg rounded-xl border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id} className="border-t hover:bg-gray-100 transition-colors">
              <td className="px-4 py-2 font-bold text-gray-700">{category.name}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/categories/${category.id}/edit`} className="text-pink-600 hover:underline font-bold">Edit</Link>
                <Link href={`/admin/categories/${category.id}/delete`} className="text-red-600 hover:underline ml-2 font-bold">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminCategories.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default AdminCategories;
