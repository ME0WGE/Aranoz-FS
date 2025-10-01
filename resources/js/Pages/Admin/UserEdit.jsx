import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function UserEdit({ user }) {
  const { props } = usePage();
  let roles = props.roles || [];
  const flash = props.flash || {};
  const [form, setForm] = useState({
    name: user.name || '',
    email: user.email || '',
    role_id: user.role_id || '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.patch(`/admin/users/${user.id}`, form);
  }

  function handleDelete() {
    if (confirm('Supprimer cet utilisateur ?')) {
      router.delete(`/admin/users/${user.id}`);
    }
  }

  return (
    <AdminLayout>
      <div className="p-8 max-w-lg mx-auto">
        {flash.success && (
          <div className="mb-4 p-4 bg-green-100 text-green-800 rounded font-semibold text-center">
            {flash.success}
          </div>
        )}
        <h1 className="text-2xl font-bold mb-6">Edit User</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block mb-1">Role</label>
            <select name="role_id" value={form.role_id} onChange={handleChange} className="border rounded px-3 py-2 w-full">
              <option value="">Sélectionner un rôle</option>
              {roles.map(role => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Save</button>
            <button type="button" onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
