import React, { useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import Products from './Products';
import MoreProduct from './MoreProduct';
import dealsdata from '../../data/Deals';

export default function DealIndex() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='mx-2 lg:mx-10'>
       <div className='flex justify-between'>
      <h1 className='text-2xl font-bold'>Deal of the Day</h1>
 
      <button className='text-2xl flex font-bold' onClick={toggleShowMore}>
          {showMore ? 'See less items' : 'See more items'} <AiOutlineRight className='mt-2' />
        </button>
    
    </div>
    <div className='grid grid-cols-2 gap-4 my-5  mt-5'>
  
      {dealsdata.slice(0, 2).map((item) => (
        <Products key={item.id} title={item.title} img={item.img} />
      ))}
      
   
      {showMore && dealsdata.slice(2).map((item) => (
        <Products key={item.id} title={item.title} img={item.img} />
      ))}
      
      

    </div>
    <MoreProduct/>
  </div>
  );
}
