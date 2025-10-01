import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function OrderEdit({ order }) {
  const [form, setForm] = useState({
    status: order.status || '',
    payment_method: order.payment_method || '',
    shipping_method: order.shipping_method || '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.patch(`/admin/orders/${order.id}`, form);
  }

  function handleDelete() {
    if (confirm('Supprimer cette commande ?')) {
      router.delete(`/admin/orders/${order.id}`);
    }
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Status</label>
          <input name="status" value={form.status} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Payment Method</label>
          <input name="payment_method" value={form.payment_method} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block mb-1">Shipping Method</label>
          <input name="shipping_method" value={form.shipping_method} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
        </div>
        <div className="flex gap-4 mt-6">
          <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </form>
    </div>
  );
}
