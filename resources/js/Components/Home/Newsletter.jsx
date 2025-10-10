import React, { useState } from 'react';
import { router } from '@inertiajs/react';

const Newsletter = ({ blogs }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setStatus({
                type: 'error',
                message: 'Veuillez entrer une adresse email valide'
            });
            return;
        }

        router.post('/newsletter', { email }, {
            preserveScroll: true,
            onSuccess: () => {
                setStatus({
                    type: 'success',
                    message: 'Merci pour votre inscription !'
                });
                setEmail('');
            },
            onError: (errors) => {
                setStatus({
                    type: 'error',
                    message: errors.email || 'Une erreur est survenue. Veuillez réessayer.'
                });
            }
        });
    };

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Subscribe to get Updated
                        <br />
                        with new offers
                    </h2>

                    <form onSubmit={handleSubmit} className="mt-8">
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff3368] focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="bg-[#ff3368] text-white px-8 py-3 rounded-full hover:bg-[#ff1f5a] transition-colors duration-300 whitespace-nowrap"
                            >
                                Subscribe Now
                            </button>
                        </div>
                        {status.message && (
                            <p className={`mt-4 text-sm ${
                                status.type === 'error' ? 'text-red-600' : 'text-green-600'
                            }`}>
                                {status.message}
                            </p>
                        )}
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;