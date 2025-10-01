import React from "react";
import AppLayout from '@/Layouts/AppLayout';
import { Head, router } from '@inertiajs/react';

export default function Checkout({ cartItems, user }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/orders');
  };

  return (
    <AppLayout>
      <Head title="Checkout" />
      <section className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <form className="bg-white p-6 rounded shadow mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Nom</label>
            <input type="text" className="border rounded px-3 py-2 w-full" defaultValue={user?.name || ''} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="border rounded px-3 py-2 w-full" defaultValue={user?.email || ''} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Adresse</label>
            <input type="text" className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Ville</label>
            <input type="text" className="border rounded px-3 py-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Code Postal</label>
            <input type="text" className="border rounded px-3 py-2 w-full" />
          </div>
          <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded font-bold">Valider la commande</button>
        </form>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Votre panier</h2>
          <ul className="divide-y">
            {cartItems.map(item => (
              <li key={item.id} className="py-2 flex justify-between items-center">
                <span>{item.product.name} x {item.quantity}</span>
                <span className="font-bold">{item.product.price} €</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right font-bold text-lg">
            Total: {cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)} €
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
