import React from 'react';
import { Link } from '@inertiajs/react';

export default function AdminCoupons({ coupons }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Coupon Management</h1>
      <table className="min-w-full bg-white shadow rounded">
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
            <tr key={coupon.id} className="border-t">
              <td className="px-4 py-2">{coupon.code}</td>
              <td className="px-4 py-2">{coupon.discount}</td>
              <td className="px-4 py-2">{coupon.valid_until}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/coupons/${coupon.id}/edit`} className="text-pink-600 hover:underline">Edit</Link>
                <Link href={`/admin/coupons/${coupon.id}/delete`} className="text-red-600 hover:underline ml-2">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
