import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

const WeeklySale = ({ saleProduct, saleEndDate, auth }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Use the end date from backend (fixed date that doesn't change on refresh)
        const endDate = new Date(saleEndDate);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [saleEndDate]);

    const handleBookNow = () => {
        if (!auth?.user) {
            alert('Vous devez être connecté pour réserver');
            router.visit('/login');
            return;
        }

        router.post('/promo-request', {}, {
            preserveScroll: true,
            onSuccess: () => {
                alert('Votre demande a été enregistrée ! Vous recevrez bientôt votre code promo par email.');
            },
            onError: () => {
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        });
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1320px] mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-[#E8F6FF]">
                            <img
                                src={saleProduct?.picture_main}
                                alt={saleProduct?.name}
                                className="w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                            />
                        </div>
                    </div>
                    
                    <div className="lg:pl-8">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-12">
                            Weekly Sale on<br />{saleProduct?.discount?.percentage ? `${saleProduct.discount.percentage}% Off All Products` : '60% Off All Products'}
                        </h2>
                        
                        <div className="grid grid-cols-4 gap-6 mb-12">
                            <div className="text-center">
                                <div className="bg-white rounded-lg px-6 py-5 shadow-lg mb-2">
                                    <span className="text-4xl font-bold text-[#FF3368]">{timeLeft.days}</span>
                                </div>
                                <p className="text-gray-600 font-medium">Days</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white rounded-lg px-6 py-5 shadow-lg mb-2">
                                    <span className="text-4xl font-bold text-[#FF3368]">{timeLeft.hours}</span>
                                </div>
                                <p className="text-gray-600 font-medium">Hours</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white rounded-lg px-6 py-5 shadow-lg mb-2">
                                    <span className="text-4xl font-bold text-[#FF3368]">{timeLeft.minutes}</span>
                                </div>
                                <p className="text-gray-600 font-medium">Minutes</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-white rounded-lg px-6 py-5 shadow-lg mb-2">
                                    <span className="text-4xl font-bold text-[#FF3368]">{timeLeft.seconds}</span>
                                </div>
                                <p className="text-gray-600 font-medium">Seconds</p>
                            </div>
                        </div>

                        <button 
                            onClick={handleBookNow}
                            className="bg-[#FF3368] text-white px-12 py-4 rounded hover:bg-[#ff1f5a] transition-colors duration-300 text-sm uppercase tracking-wide font-medium"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeeklySale;