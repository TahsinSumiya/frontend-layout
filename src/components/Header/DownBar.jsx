import React from 'react'
import data from '../../data/data'
export default function DownBar() {
  return (
    <>
<div class="bg-gray-100 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4">
  {data.map(item => (
      <p key={item.id} className='text-blue-900 font-bold text-xs md:text-sm lg:text-sm w-auto md:w-auto lg:w-auto'>
        {item.title}
      </p>
    ))}


  </div>
</div>

    </>
  )
}
