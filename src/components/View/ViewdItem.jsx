import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import brands from '../../data/Brands';

export default function ViewdItem() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5); 

  const totalCards = brands.length;

  const goToNextBrand = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalCards);
  };

  const goToPrevBrand = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <>
      <div className="relative my-5 bg-slate-200 flex justify-center overflow-hidden rounded-xl">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
          onClick={goToPrevBrand}
        >
          {'<'}
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-2 overflow-x-auto">
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 transform ${
              index >= currentIndex && index < currentIndex + visibleCards ? '' : 'hidden'
            }`}>
              <a href="#">
                <img className="p-8 rounded-t-lg h-56 w-80" src={brand.img} alt="product image" />
              </a>
              <div className="px-5 pb-5 flex flex-col justify-center items-center">
    <div className="flex flex-col justify-between p-4 leading-normal w-full text-center">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand.title}</h5>
      <div className="mb-3 font-normal text-amber-400 justify-center items-center mx-2 flex"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
      <p className="text-black mx-2">4.5(121)</p>
      <p className="text-black mx-2">121(Review)</p>
      <p>$<strong className="text-xl">6</strong> <span className="line-through">$16</span> <span>-50%</span></p>
    </div>
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
