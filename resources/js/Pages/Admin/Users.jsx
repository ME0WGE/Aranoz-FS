
import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function AdminUsers({ users }) {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-black">User Management</h1>
      <table className="min-w-full bg-white shadow-lg rounded-xl border border-blue-100">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t hover:bg-blue-50 transition-colors">
              <td className="px-4 py-2 font-bold text-blue-700">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2"><span className="px-2 py-1 rounded text-white bg-gray-400">{user.role}</span></td>
              <td className="px-4 py-2">
                <Link href={`/admin/users/${user.id}`} className="text-blue-600 hover:underline mr-2 font-bold">View</Link>
                <Link href={`/admin/users/${user.id}/edit`} className="text-pink-600 hover:underline font-bold">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

AdminUsers.layout = (page) => <AdminLayout auth={page.props.auth} cartCount={page.props.cartCount}>{page}</AdminLayout>;

export default AdminUsers;
