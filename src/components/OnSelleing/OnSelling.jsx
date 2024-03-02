import React from 'react'
import OnSellingdata from '../../data/OnSellingdata'
export default function OnSelling() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-5 '>
      {OnSellingdata.map((item) => (
<a href="#" class="flex flex-col items-center w-auto
 bg-slate-200 border border-gray-200 rounded-lg shadow md:flex-row 
  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover h-28 w-18 md:rounded-none md:rounded-s-lg" src={item.img} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">{item.title}</h5>
        <h5 class="mb-2  tracking-tight text-gray-900 dark:text-white ">{item.p}</h5>
        <p> <strong className='text-xl'>{item.cost}</strong> <span className='line-through'>{item.totalcost}</span> <span>{item.discount}</span></p>
    </div>
</a>
 ))}
    </div>
  )
}
