import React, { useState } from 'react';
import { router } from '@inertiajs/react';

const AwesomeProducts = ({ products }) => {
    const [activeTab, setActiveTab] = useState('best');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;
    
    const totalPages = Math.ceil(products?.length / itemsPerPage) || 1;
    const currentProducts = products?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) || [];
    
    const nextPage = () => setCurrentPage(prev => (prev + 1) % totalPages);
    const prevPage = () => setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    
    const handleAddToCart = (productId) => {
        router.post('/cart/add', { 
            product_id: productId, 
            quantity: 1 
        }, {
            preserveScroll: true,
            onSuccess: () => {
                // Optionally show a success message
                console.log('Product added to cart!');
            }
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1100px] mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center space-x-8">
                        <h2 className="text-4xl font-bold text-gray-900">Awesome</h2>
                        <button className="ml-8 text-lg font-bold text-gray-400 cursor-default">Shop</button>
                    </div>
                    <div className="flex items-center space-x-8">
                        <button 
                            onClick={nextPage}
                            className="text-base font-semibold transition-colors duration-300 text-gray-400 hover:text-gray-900"
                        >
                            Next
                        </button>
                        <span className="text-gray-300">|</span>
                        <button 
                            onClick={prevPage}
                            className="text-base font-semibold transition-colors duration-300 text-gray-400 hover:text-gray-900"
                        >
                            Previous
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow flex flex-col justify-between p-8 min-h-[280px] hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-center items-end flex-1">
                                <img
                                    src={product.picture_main}
                                    alt={product.name}
                                    className="max-h-[140px] object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-base font-bold text-gray-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-700 font-normal text-base mb-4">€{(product.price/100).toFixed(2)}</p>
                                <button 
                                    onClick={() => handleAddToCart(product.id)}
                                    className="bg-[#FF3368] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#ff1f5a] transition-colors duration-300 uppercase tracking-wide"
                                >
                                    + Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwesomeProducts;