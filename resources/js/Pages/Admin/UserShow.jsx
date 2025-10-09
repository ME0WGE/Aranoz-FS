import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaArrowLeft, FaEdit, FaTrash, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaShieldAlt, FaClock, FaCog, FaCheckCircle } from 'react-icons/fa';

export default function UserShow({ user }) {
  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete user "${user.name}"? This action cannot be undone.`)) {
      router.delete(route('admin.users.destroy', user.id));
    }
  };

  const getRoleBadgeColor = (roleName) => {
    switch (roleName?.toLowerCase()) {
      case 'admin':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'webmaster':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'agent':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'community-manager':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <AdminLayout>
      <Head title={`User: ${user.name}`} />
      
      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href={route('admin.users.index')}
              className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <FaArrowLeft className="w-6 h-6 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">User Profile</h1>
              <p className="text-gray-600">View and manage user details</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Link
              href={route('admin.users.edit', user.id)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium"
            >
              <FaEdit className="w-5 h-5 mr-2" />
              Edit User
            </Link>
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md font-medium"
            >
              <FaTrash className="w-5 h-5 mr-2" />
              Delete User
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Profile Header */}
            <div className="bg-purple-500 p-8 text-white">
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className="w-24 h-24 bg-white bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  {user.avatar?.path ? (
                    <img 
                      src={user.avatar.path} 
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                
                {/* User Info */}
                <div>
                  <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
                  <p className="text-white text-opacity-90 mb-2">{user.email}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border bg-white ${
                    user.role && user.role.name === 'admin' ? 'text-purple-800 border-purple-200' :
                    user.role && user.role.name === 'webmaster' ? 'text-blue-800 border-blue-200' :
                    user.role && user.role.name === 'agent' ? 'text-green-800 border-green-200' :
                    user.role && user.role.name === 'community-manager' ? 'text-orange-800 border-orange-200' :
                    'text-gray-800 border-gray-200'
                  }`}>
                    {user.role ? user.role.name : 'user'}
                  </span>
                </div>
              </div>
            </div>

            {/* User Details */}
    <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">User Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUser className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium">Full Name</p>
                      <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium">Email Address</p>
                      <p className="text-sm font-semibold text-gray-900">{user.email}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <FaShieldAlt className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium">Role</p>
                      <p className="text-sm font-semibold text-gray-900 capitalize">{user.role ? user.role.name : 'user'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCalendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium">Member Since</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(user.created_at).toLocaleDateString('fr-FR', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <FaClock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium">Last Updated</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {new Date(user.updated_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaCog className="w-5 h-5 text-gray-600" />
                Actions
              </h3>
              <div className="space-y-3">
                <Link
                  href={route('admin.users.edit', user.id)}
                  className="block w-full px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaEdit className="w-4 h-4" />
                    Edit Profile
                  </div>
                </Link>
                <button
                  onClick={handleDelete}
                  className="block w-full px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaTrash className="w-4 h-4" />
                    Delete User
                  </div>
                </button>
                <Link
                  href={route('admin.users.index')}
                  className="block w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaArrowLeft className="w-4 h-4" />
                    Back to Users
                  </div>
                </Link>
              </div>
            </div>

            {/* Account Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-gray-600" />
                Account Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Account ID</span>
                  <span className="text-sm font-mono font-semibold text-gray-900">#{user.id}</span>
                </div>
              </div>
            </div>

            {/* Role Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaShieldAlt className="w-5 h-5 text-gray-600" />
                Permissions
              </h3>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-700 mb-2">Current Role:</p>
                <span className={`inline-block px-4 py-2 rounded-lg text-base font-bold border-2 ${getRoleBadgeColor(user.role ? user.role.name : null)}`}>
                  {user.role && user.role.name ? user.role.name.toUpperCase() : 'USER'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
