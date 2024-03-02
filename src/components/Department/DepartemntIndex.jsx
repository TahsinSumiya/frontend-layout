import React from 'react'
import Depatrment from './Depatrment'
import Departmentdata from '../../data/Department'
export default function DepartemntIndex() {
  return (
    <div className='mx-2 lg:mx-10'>
      <h1 className='text-2xl font-bold'>Shop by Depatrment</h1>
 
      <Depatrment/>
     
    </div>
  )
}
