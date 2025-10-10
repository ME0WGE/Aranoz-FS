import React, { useState, useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';

const BestSellers = ({ products }) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const scrollRef = useRef(null);
    const animationRef = useRef(null);
    
    const handleAddToCart = (productId) => {
        router.post('/cart/add', { 
            product_id: productId, 
            quantity: 1 
        }, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                console.log('Product added to cart!');
            }
        });
    };
    
    const defaultProducts = [
        {
            id: 1,
            name: "Quartz Belt Watch",
            price: "€150.00",
            image: "/storage/images/product/product_1.png",
            color: "bg-white"
        },
        {
            id: 2,
            name: "Quartz Belt Watch",
            price: "€150.00",
            image: "/storage/images/product/product_2.png",
            color: "bg-[#F0F8F0]"
        },
        {
            id: 3,
            name: "Quartz Belt Watch",
            price: "€150.00",
            image: "/storage/images/product/product_3.png",
            color: "bg-[#EEF1FF]"
        },
        {
            id: 4,
            name: "Quartz Belt Watch",
            price: "€150.00",
            image: "/storage/images/product/product_4.png",
            color: "bg-[#FFF3EA]"
        }
    ];
    
    const displayProducts = products && products.length > 0 ? products.map(p => ({
        id: p.id,
        name: p.name,
        price: `€${(p.price/100).toFixed(2)}`,
        image: p.picture_main,
        color: "bg-white"
    })) : defaultProducts;

    // Duplicate products for infinite scroll effect
    const infiniteProducts = [...displayProducts, ...displayProducts, ...displayProducts];

    const productWidth = 288; // 280px width + 8px gap

    const handlePrev = () => {
        setCurrentPosition(prev => prev - productWidth);
    };

    const handleNext = () => {
        setCurrentPosition(prev => prev + productWidth);
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        // Auto-scroll logic
        const autoScroll = () => {
            setCurrentPosition(prev => {
                const newPosition = prev + 1;
                
                // Reset to beginning when we've scrolled past the first set
                if (newPosition >= displayProducts.length * productWidth) {
                    return 0;
                }
                
                return newPosition;
            });
        };

        const intervalId = setInterval(autoScroll, 30); // Smooth 30ms interval

        return () => clearInterval(intervalId);
    }, [displayProducts.length, productWidth]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.style.transform = `translateX(-${currentPosition}px)`;
        }
    }, [currentPosition]);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
                </div>
                
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            ref={scrollRef}
                            className="flex gap-8"
                            style={{ willChange: 'transform', transition: 'transform 0.3s ease-out' }}
                        >
                            {infiniteProducts.map((product, index) => (
                                <div
                                    key={`${product.id}-${index}`}
                                    className="flex-none w-[280px]"
                                >
                                    <div className="group">
                                        <div className={`relative aspect-square rounded-lg overflow-hidden ${product.color}`}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <button 
                                                        onClick={() => handleAddToCart(product.id)}
                                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#FF3368] hover:text-white"
                                                    >
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
                                            <p className="text-[#FF3368] font-medium text-lg">{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FF3368] hover:text-white transition-all duration-300 z-10"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#FF3368] hover:text-white transition-all duration-300 z-10"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;