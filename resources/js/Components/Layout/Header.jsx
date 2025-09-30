import React from "react";

// Pour les icônes FontAwesome et Themify, on utilisera <i> ou des SVG inline
// Les interactions (menu burger, recherche, panier) seront ajoutées plus tard

const Header = () => (
  <header className="bg-white shadow main_menu home_menu">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="navbar-brand">
          <img src="/storage/images/logo.png" alt="logo" className="h-10" />
        </a>
        {/* Menu burger (mobile) */}
        <button className="lg:hidden p-2 rounded focus:outline-none" aria-label="Toggle navigation">
          <span className="menu_icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        {/* Navigation links */}
        <nav className="hidden lg:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Shop</a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Blog</a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Contact</a>
        </nav>
        {/* Icons */}
        <div className="flex items-center space-x-4 hearer_icon">
          <a id="search_1" href="#" className="text-gray-700 hover:text-pink-500">
            <i className="ti-search"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-500">
            <i className="ti-heart"></i>
          </a>
          <div className="relative">
            <button className="text-gray-700 hover:text-pink-500">
              <i className="ti-shopping-cart"></i>
            </button>
            {/* Dropdown panier à ajouter plus tard */}
          </div>
        </div>
      </div>
      {/* Barre de recherche (affichée en overlay) */}
      {/* ... à implémenter plus tard ... */}
    </div>
  </header>
);

export default Header;
