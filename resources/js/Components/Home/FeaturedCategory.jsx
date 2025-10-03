
import React from "react";

const FeaturedCategory = ({ categories }) => (
    <section className="feature_part py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
            <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">Featured Category</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                {categories && categories.map((category, idx) => (
                    <div key={category.id} className="relative bg-white rounded-lg shadow flex flex-col justify-between p-8 min-h-[340px]">
                        <div>
                            <p className="text-xs text-gray-700 mb-2">Premium Quality</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                        </div>
                        <div className="flex justify-center items-end flex-1">
                            <img
                                src={`/storage/images/feature/large/${category.image.split('/').pop()}`}
                                alt={category.name}
                                className="max-h-[180px] object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FeaturedCategory;