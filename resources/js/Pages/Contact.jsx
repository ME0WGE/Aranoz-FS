import React from "react";

export default function Contact() {
    return (
        <div className="bg-[#eaf6fa] min-h-screen">
            {/* Header */}
            <header className="py-8 px-4 flex items-center justify-between max-w-6xl mx-auto">
                <div className="font-bold text-2xl tracking-tight">Aranoz</div>
                <nav>
                    <ul className="flex gap-8 text-gray-700 font-medium">
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/pages">Pages</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact" className="text-black font-bold">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex gap-4 items-center">
                    <button><i className="ti-search" /></button>
                    <button><i className="ti-heart" /></button>
                    <button><i className="fas fa-cart-plus" /></button>
                </div>
            </header>

            {/* Banner */}
            <section className="flex items-center justify-between max-w-6xl mx-auto px-4 py-12">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
                    <p className="text-gray-500">Home <span className="mx-1">-</span> contact us</p>
                </div>
                <img src="/storage/images/banner/banner_img.png" alt="Contact Chair" className="w-48 h-48 object-contain" />
            </section>

            {/* Map Error Box */}
            <section className="flex justify-center mb-12">
                <div className="bg-gray-100 rounded-lg shadow p-12 w-full max-w-3xl flex flex-col items-center">
                    <div className="text-4xl mb-4">⚠️</div>
                    <div className="text-lg font-semibold mb-2">Petit problème... Une erreur s'est produite</div>
                    <div className="text-gray-500 text-center text-sm">Google Maps n'a pas chargé correctement sur cette page. Pour plus d'informations techniques sur cette erreur, veuillez consulter la console JavaScript.</div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <form className="space-y-6">
                        <textarea className="w-full border rounded-lg p-4" rows={6} placeholder="Enter Message" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input className="border rounded-lg p-4" type="text" placeholder="Enter your name" />
                            <input className="border rounded-lg p-4" type="email" placeholder="Enter email address" />
                        </div>
                        <input className="border rounded-lg p-4 w-full" type="text" placeholder="Enter Subject" />
                        <button type="submit" className="bg-pink-500 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-pink-600 transition">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <span className="text-2xl"><i className="ti-home" /></span>
                        <div>
                            <div className="font-bold">Buttonwood, California.</div>
                            <div className="text-gray-500">Rosemead, CA 91770</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-2xl"><i className="ti-tablet" /></span>
                        <div>
                            <div className="font-bold">00 (440) 9865 562</div>
                            <div className="text-gray-500">Mon to Fri 9am to 6pm</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-2xl"><i className="ti-email" /></span>
                        <div>
                            <div className="font-bold">support@colorlib.com</div>
                            <div className="text-gray-500">Send us your query anytime!</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t py-12 mt-8">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
                    <div>
                        <h4 className="font-bold mb-4">Top Products</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Managed Website</li>
                            <li>Manage Reputation</li>
                            <li>Power Tools</li>
                            <li>Marketing Service</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Jobs</li>
                            <li>Brand Assets</li>
                            <li>Investor Relations</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Features</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Jobs</li>
                            <li>Brand Assets</li>
                            <li>Investor Relations</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>Guides</li>
                            <li>Research</li>
                            <li>Experts</li>
                            <li>Agencies</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-2">Heaven fruitful doesn't over lesser in days. Appear creeping</p>
                        <form className="flex gap-2">
                            <input type="email" className="border rounded-lg p-2 flex-1" placeholder="Email Address" />
                            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-lg font-bold">subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t pt-6">
                    <div className="text-gray-500 text-sm">Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <span className="text-pink-500">♥</span> by Colorlib</div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-blue-600"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="text-gray-500 hover:text-blue-400"><i className="fab fa-twitter" /></a>
                        <a href="#" className="text-gray-500 hover:text-green-600"><i className="fas fa-globe" /></a>
                        <a href="#" className="text-gray-500 hover:text-blue-700"><i className="fab fa-behance" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
