import React from "react";

const Footer = () => (
  <footer className="footer_part bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <div className="single_footer_part">
          <h4 className="text-lg font-bold mb-4">Top Products</h4>
          <ul className="list-none space-y-2">
            <li><a href="#" className="hover:text-pink-500">Furniture</a></li>
            <li><a href="#" className="hover:text-pink-500">Sofa</a></li>
            <li><a href="#" className="hover:text-pink-500">Chair</a></li>
            <li><a href="#" className="hover:text-pink-500">Table</a></li>
          </ul>
        </div>
        <div className="single_footer_part">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="list-none space-y-2">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">Shop</a></li>
            <li><a href="#" className="hover:text-pink-500">About</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
          </ul>
        </div>
        <div className="single_footer_part">
          <h4 className="text-lg font-bold mb-4">Features</h4>
          <ul className="list-none space-y-2">
            <li><a href="#" className="hover:text-pink-500">Creative Design</a></li>
            <li><a href="#" className="hover:text-pink-500">Quality Guarantee</a></li>
            <li><a href="#" className="hover:text-pink-500">Fast Delivery</a></li>
            <li><a href="#" className="hover:text-pink-500">24/7 Support</a></li>
          </ul>
        </div>
        <div className="single_footer_part">
          <h4 className="text-lg font-bold mb-4">Resources</h4>
          <ul className="list-none space-y-2">
            <li><a href="#" className="hover:text-pink-500">Blog</a></li>
            <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-500">Terms</a></li>
          </ul>
        </div>
        <div className="single_footer_part">
          <h4 className="text-lg font-bold mb-4">Newsletter</h4>
          <p className="mb-4 text-gray-300">Heaven fruitful doesn't over lesser in days. Appear creeping</p>
          <form className="flex">
            <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none" />
            <button type="submit" className="bg-pink-500 px-4 py-2 rounded-r text-white font-bold hover:bg-pink-600">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="copyright_text text-gray-400 text-sm mb-4 lg:mb-0">
          &copy; {new Date().getFullYear()} All rights reserved | This template is made with <span className="text-pink-500">♥</span> by <a href="https://colorlib.com" target="_blank" className="underline hover:text-pink-500">Colorlib</a>
        </div>
        <div className="footer_icon social_icon flex space-x-4">
          <a href="#" className="single_social_icon text-gray-400 hover:text-pink-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="single_social_icon text-gray-400 hover:text-pink-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="single_social_icon text-gray-400 hover:text-pink-500"><i className="fas fa-globe"></i></a>
          <a href="#" className="single_social_icon text-gray-400 hover:text-pink-500"><i className="fab fa-behance"></i></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
