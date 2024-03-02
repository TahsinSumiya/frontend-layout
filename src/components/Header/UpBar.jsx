import React from 'react'
import {  AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
export default function UpBar() {
  return (
    <>
      

<div class="bg-gray-100 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
  < AiOutlineLeft className=' w-44' />
    <p className='text-blue-900 font-bold text-xs md:text-sm lg:text-sm  w-auto md:w-auto lg:w-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Odio repellendus ad mollitia ?</p>
    <AiOutlineRight  className=' w-44' />
  </div>
</div>

    </>
  )
}
