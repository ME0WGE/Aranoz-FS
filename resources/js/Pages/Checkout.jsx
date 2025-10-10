import React, { useState } from "react";
import AppLayout from '@/Layouts/AppLayout';
import { Head, router } from '@inertiajs/react';

export default function Checkout({ cartItems, user }) {
  const [payment, setPayment] = useState('check');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) return;
    router.post('/orders', { payment_method: payment });
  };

  return (
    <AppLayout>
      <Head title="Checkout" />
      <section className="bg-[#EAF6FA] pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <h2 className="text-4xl font-bold mb-2">Checkout</h2>
          <img src="/storage/images/banner/banner_img.png" alt="Banner Chair" className="w-52 h-52 object-contain" />
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        <form className="w-full lg:w-2/3 bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
          <div className="mb-6">
            {/* <div className="bg-[#ecfdff] p-3 rounded text-sm mb-2">Returning Customer? <a href="/login" className="text-pink-500 underline">Click here to login</a></div> */}
            {/* <div className="bg-[#ecfdff] p-3 rounded text-sm">Have a coupon? <span className="text-pink-500 underline cursor-pointer">Click here to enter your code</span></div> */}
          </div>
          <h3 className="text-xl font-bold mb-4">Billing Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" className="border rounded px-3 py-2" placeholder="First name" defaultValue={user?.name?.split(' ')[0] || ''} required />
            <input type="text" className="border rounded px-3 py-2" placeholder="Last name" defaultValue={user?.name?.split(' ')[1] || ''} required />
          </div>
          <input type="text" className="border rounded px-3 py-2 mb-4" placeholder="Company name" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" className="border rounded px-3 py-2" placeholder="Phone number" required />
            <input type="email" className="border rounded px-3 py-2" placeholder="Email Address" defaultValue={user?.email || ''} required />
          </div>
          <input type="text" className="border rounded px-3 py-2 mb-4" placeholder="Country" required />
          <input type="text" className="border rounded px-3 py-2 mb-4" placeholder="Address line 1" required />
          <input type="text" className="border rounded px-3 py-2 mb-4" placeholder="Address line 2" />
          <input type="text" className="border rounded px-3 py-2 mb-4" placeholder="Town/City" required />
          <input type="text" className="border rounded px-3 py-2 mb-4" placeholder="District" />
          <input type="text" className="border rounded px-3 py-2 mb-4" placeholder="Postcode/Zip" required />
          <div className="mb-4 flex items-center gap-2">
            {/* <input type="checkbox" /> <span>Create an account?</span> */}
          </div>
          <h3 className="text-xl font-bold mb-4">Shipping Details</h3>
          <div className="mb-4 flex items-center gap-2">
            {/* <input type="checkbox" /> <span>Ship to different address?</span> */}
          </div>
          {/* <textarea className="border rounded px-3 py-2 mb-4 w-full" placeholder="Order Notes" rows={3}></textarea> */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Payment</h3>
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-2">
                <input type="radio" name="payment" value="check" checked={payment === 'check'} onChange={() => setPayment('check')} />
                <span>Check Payments</span>
              </label>
              <div className="text-xs text-gray-500 mb-2 ml-6">Please send a check to Store Name, Store Street, Store Town, Store State / Country, Store Postcode.</div>
              <label className="flex items-center gap-2 mb-2">
                <input type="radio" name="payment" value="paypal" checked={payment === 'paypal'} onChange={() => setPayment('paypal')} />
                <span>Paypal</span>
              </label>
              <div className="text-xs text-gray-500 mb-2 ml-6">Please send a check to Store Name, Store Street, Store Town, Store State / Country, Store Postcode.</div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <input type="checkbox" checked={acceptTerms} onChange={e => setAcceptTerms(e.target.checked)} required />
              <span>I’ve read and accept the <a href="#" className="text-pink-500 underline">terms & conditions</a></span>
            </div>
            <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded font-bold w-full">PROCEED TO PAYMENT</button>
          </div>
        </form>
        <aside className="w-full lg:w-1/3">
          <div className="bg-white p-8 rounded shadow mb-8">
            <h3 className="text-xl font-bold mb-4">Your Order</h3>
            <ul className="divide-y mb-4">
              {cartItems.map(item => (
                <li key={item.id} className="py-2 flex justify-between items-center">
                  <span>{item.product.name} x {item.quantity}</span>
                  <span className="font-bold">{item.product.price} €</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>SUBTOTAL</span>
              <span>{cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)} €</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>SHIPPING</span>
              <span>Free worldwide</span>
            </div>
            <div className="flex justify-between mb-2 font-bold">
              <span>TOTAL</span>
              <span>{cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + 9.99} €</span>
            </div>
          </div>
        </aside>
      </section>
    </AppLayout>
  );
}
