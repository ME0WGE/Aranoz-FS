


import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Wood & Cloth Sofa",
    description:
      "Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  image: "/storage/images/banner/banner_img.png",
    number: "01"
  },
  {
    id: 2,
    title: "Modern Furniture",
    description:
      "Quality comfort for your home with modern designs and premium materials.",
  image: "/storage/images/banner/TemplateB.png",
    number: "02"
  },
  {
    id: 3,
    title: "Elegant Ottoman",
    description:
      "Discover our elegant ottoman collection for a touch of luxury in your living room.",
  image: "/storage/images/banner/banner_img.png",
    number: "03"
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="banner_part bg-[#EAF6FF]">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="relative min-h-[600px] flex items-center">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              } flex items-center`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                <div className="space-y-7 z-10 lg:pl-8">
                  <span className="text-[120px] font-bold text-[#EAF6FF] absolute left-0 top-0 lg:static lg:block hidden lg:text-[120px] lg:font-bold lg:text-[#EAF6FF] lg:leading-none select-none" style={{zIndex:1}}>{slide.number}</span>
                  <h1 className="text-[56px] font-bold text-gray-900 leading-[1.1] mb-6 relative z-20">{slide.title}</h1>
                  <p className="text-gray-600 text-lg max-w-lg font-light leading-relaxed mb-8 relative z-20">
                    {slide.description}
                  </p>
                  <button className="bg-[#FF3368] text-white px-12 py-4 rounded hover:bg-[#ff1f5a] transition-colors duration-300 uppercase text-sm tracking-wide font-medium relative z-20">
                    Buy Now
                  </button>
                </div>
                <div className="relative flex justify-center items-center">
                  <img src={slide.image} alt={slide.title} className="w-full h-auto max-w-[500px] ml-auto relative z-20" />
                </div>
              </div>
            </div>
          ))}
          {/* Navigation arrows */}
          {/* Navigation Next | Previous en bas à droite */}
          <div className="absolute bottom-8 right-8 z-30">
            <div className="bg-white rounded shadow flex items-center px-8 py-4 space-x-8">
              <button
                onClick={nextSlide}
                className="text-gray-900 font-semibold text-base hover:text-[#FF3368] focus:outline-none"
                aria-label="Next slide"
              >
                Next
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={prevSlide}
                className="text-gray-900 font-semibold text-base hover:text-[#FF3368] focus:outline-none"
                aria-label="Previous slide"
              >
                Previous
              </button>
            </div>
          </div>
          {/* Slide counter */}
          <div className="absolute top-8 right-8 flex flex-col items-end z-20">
            <span className="text-[60px] font-bold text-[#C2D8EA] select-none">{slides[current].number}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;