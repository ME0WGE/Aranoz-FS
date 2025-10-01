import React from 'react';
import { Link } from '@inertiajs/react';

export default function UserShow({ user }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">User Details</h1>
      <div className="bg-white shadow rounded p-6 mb-4">
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Role:</strong> {user.role}</div>
      </div>
      <Link href={`/admin/users/${user.id}/edit`} className="text-pink-600 hover:underline mr-4">Edit</Link>
      <Link href="/admin/users" className="text-blue-600 hover:underline">Back to list</Link>
    </div>
  );
}
