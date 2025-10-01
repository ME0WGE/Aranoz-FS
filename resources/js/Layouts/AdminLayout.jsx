import { usePage } from '@inertiajs/react';
import NavDash from '@/Components/NavDash';
import Footer from '@/Components/Footer';

export default function AdminLayout({ children, auth, cartCount }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavDash auth={auth} cartCount={cartCount} />
            <main className="max-w-7xl mx-auto py-8 px-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}
