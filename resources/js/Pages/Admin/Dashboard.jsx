import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function AdminDashboard({ stats, recentOrders, topProducts, recentUsers }) {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-pink-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-pink-700 drop-shadow">Admin Dashboard</h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
  <div className="bg-white shadow-lg rounded-xl p-6 border border-pink-100 hover:scale-105 transition-transform">
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
              <li key={order.id} className="mb-2 flex justify-between items-center bg-white p-3 rounded-lg shadow hover:bg-pink-50 transition-colors">
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
              <li key={product.id} className="mb-2 flex justify-between items-center bg-white p-3 rounded-lg shadow hover:bg-blue-50 transition-colors">
                <span>{product.name}</span>
                <span className="text-blue-600 font-bold">{product.likes} likes</span>
                <Link href={`/admin/products/${product.id}`} className="text-pink-600 hover:underline">Manage</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-gray-100 hover:scale-105 transition-transform">
          <h2 className="text-lg font-semibold mb-2">User Management</h2>
          <Link href="/admin/users" className="text-blue-600 hover:underline font-bold">Go to Users</Link>
        </div>
        <div className="bg-white shadow rounded p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Order Management</h2>
          <Link href="/admin/orders" className="text-blue-600 hover:underline font-bold">Go to Orders</Link>
        </div>
        <div className="bg-white shadow rounded p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Product Management</h2>
          <Link href="/admin/products" className="text-blue-600 hover:underline font-bold">Go to Products</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white shadow rounded p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Coupon Management</h2>
          <Link href="/admin/coupons" className="text-blue-600 hover:underline font-bold">Go to Coupons</Link>
        </div>
        <div className="bg-white shadow rounded p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Discount Management</h2>
          <Link href="/admin/discounts" className="text-blue-600 hover:underline font-bold">Go to Discounts</Link>
        </div>
        <div className="bg-white shadow rounded p-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Category Management</h2>
          <Link href="/admin/categories" className="text-blue-600 hover:underline font-bold">Go to Categories</Link>
        </div>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-gray-100 hover:scale-105 transition-transform">
          <h2 className="text-lg font-semibold mb-2">Blog Management</h2>
          <Link href="/admin/blog" className="text-blue-600 hover:underline font-bold">Go to Blog</Link>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentUsers.map(user => (
            <li key={user.id} className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center border border-blue-100 hover:scale-105 transition-transform">
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
