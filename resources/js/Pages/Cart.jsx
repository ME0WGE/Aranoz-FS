import React from "react";
import { router, Link, usePage } from "@inertiajs/react";
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function Cart({ cartItems, cartCount }) {
  const { props } = usePage();
  const handleRemove = (productId) => {
    router.delete(`/cart/remove/${productId}`);
  };

  const handleClear = () => {
    router.delete("/cart/clear");
  };

  return (
    <>
      <Header auth={props.auth} cartCount={cartCount ?? props.cartCount} />
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Mon Panier</h1>
        {cartItems.length === 0 ? (
          <div className="text-gray-500">Votre panier est vide.</div>
        ) : (
          <div>
            <table className="w-full mb-6">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Produit</th>
                  <th className="py-2 text-left">Quantité</th>
                  <th className="py-2 text-left">Prix</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 flex items-center gap-2">
                      <img src={item.product.picture_main} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                      <span>{item.product.name}</span>
                      <Link
                        href={`/products/${item.product.id}`}
                        className="ml-2 px-2 py-1 bg-pink-100 text-pink-600 rounded text-xs hover:bg-pink-200"
                      >
                        Voir le produit
                      </Link>
                    </td>
                    <td className="py-2">{item.quantity}</td>
                    <td className="py-2">{(item.product.price / 100).toFixed(2)} €</td>
                    <td className="py-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => handleRemove(item.product_id)}
                      >
                        Retirer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex gap-4">
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded"
                onClick={handleClear}
              >
                Vider le panier
              </button>
              <Link
                href="/checkout"
                className="bg-pink-500 text-white px-4 py-2 rounded font-bold hover:bg-pink-600 transition"
              >
                Passer à la commande
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
