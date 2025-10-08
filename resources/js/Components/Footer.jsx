import { Link } from '@inertiajs/react';
import { FaFacebookF, FaTwitter, FaGlobe, FaBehance, FaHeart } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-800">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Top Products Section */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900">Top Products</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Managed Website
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Manage Reputation
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Power Tools
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Marketing Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Brand Assets
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Investor Relations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900">Features</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Brand Assets
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Investor Relations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Resources Section */}
                    <div className="sm:col-span-1 lg:col-span-1">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900">Resources</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Research
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Experts
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition duration-300 text-sm"
                                    >
                                        Agencies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-900">Newsletter</h4>
                            <p className="text-gray-600 text-sm">
                                Heaven fruitful doesn't over lesser in days. Appear creeping
                            </p>
                            <form className="space-y-3">
                                <div className="flex">
                                    <input
                                        type="email"
                                        name="email"
                                        id="newsletter-form-email"
                                        placeholder="Email address"
                                        className="flex-1 px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FF3368] focus:border-[#FF3368]"
                                        onFocus={e => (e.target.placeholder = '')}
                                        onBlur={e => (e.target.placeholder = 'Email address')}
                                    />
                                    <button
                                        type="submit"
                                        name="submit"
                                        id="newsletter-submit"
                                        className="bg-[#FF3368] hover:bg-[#ff1f5a] px-4 py-2 text-sm font-medium text-white rounded-r-md transition duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        <div className="text-gray-500 text-sm">
                            <p>
                                Copyright &copy; All rights reserved | made with{' '}
                                <FaHeart className="inline text-red-500" /> by Kamil Baldyga
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#FF3368] transition duration-300">
                                <FaFacebookF className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#FF3368] transition duration-300">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#FF3368] transition duration-300">
                                <FaGlobe className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#FF3368] transition duration-300">
                                <FaBehance className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
