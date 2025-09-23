import { Head } from "@inertiajs/react";

export default function Index({ products }) {
    return (
        <>
        <Head title="products"/>
            {products.map(p => (
                <div key={p.id}>{p.name}</div>
            ))}
        </>
    );
}
