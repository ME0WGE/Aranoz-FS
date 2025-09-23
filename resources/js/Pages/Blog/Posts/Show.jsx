import { Head } from '@inertiajs/react';

export default function Show({ blog }) {
    return (
        <>
            <Head title={blog.title} />
            {blog.title}
        </>
    );
}
