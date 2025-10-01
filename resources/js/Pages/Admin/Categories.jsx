import React from 'react';
import { Link } from '@inertiajs/react';

export default function AdminCategories({ categories }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Category Management</h1>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id} className="border-t">
              <td className="px-4 py-2">{category.name}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/categories/${category.id}/edit`} className="text-pink-600 hover:underline">Edit</Link>
                <Link href={`/admin/categories/${category.id}/delete`} className="text-red-600 hover:underline ml-2">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
