import { Head, Link } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>
            <Head title="home" />
            <nav className="flex flex-1 justify-end">
                {auth.user ? (
                    <Link href={route('dashboard')} className="rounded-md px-3 py-2 text-black">
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={route('login')} className="rounded-md px-3 py-2 text-black">
                            Log in
                        </Link>
                        <Link href={route('register')} className="rounded-md px-3 py-2 text-black">
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </>
    );
}
