import React from 'react'

import SideBars from './SideBars'

import Hero from './Hero'
import AddCart from './AddCart'
import EndCrds from './EndCrds'

export default function HeroIndex() {
  return (
    <>
<div className="flex flex-col md:flex-row sm:flex-row mx-auto lg:mx-10 sm:my-5   w-auto
"> 
  <div className='flex   '>
    <SideBars/>
    <Hero/>
  </div>
  <AddCart/>
</div>

<EndCrds/>
    </>
  )
}
