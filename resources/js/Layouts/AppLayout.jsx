import { usePage } from '@inertiajs/react';
import Nav from '@/Components/Nav';
import Footer from '@/Components/Footer';

export default function AppLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-white">
            <Nav auth={auth} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
