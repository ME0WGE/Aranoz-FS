import React, { useState } from 'react';

const BestSellers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('best');
    
    const products = [
        {
            id: 1,
            name: "Modern Chair",
            price: "$150.00",
            image: "product_1.png",
            rating: 5,
            color: "bg-white"
        },
        {
            id: 2,
            name: "Modern Chair",
            price: "$150.00",
            image: "product_2.png",
            rating: 4,
            color: "bg-[#F0F8F0]"
        },
        {
            id: 3,
            name: "Modern Chair",
            price: "$150.00",
            image: "product_3.png",
            rating: 5,
            color: "bg-[#EEF1FF]"
        },
        {
            id: 4,
            name: "Modern Chair",
            price: "$150.00",
            image: "product_4.png",
            rating: 4,
            color: "bg-[#FFF3EA]"
        }
    ];

    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(products.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
                    <div className="flex items-center space-x-8">
                        <button 
                            onClick={() => setActiveTab('best')}
                            className={`text-lg font-medium transition-colors duration-300 ${
                                activeTab === 'best' 
                                    ? 'text-[#FF3368]' 
                                    : 'text-gray-600 hover:text-[#FF3368]'
                            }`}
                        >
                            Best
                        </button>
                        <button 
                            onClick={() => setActiveTab('featured')}
                            className={`text-lg font-medium transition-colors duration-300 ${
                                activeTab === 'featured' 
                                    ? 'text-[#FF3368]' 
                                    : 'text-gray-600 hover:text-[#FF3368]'
                            }`}
                        >
                            Featured
                        </button>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-all duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`
                            }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
                                >
                                    <div className="group">
                                        <div className={`relative aspect-square rounded-lg overflow-hidden ${product.color}`}>
                                            <img
                                                src={`/storage/images/product/${product.image}`}
                                                alt={product.name}
                                                className="w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4">
                                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#FF3368] hover:text-white">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                        </svg>
                                                    </button>
                                                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#FF3368] hover:text-white">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 text-center">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center justify-center space-x-4">
                                                <p className="text-[#FF3368] font-medium text-lg">{product.price}</p>
                                                <div className="flex">
                                                    {[...Array(product.rating)].map((_, i) => (
                                                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FF3368] hover:text-white transition-all duration-300 group z-10"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FF3368] hover:text-white transition-all duration-300 group z-10"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;