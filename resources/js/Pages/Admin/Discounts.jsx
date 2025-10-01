import React from 'react';
import { Link } from '@inertiajs/react';

export default function AdminDiscounts({ discounts }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Discount Management</h1>
      <table className="min-w-full bg-white shadow rounded">
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
            <tr key={discount.id} className="border-t">
              <td className="px-4 py-2">{discount.name}</td>
              <td className="px-4 py-2">{discount.value}</td>
              <td className="px-4 py-2">{discount.valid_until}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/discounts/${discount.id}/edit`} className="text-pink-600 hover:underline">Edit</Link>
                <Link href={`/admin/discounts/${discount.id}/delete`} className="text-red-600 hover:underline ml-2">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
