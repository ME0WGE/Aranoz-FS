import React from 'react';
import { Link } from '@inertiajs/react';

export default function AdminProducts({ products }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="border-t">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.category?.name || 'N/A'}</td>
              <td className="px-4 py-2">€{product.price}</td>
              <td className="px-4 py-2">{product.quantity}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/products/${product.id}`} className="text-blue-600 hover:underline mr-2">View</Link>
                <Link href={`/admin/products/${product.id}/edit`} className="text-pink-600 hover:underline">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
