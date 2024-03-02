import React from 'react'
import { useState } from 'react';
import brands from '../../data/Brands';
export default function TopBrands() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(8); 
  
    const goToNextBrand = () => {
      setCurrentIndex(prevIndex => Math.min(prevIndex + 1, brands.length - visibleCards));
    };
  
   
    const goToPrevBrand = () => {
      setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };
  return (
    <>
<div className="relative my-5  flex justify-center overflow-hidden rounded-xl">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
          onClick={goToPrevBrand}
          disabled={currentIndex === 0}
        >
          {'<'}
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-5 lg:grid-cols-8 gap-4 my-2 overflow-x-auto">
          {brands.slice(currentIndex, currentIndex + visibleCards).map((brand, index) => (
              <div className="flex flex-col   items-center">
              <img className="w-56 h-44 " src={brand.img} alt="Brand" />
              <p className="mt-2">{brand.title}</p>
            </div>
       
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
          onClick={goToNextBrand}
          disabled={currentIndex + visibleCards >= brands.length}
        >
          {'>'}
        </button>
      </div>
    </>
  )
}
