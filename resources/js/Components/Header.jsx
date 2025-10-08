import { Link, usePage } from '@inertiajs/react';
import { FaChevronDown, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Dropdown from './Dropdown';

export default function Header({ auth, cartCount }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage();
    
    // Détermine la couleur de la navigation en fonction de la page
    // Toutes les pages avec bannière utilisent #EAF6FA
    const getNavBgColor = () => {
        if (url === '/' || url.startsWith('/products') || url.startsWith('/blog') || url.startsWith('/contact') || url.startsWith('/checkout')) {
            return 'bg-[#EAF6FA]';
        } else {
            // Autres pages sans bannière
            return 'bg-white';
        }
    };
    
    const navBgColor = getNavBgColor();

    return (
        <header className={`${navBgColor} shadow-sm`}>
            {/* Main Navigation */}
            <nav className={navBgColor}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <img src="/storage/images/logo.png" alt="Aranoz Logo" className="h-10 w-auto" />
                            </Link>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:block">
                            <div className="flex items-center space-x-10">
                                {/* Home Link */}
                                <Link 
                                    href="/" 
                                    className="text-gray-900 hover:text-[#FF3368] px-3 py-2 text-base font-medium transition-colors duration-300"
                                >
                                    Home
                                </Link>

                                {/* Shop Dropdown */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-900 hover:text-[#FF3368] px-3 py-2 text-base font-medium flex items-center transition-colors duration-300">
                                            Shop
                                            <FaChevronDown className="ml-1 h-3 w-3" />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href="/products">Categories</Dropdown.Link>
                                        <Dropdown.Link href={route('track.form')}>Track your order</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>

                               

                                {/* Blog Dropdown */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-900 hover:text-[#FF3368] px-3 py-2 text-base font-medium flex items-center transition-colors duration-300">
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
                                    className="text-gray-900 hover:text-[#FF3368] px-3 py-2 text-base font-medium transition-colors duration-300"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4">
                            {/* Cart */}
                            {auth.user && (
                                <Link href="/cart" className="relative p-2 text-gray-900 hover:text-[#FF3368] transition-colors duration-300">
                                    <FaShoppingCart className="h-6 w-6" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-[#FF3368] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>
                            )}

                            {/* User Dropdown */}
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="flex items-center p-2 text-gray-900 hover:text-[#FF3368] transition-colors duration-300">
                                        <FaUser className="h-6 w-6" />
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    {auth.user ? (
                                        <>
                                            <Dropdown.Link href="/profile">Profile</Dropdown.Link>
                                            <Dropdown.Link href={route('orders.index')}>My Orders</Dropdown.Link>
                                            <Dropdown.Link href={route('track.form')}>Track Order</Dropdown.Link>
                                            {auth.user.role && auth.user.role.name === 'admin' && (
                                                <Dropdown.Link href="/admin">Admin Dashboard</Dropdown.Link>
                                            )}
                                            <Dropdown.Link href="/logout" method="post" as="button" className="text-red-600">
                                                Logout
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

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2 text-gray-900 hover:text-[#FF3368] transition-colors duration-300"
                            >
                                {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className={`lg:hidden ${navBgColor} border-t border-gray-200`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link 
                                href="/" 
                                className="text-gray-900 hover:text-[#FF3368] block px-3 py-2 text-base font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className="text-gray-900 hover:text-[#FF3368] block px-3 py-2 text-base font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Shop
                            </Link>
                            <Link
                                href="/blog"
                                className="text-gray-900 hover:text-[#FF3368] block px-3 py-2 text-base font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-900 hover:text-[#FF3368] block px-3 py-2 text-base font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
