import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { BsBullseye } from 'react-icons/bs';
import { CgScan } from 'react-icons/cg';
import { FaShoppingCart } from 'react-icons/fa';


export default function Products({img,title}) {
  return (

   

<a href="#"  className="flex flex-col mx-2 sm:mx-5 mb-5 items-center bg-grey-400 border
 border-gray-200 rounded-lg shadow md:flex-row w-auto
  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full mx-2 my-5 rounded-t-lg h-80 md:w-80 md:rounded-none md:rounded-l-lg" src={img} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <div className="mb-3 font-normal text-amber-400 mx-2 flex">
              <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
              <p className='text-black mx-2'>4.5(121)</p>
            </div>
            <p> $<strong className='text-xl'>6</strong> <span className='line-through'>$16</span> <span>-50%</span></p>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectLorem ipsum dolor sit amet consect...</p>
            <div className='flex flex-wrap my-2 bg-slate-200 justify-between px-7'>
              <button className='flex my-2 text-slate-400 text-lg'><BsBullseye className='mt-2' />preview</button>
              <button className='flex my-2 text-slate-400 text-lg'><CgScan className='mt-2' />compare</button>
            </div>
            <button className='flex items-center my-3 justify-center bg-blue-900 p-3 text-xl text-white'>
              <FaShoppingCart className="mr-2" /> 
              add to cart
            </button>
          </div>
        </a>



  );
}
