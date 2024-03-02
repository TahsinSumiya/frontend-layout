import React, { useState } from 'react';
import brands from '../../data/Brands'
import './css/Brands.css'

export default function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(8); 

  const totalCards = brands.length;


  const goToNextBrand = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalCards);
  };
  

  const goToPrevBrand = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <>
      <div className="relative my-5  flex justify-center overflow-hidden rounded-xl">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
          onClick={goToPrevBrand}
        >
          {'<'}
        </button>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 my-2 overflow-x-auto'>
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className={`mx-2 transition-transform duration-300 transform ${
                index >= currentIndex && index < currentIndex + visibleCards ? '' : 'hidden'
              }`}
            >
              <div className="flex flex-col items-center">
                <img className="w-16 h-16 rounded-full" src={brand.img} alt="Brand" />
                <p className="mt-2">{brand.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
          onClick={goToNextBrand}
        >
          {'>'}
        </button>
      </div>
    </>
  );
}
