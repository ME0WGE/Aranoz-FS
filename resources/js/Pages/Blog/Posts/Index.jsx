import { Head } from '@inertiajs/react';

export default function Index({ blogs }) {
    return (
        <>
            <Head title="blog" />
            {blogs.map(b => (
                <div key={b.id}>
                    <p>{b.title}</p>
                </div>
            ))}
        </>
    );
}
