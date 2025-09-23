import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import { Head, Link } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>
            <Head title="home" />
            <Nav auth={auth} />
            <Footer />
        </>
    );
}
