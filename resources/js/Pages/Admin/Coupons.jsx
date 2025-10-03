
import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function AdminCoupons({ coupons }) {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-black">Coupon Management</h1>
      <table className="min-w-full bg-white shadow-lg rounded-xl border border-yellow-100">
        <thead>
          <tr>
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Discount (%)</th>
            <th className="px-4 py-2">Valid Until</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map(coupon => (
            <tr key={coupon.id} className="border-t hover:bg-yellow-50 transition-colors">
              <td className="px-4 py-2 font-bold text-yellow-700">{coupon.code}</td>
              <td className="px-4 py-2 font-semibold">{coupon.discount}</td>
              <td className="px-4 py-2">{coupon.valid_until}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/coupons/${coupon.id}/edit`} className="text-pink-600 hover:underline font-bold">Edit</Link>
                <Link href={`/admin/coupons/${coupon.id}/delete`} className="text-red-600 hover:underline ml-2 font-bold">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminCoupons.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default AdminCoupons;
