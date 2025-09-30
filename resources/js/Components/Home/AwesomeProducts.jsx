import React, { useState } from 'react';

const AwesomeProducts = ({ products }) => {
    const [activeTab, setActiveTab] = useState('best');
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
                            onClick={next => setActiveTab('best')}
                            className={`text-base font-semibold transition-colors duration-300 ${
                                activeTab === 'best' 
                                    ? 'text-gray-900' 
                                    : 'text-gray-400 hover:text-gray-900'
                            }`}
                        >
                            Next
                        </button>
                        <span className="text-gray-300">|</span>
                        <button 
                            onClick={prev => setActiveTab('featured')}
                            className={`text-base font-semibold transition-colors duration-300 ${
                                activeTab === 'featured' 
                                    ? 'text-gray-900' 
                                    : 'text-gray-400 hover:text-gray-900'
                            }`}
                        >
                            Previous
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    {products && products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow flex flex-col justify-between p-8 min-h-[280px]">
                            <div className="flex justify-center items-end flex-1">
                                <img
                                    src={product.picture_main}
                                    alt={product.name}
                                    className="max-h-[140px] object-contain"
                                />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-base font-bold text-gray-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-700 font-normal text-base">€{(product.price/100).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwesomeProducts;