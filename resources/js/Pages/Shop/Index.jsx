import { Head, router, Link } from '@inertiajs/react';

export default function Index({ products }) {
    const handleAddToCart = (productId) => {
        router.post('/cart/add', { product_id: productId, quantity: 1 });
    };

    return (
        <>
            <Head title="products" />
            {products.map(p => (
                <div key={p.id} className="border rounded p-4 mb-4 flex items-center justify-between">
                    <div>
                        <Link href={`/products/${p.id}`} className="font-bold text-lg text-pink-600 hover:underline">
                            {p.name}
                        </Link>
                        <p className="text-gray-500">{p.price} €</p>
                    </div>
                    <button
                        className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition"
                        onClick={() => handleAddToCart(p.id)}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </>
    );
}
