import { Link } from '@inertiajs/react';
import { FaChevronDown, FaUser } from 'react-icons/fa';
import Dropdown from '@/Components/Dropdown';

export default function NavDash({ auth }) {
    return (
        <>
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
                                {/* Admin */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                                            Admin
                                            <FaChevronDown className="ml-1 h-3 w-3" />
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href="/admin">Dashboard</Dropdown.Link>
                                        <Dropdown.Link href="/admin/users">Users</Dropdown.Link>
                                        <Dropdown.Link href="/admin/orders">Orders</Dropdown.Link>
                                        <Dropdown.Link href="/admin/products">Products</Dropdown.Link>
                                        <Dropdown.Link href="/admin/blog">Blog</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                {/* Users */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                                            Users
                                            <FaChevronDown className="ml-1 h-3 w-3" />
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href="/admin">Dashboard</Dropdown.Link>
                                        <Dropdown.Link href="/admin/users">Users</Dropdown.Link>
                                        <Dropdown.Link href="/admin/orders">Orders</Dropdown.Link>
                                        <Dropdown.Link href="/admin/products">Products</Dropdown.Link>
                                        <Dropdown.Link href="/admin/blog">Blog</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                {/* Orders */}
                                <Link
                                    href="/admin"
                                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                                >
                                    Orders
                                </Link>
                                {/* Blog */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                                            Blog
                                            <FaChevronDown className="ml-1 h-3 w-3" />
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href="/admin">Dashboard</Dropdown.Link>
                                        <Dropdown.Link href="/admin/users">Users</Dropdown.Link>
                                        <Dropdown.Link href="/admin/orders">Orders</Dropdown.Link>
                                        <Dropdown.Link href="/admin/products">Products</Dropdown.Link>
                                        <Dropdown.Link href="/admin/blog">Blog</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                {/* Products */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                                            Products
                                            <FaChevronDown className="ml-1 h-3 w-3" />
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href="/admin">Dashboard</Dropdown.Link>
                                        <Dropdown.Link href="/admin/users">Users</Dropdown.Link>
                                        <Dropdown.Link href="/admin/orders">Orders</Dropdown.Link>
                                        <Dropdown.Link href="/admin/products">Products</Dropdown.Link>
                                        <Dropdown.Link href="/admin/blog">Blog</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                {/* Mailbox */}
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                                            Mailbox
                                            <FaChevronDown className="ml-1 h-3 w-3" />
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href="/admin">Dashboard</Dropdown.Link>
                                        <Dropdown.Link href="/admin/users">Users</Dropdown.Link>
                                        <Dropdown.Link href="/admin/orders">Orders</Dropdown.Link>
                                        <Dropdown.Link href="/admin/products">Products</Dropdown.Link>
                                        <Dropdown.Link href="/admin/blog">Blog</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

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
                        {/* Admin */}
                        <div className="space-y-1">
                            <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider px-3 py-2">
                                Admin
                            </div>
                            <Link
                                href="/admin"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/admin/users"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Users
                            </Link>
                            <Link
                                href="/admin/orders"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Orders
                            </Link>
                            <Link
                                href="/admin/products"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Products
                            </Link>
                            <Link
                                href="/admin/blog"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Blog
                            </Link>
                        </div>

                        {/* Mailbox */}
                        <div className="space-y-1">
                        <Link
                                href="/admin/mailbox"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Mailbox
                            </Link>
                            <Link
                                href="/admin"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/admin/users"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Users
                            </Link>
                            <Link
                                href="/admin/orders"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Orders
                            </Link>
                            <Link
                                href="/admin/products"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Products
                            </Link>
                            <Link
                                href="/admin/blog"
                                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                            >
                                Blog
                            </Link>
                        </div>

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
        </>
    );
}
