import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import Products from './Products';
import MoreProduct from './MoreProduct';
export default function DealIndex() {
  return (
    <div className='mx-2 lg:mx-10'>
       <div className='flex justify-between'>
      <h1 className='text-2xl font-bold'>Deal of the Day</h1>
 
   <button className='text-2xl flex font-bold'>see more items <AiOutlineRight className='mt-2'/></button>
    
    </div>
    <Products/>
    <MoreProduct/>
    </div>
  )
}
