
import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

import { usePage } from '@inertiajs/react';

function AdminOrders({ orders }) {
  const { props } = usePage();
  const flash = props.flash || {};
  return (
  <div className="p-8 bg-white min-h-screen">
      {flash.success && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded font-semibold text-center">
          {flash.success}
        </div>
      )}
      {flash.error && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded font-semibold text-center">
          {flash.error}
        </div>
      )}
  <h1 className="text-3xl font-extrabold mb-8 text-black">Order Management</h1>
  <table className="min-w-full bg-white rounded-xl border border-gray-200">
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
              <td className="px-4 py-2 font-bold text-black">{order.id}</td>
              <td className="px-4 py-2">{order.user?.name || 'N/A'}</td>
              <td className="px-4 py-2"><span className={`px-2 py-1 rounded text-white ${order.status === 'confirmed' ? 'bg-green-500' : order.status === 'canceled' ? 'bg-red-500' : 'bg-gray-400'}`}>{order.status}</span></td>
              <td className="px-4 py-2 font-semibold">€{order.total_price}</td>
              <td className="px-4 py-2">
                <Link href={`/admin/orders/${order.id}`} className="text-blue-600 hover:underline mr-2 font-bold">View</Link>
                <Link href={`/admin/orders/${order.id}/edit`} className="text-pink-600 hover:underline font-bold">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminOrders.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default AdminOrders;
