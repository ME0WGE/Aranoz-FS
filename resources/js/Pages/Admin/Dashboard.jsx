import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function AdminDashboard({ stats, recentOrders, topProducts, recentUsers }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded p-4">
          <div className="text-gray-500">Total Sales</div>
          <div className="text-2xl font-bold">€{stats.totalSales}</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-gray-500">Orders</div>
          <div className="text-2xl font-bold">{stats.ordersCount}</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-gray-500">Users</div>
          <div className="text-2xl font-bold">{stats.usersCount}</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-gray-500">Products</div>
          <div className="text-2xl font-bold">{stats.productsCount}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <ul>
            {recentOrders.map(order => (
              <li key={order.id} className="mb-2 flex justify-between items-center bg-gray-50 p-2 rounded">
                <span>Order #{order.id} - {order.status}</span>
                <Link href={`/admin/orders/${order.id}`} className="text-pink-600 hover:underline">Details</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Top Products (Likes)</h2>
          <ul>
            {topProducts.map(product => (
              <li key={product.id} className="mb-2 flex justify-between items-center bg-gray-50 p-2 rounded">
                <span>{product.name}</span>
                <span className="text-blue-600 font-bold">{product.likes} likes</span>
                <Link href={`/admin/products/${product.id}`} className="text-pink-600 hover:underline">Manage</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentUsers.map(user => (
            <li key={user.id} className="bg-white shadow rounded p-4 flex flex-col items-center">
              <span className="font-bold">{user.name}</span>
              <span className="text-gray-500 text-sm">{user.email}</span>
              <Link href={`/admin/users/${user.id}`} className="mt-2 text-blue-600 hover:underline">Profile</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

AdminDashboard.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;
