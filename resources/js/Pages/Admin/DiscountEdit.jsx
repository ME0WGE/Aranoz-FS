import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function DiscountEdit({ discount }) {
  const [form, setForm] = useState({
    name: discount.name || '',
    value: discount.value || '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.patch(`/admin/discounts/${discount.id}`, form);
  }

  function handleDelete() {
    if (confirm('Supprimer cette réduction ?')) {
      router.delete(`/admin/discounts/${discount.id}`);
    }
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Discount</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Value</label>
          <input name="value" value={form.value} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
        </div>
        <div className="flex gap-4 mt-6">
          <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </form>
    </div>
  );
}
