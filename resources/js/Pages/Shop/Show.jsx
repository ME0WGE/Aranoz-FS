import { Head } from "@inertiajs/react";

export default function Show({ product }) {
    return (
        <>
        <Head title={product.name}/>
            <div key={product.id}>
                <p>{product.name}</p>
            </div>
        </>
    );
}
