import { usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function AppLayout({ children, cartCount }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-white">
            <Header auth={auth} cartCount={cartCount ?? usePage().props.cartCount} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
