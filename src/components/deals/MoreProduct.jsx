import React from 'react'
import sofa from '../../static/sofa.png'
export default function MoreProduct() {
  return (
<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 '>
  <a href="#" className="flex   mx-5 items-center bg-slate-200 border
   border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700
    dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between p-4 leading-normal w-full">
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-white">Wooden Sofa</h5>
      <p className='text-2xl text-gray-600'>1-year warranty</p>
      <p className='text-blue-900 my-5 text-xl font-bold'>$279.99</p>
      
    </div>
    <img className="object-cover h-28 w-28 sm:w-44 mx-5 md:w-16 lg:w-56 xl:w-full 2xl:w-full
     md:h-28 lg:h-28 xl:h-56 2xl:h-80" src={sofa} alt=""/>
  </a>
  <a href="#" className="flex   mx-5 items-center bg-slate-200 border
   border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700
    dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between p-4 leading-normal w-full">
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-white">Wooden Sofa</h5>
      <p className='text-2xl text-gray-600'>1-year warranty</p>
      <p className='text-blue-900 my-5 text-xl font-bold'>$279.99</p>
      
    </div>
    <img className="object-cover h-28 w-28 sm:w-44 mx-5 md:w-16 lg:w-56 xl:w-full 2xl:w-full
     md:h-28 lg:h-28 xl:h-56 2xl:h-80" src={sofa} alt=""/>
  </a>
</div>


  )
}
