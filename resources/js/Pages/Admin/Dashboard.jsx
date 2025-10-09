import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { 
  FaDollarSign, 
  FaShoppingBag, 
  FaUsers, 
  FaBox, 
  FaUserFriends, 
  FaChartBar, 
  FaShoppingCart,
  FaTags,
  FaTicketAlt,
  FaPercent,
  FaNewspaper,
  FaEnvelope
} from 'react-icons/fa';

export default function AdminDashboard({ stats }) {
  const { auth } = usePage().props;
  const userRole = auth?.user?.role?.name;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-800 font-medium mb-1">Total Sales</p>
              <p className="text-3xl font-bold text-green-600">€{(stats.totalSales / 100).toFixed(2)}</p>
            </div>
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <FaDollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-800 font-medium mb-1">Orders</p>
              <p className="text-3xl font-bold text-blue-600">{stats.ordersCount}</p>
            </div>
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <FaShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-purple-50 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-800 font-medium mb-1">Users</p>
              <p className="text-3xl font-bold text-purple-600">{stats.usersCount}</p>
            </div>
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
              <FaUsers className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-800 font-medium mb-1">Products</p>
              <p className="text-3xl font-bold text-orange-600">{stats.productsCount}</p>
            </div>
            <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
              <FaBox className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Role Based */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Admin Only */}
          {userRole === 'admin' && (
            <>
              <Link href={route('admin.users.index')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaUserFriends className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Users</h3>
                </div>
                <p className="text-sm text-gray-600">Manage user accounts</p>
              </Link>
              <Link href={route('admin.analytics')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaChartBar className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Analytics</h3>
                </div>
                <p className="text-sm text-gray-600">View detailed analytics</p>
              </Link>
            </>
          )}
          
          {/* Admin & Agent */}
          {(userRole === 'admin' || userRole === 'agent') && (
            <Link href={route('admin.orders.index')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaShoppingCart className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Orders</h3>
              </div>
              <p className="text-sm text-gray-600">Manage customer orders</p>
            </Link>
          )}

          {/* Admin & Webmaster */}
          {(userRole === 'admin' || userRole === 'webmaster') && (
            <>
              <Link href={route('admin.products.index')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaBox className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold">Products</h3>
                </div>
                <p className="text-sm text-gray-600">Manage product catalog</p>
              </Link>
              <Link href={route('admin.categories.index')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <FaTags className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">Categories</h3>
                </div>
                <p className="text-sm text-gray-600">Manage categories</p>
              </Link>
              <Link href={route('admin.discounts.index')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <FaPercent className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold">Discounts</h3>
                </div>
                <p className="text-sm text-gray-600">Manage discounts</p>
              </Link>
              <Link href={route('admin.coupons.index')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FaTicketAlt className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold">Coupons</h3>
                </div>
                <p className="text-sm text-gray-600">Manage coupon codes</p>
              </Link>
            </>
          )}

          {/* Admin & Community Manager */}
          {(userRole === 'admin' || userRole === 'community-manager') && (
            <Link href={route('admin.blog.index')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FaNewspaper className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold">Blog</h3>
              </div>
              <p className="text-sm text-gray-600">Manage blog posts</p>
            </Link>
          )}

          {/* All Roles */}
          <Link href={route('admin.mailbox')} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <FaEnvelope className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="font-semibold">Mailbox</h3>
            </div>
            <p className="text-sm text-gray-600">View customer messages</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

AdminDashboard.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;
