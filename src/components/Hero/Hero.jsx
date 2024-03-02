import React from 'react'
import { Carousel } from 'flowbite-react';
import Brands from './Brands';
export default function Hero() {
  return (

    <div className='w-auto  sm:w-[200px]  md:w-[300px] lg:w-[500px] xl:w-[700px] 2xl:w-[1000px] mx-2 xl:mx-15 2xl:mx-20'>
      <div className="h-96 sm:h-64 xl:h-[500px]">
      <Carousel leftControl=" " rightControl=" ">
      <div className="relative">
  <div className="absolute  inset-7 flex flex-col items-start justify-center ">
    <p className='text-2xl md:text-3xl lg:text-6xl text-blue-900'>Kitchen Savings</p>
    <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4">Buy Now (5% off)</button>
  </div>
  <img className='w-auto md:w-full lg:w-full h-96 sm:h-64 xl:h-[500px] ' src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="..." />
</div>

<div className="relative">
  <div className="absolute  inset-7 flex flex-col items-start justify-center ">
    <p className='text-2xl md:text-3xl lg:text-6xl text-blue-900'>Shoes</p>
    <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4">Buy Now (5% off)</button>
  </div>
  <img className='w-auto md:w-full lg:w-full h-96 sm:h-64 xl:h-[500px] ' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt="..." />
</div>
<div className="relative">
  <div className="absolute  inset-7 flex flex-col items-start justify-center ">
    <p className='text-2xl md:text-3xl lg:text-6xl text-blue-900'>Electronics</p>
    <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4">Buy Now (5% off)</button>
  </div>
  <img className='w-auto md:w-full lg:w-full h-96 sm:h-64 xl:h-[500px] ' src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt="..." />
</div>
<div className="relative">
  <div className="absolute  inset-7 flex flex-col items-start justify-center ">
    <p className='text-2xl md:text-3xl lg:text-6xl text-blue-900'>Cosmetics</p>
    <button className="bg-blue-900 text-white px-4 py-2 rounded mt-4">Buy Now (5% off)</button>
  </div>
  <img className='w-auto md:w-full lg:w-full h-96 sm:h-64 xl:h-[500px] ' src="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="..." />
</div>


      </Carousel>
    </div>
    <Brands/>
    </div>
  )
}
