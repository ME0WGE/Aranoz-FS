import { usePage } from '@inertiajs/react';
import NavDash from '@/Components/NavDash';
import Footer from '@/Components/Footer';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-white">
            <NavDash auth={auth} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
