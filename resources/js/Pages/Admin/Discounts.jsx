
import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function AdminDiscounts({ discounts }) {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-black">Discount Management</h1>
      <table className="min-w-full bg-white shadow-lg rounded-xl border border-green-100">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Value (%)</th>
            <th className="px-4 py-2">Valid Until</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map(discount => (
            <tr key={discount.id} className="border-t hover:bg-green-50 transition-colors">
              <td className="px-4 py-2 font-bold text-green-700">{discount.name}</td>
              <td className="px-4 py-2 font-semibold">{discount.value}</td>
              <td className="px-4 py-2">{discount.valid_until}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/discounts/${discount.id}/edit`} className="text-pink-600 hover:underline font-bold">Edit</Link>
                <Link href={`/admin/discounts/${discount.id}/delete`} className="text-red-600 hover:underline ml-2 font-bold">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminDiscounts.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default AdminDiscounts;
