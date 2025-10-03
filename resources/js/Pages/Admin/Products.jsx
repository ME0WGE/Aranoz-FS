
import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function AdminProducts({ products }) {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-black">Product Management</h1>
      <table className="min-w-full bg-white shadow-lg rounded-xl border border-pink-100">
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
            <tr key={product.id} className="border-t hover:bg-pink-50 transition-colors">
              <td className="px-4 py-2 font-bold text-pink-700">{product.name}</td>
              <td className="px-4 py-2">{product.category?.name || 'N/A'}</td>
              <td className="px-4 py-2 font-semibold">€{product.price}</td>
              <td className="px-4 py-2">{product.quantity}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/products/${product.id}`} className="text-blue-600 hover:underline mr-2 font-bold">View</Link>
                <Link href={`/admin/products/${product.id}/edit`} className="text-pink-600 hover:underline font-bold">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminProducts.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default AdminProducts;
