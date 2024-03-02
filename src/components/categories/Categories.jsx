import React from 'react'
import Categoriesdata from '../../data/Categories'
export default function Categories() {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-5  '>
      {Categoriesdata.map((item) => (

<a href="#" class="flex flex-col items-center bg-slate-300
  border border-gray-200 rounded-lg shadow
  md:flex-row  hover:bg-gray-100 dark:border-gray-700
   dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="sm:w-full md:w-28 lg:w-44 xl:w-44 h-44  md:rounded-none md:rounded-s-lg" src={item.img} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-3 text-xl  font-bold text-gray-700 dark:text-gray-400">{item.title}</p>
    </div>
</a>


 ))}
    </div>
    </>
  )
}
