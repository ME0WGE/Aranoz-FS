import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="min-h-screen">
                {/* Homepage content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 text-center">Welcome to Aranoz</h1>
                    <p className="text-xl text-gray-600 text-center mt-4">Premium furniture for modern living</p>
                </div>
            </div>
        </AppLayout>
    );
}
