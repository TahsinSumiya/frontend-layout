import React from 'react'
import EndCard from '../../data/EndCard'
export default function EndCrds() {
  return (
    <>
<div className='flex flex-wrap justify-center sm:justify-center md:justify-start lg:justify-start mx-10 my-5'>
            {EndCard.map(card => (
                <a key={card.id} href="#" className="block  w-96
                 p-6 m-2 bg-slate-300 border-gray-200 rounded-lg 
                shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
                 dark:hover:bg-gray-700">
                    <div className="flex items-center">
                        <div className="text-2xl  text-amber-300 dark:text-white mr-2">{card.icon}</div>
                        <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">{card.header}</h5>
                    </div>
                    <p className="text-gray-700 dark:text-gray-400">{card.title}</p>
                </a>
            ))}
        </div>

</>
  )
}
