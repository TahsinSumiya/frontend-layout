import React from 'react'
import { FaRegStar } from 'react-icons/fa';
export default function Discover({img,title}) {
  return (
    <>
        <div  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className=" rounded-t-lg h-56 w-full" src={img} alt="product image" />
              </a>
              <div className="px-5 pb-5">
                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                  <div className="mb-3 font-normal text-amber-400 mx-2 flex"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
                  <p className="text-black mx-2">4.5(121)</p>
                  <p className="text-black mx-2">121(Review)</p>
                  <p>$<strong className="text-xl">6</strong> <span className="line-through">$16</span> <span>-50%</span></p>
                </div>
              </div>
            </div>
    </>
  )
}
