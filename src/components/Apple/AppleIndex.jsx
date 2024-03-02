import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { GiAppleSeeds } from 'react-icons/gi';
import Apple from './Apple';
import DepartmentData from '../../data/Department';

export default function AppleIndex() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='mx-2 lg:mx-10'>
      <div className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <GiAppleSeeds className='text-3xl' />
          <h1 className='text-2xl font-bold'>Apples</h1>
        </div>
        <button className='text-2xl flex font-bold' onClick={toggleShowMore}>
          {showMore ? 'See less items' : 'See more items'} <AiOutlineRight className='mt-2' />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 my-5  mt-5">
        {DepartmentData.slice(0, 6).map((item) => (
          <Apple key={item.id} title={item.title} img={item.img} />
        ))}
        {showMore && DepartmentData.slice(6).map((item) => (
          <Apple key={item.id} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
}
