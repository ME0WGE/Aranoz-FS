import React from 'react';
import { Link } from '@inertiajs/react';

export default function AdminOrders({ orders }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2">Order #</th>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-t">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.user?.name || 'N/A'}</td>
              <td className="px-4 py-2">{order.status}</td>
              <td className="px-4 py-2">€{order.total_price}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:underline mr-2">View</Link>
                <Link href={`/admin/orders/${order.id}/edit`} className="text-pink-600 hover:underline">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
