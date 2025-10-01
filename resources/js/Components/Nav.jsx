import { Link } from '@inertiajs/react';
import { FaChevronDown, FaUser } from 'react-icons/fa';
import Dropdown from './Dropdown';

import { FaShoppingCart } from 'react-icons/fa';
export default function Nav({ auth, cartCount }) {
    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img src="/storage/images/logo.png" alt="Aranoz Logo" className="h-8 w-auto" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {/* Home Link */}
                            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                                Home
                            </Link>

                            {/* Shop Dropdown */}
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                                        Shop
                                        <FaChevronDown className="ml-1 h-3 w-3" />
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href="/products">Categories</Dropdown.Link>
                                    <Dropdown.Link href="/orders/track">Track your order</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>

                            {/* Blog Dropdown */}
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                                        Blog
                                        <FaChevronDown className="ml-1 h-3 w-3" />
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href="/blog">All Posts</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>

                            {/* Contact Link */}
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                Contact
                            </Link>

                            {/* Admin Dashboard Link */}
                            {auth.user && auth.user.role === 'admin' && (
                                <Link
                                    href="/admin/dashboard"
                                    className="text-pink-600 hover:text-pink-800 px-3 py-2 text-sm font-bold border border-pink-200 rounded"
                                >
                                    Admin
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Cart icon (if user is logged in) */}
                    {auth.user && (
                        <Link href="/cart" className="relative mr-4">
                            <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    )}
                    {/* User Dropdown */}
                    <div className="flex items-center">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center text-gray-700 hover:text-gray-900 p-2">
                                    <FaUser className="h-5 w-5" />
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                {auth.user ? (
                                    <>
                                        <Dropdown.Link href="/orders">Mes commandes</Dropdown.Link>
                                        <Dropdown.Link href="/logout" method="post" as="button">
                                            Se déconnecter
                                        </Dropdown.Link>
                                    </>
                                ) : (
                                    <>
                                        <Dropdown.Link href="/login">Login</Dropdown.Link>
                                        <Dropdown.Link href="/register">Register</Dropdown.Link>
                                    </>
                                )}
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/blog"
                        className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                    >
                        Contact
                    </Link>

                    {/* Mobile user actions */}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <FaUser className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">
                                {auth.user ? 'Mon compte' : 'Connexion'}
                            </span>
                        </div>
                        {auth.user ? (
                            <>
                                <Link
                                    href="/orders"
                                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                                >
                                    Mes commandes
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="text-red-600 hover:text-red-800 block px-3 py-2 text-base font-medium"
                                >
                                    Se déconnecter
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
