import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <>
            <Head title="404 - Page non trouvée" />
            <div className="min-h-screen bg-gradient-to-b from-[#EAF6FA] to-white flex items-center justify-center px-4">
                <div className="text-center max-w-2xl">
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-[#FF3368] mb-4">404</h1>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page non trouvée</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="px-8 py-3 bg-[#FF3368] text-white rounded-lg hover:bg-[#ff1f5a] transition-colors font-medium"
                        >
                            Retour à l'accueil
                        </Link>
                        <Link
                            href="/products"
                            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                            Voir nos produits
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

