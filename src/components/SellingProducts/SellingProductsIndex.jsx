import React from 'react'
import sale from '../../static/sale.webp'
import bigsale from '../../static/bigsale.avif'
export default function SellingProductsIndex() {
  return (
    <>
  
  <div className='mx-2 lg:mx-10'>

<h1 className='text-2xl font-bold my-5'>On Selling Products</h1>

<div className='flex flex-wrap justify-center  m-5'>
  <div className='m-5 lg:w-1/4'>
    <img srcset={sale} className="w-full h-auto max-w-xl rounded-lg" alt="image description"/>
    <img srcset={sale} className="w-full h-auto max-w-xl mt-5 rounded-lg" alt="image description"/>
  </div>
  <img srcset={bigsale} className="w-full h-auto max-w-xl m-5 lg:w-1/2 rounded-lg" alt="image description"/>
  <div className='m-5 lg:w-1/4 '>
  <img srcSet={sale} className="w-full h-auto max-w-xl rounded-lg mb-5 md:mb-0 md:mr-5 xl:mr-0 xl:mb-5" alt="image description"/>
  <img srcSet={sale} className="w-full h-auto max-w-xl my-5 rounded-lg" alt="image description"/>
</div>





</div>
</div>




    </>
  )
}
