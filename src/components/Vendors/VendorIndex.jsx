import React from 'react'
import Crads from './Cards'
import VendorCard from './VendorCard'
export default function VendorIndex() {
  return (
    <>
           <div className='flex justify-between mx-10'>
      <h1 className='text-2xl font-bold'>Weakly Top Vendors</h1>
 
   
    
    </div>
    <VendorCard/>
      <Crads/>
    </>
  )
}
