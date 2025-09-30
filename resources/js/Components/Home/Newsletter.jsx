import React, { useState } from 'react';

const Newsletter = ({ blogs }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address'
            });
            return;
        }

        try {
            // TODO: Implement newsletter subscription
            setStatus({
                type: 'success',
                message: 'Thank you for subscribing!'
            });
            setEmail('');
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An error occurred. Please try again.'
            });
        }
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

                    {/* Example: Display latest blog titles if blogs prop is provided */}
                    {blogs && blogs.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Blog Posts</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {blogs.slice(0, 4).map(blog => (
                                    <li key={blog.id} className="text-left text-gray-700 text-sm truncate">{blog.title}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div className="text-center">
                            <img src="/storage/images/icons/creative.svg" alt="Creative" className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">Creative Design</h3>
                        </div>
                        <div className="text-center">
                            <img src="/storage/images/icons/quality.svg" alt="Quality" className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">Quality Guarantee</h3>
                        </div>
                        <div className="text-center">
                            <img src="/storage/images/icons/delivery.svg" alt="Delivery" className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
                        </div>
                        <div className="text-center">
                            <img src="/storage/images/icons/support.svg" alt="Support" className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;