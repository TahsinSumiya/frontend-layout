import React from 'react'
import EndCard from '../../data/EndCard'
export default function EndCrds() {
  return (
    <>
<div className="flex justify-center items-center ">
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 my-5'>
        {EndCard.map(card => (
          <a key={card.id} href="#" className="block  w-96
          p-6 m-2 bg-slate-300 border-gray-200 rounded-lg 
         shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
          dark:hover:bg-gray-700">
             <div className="flex ">
                 <div className="text-2xl  text-amber-600 dark:text-white mr-2">{card.icon}</div>
                 <div>
                 <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                 <p className="text-gray-700 dark:text-gray-400">{card.title}</p>
                 </div>
                 
             </div>
             
         </a>
        ))}
    </div>
</div>


</>
  )
}
