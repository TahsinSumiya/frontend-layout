import React from 'react';

export default function Apple({ title, img }) {
  return (
    <div className=" gap-4 mx-10">
      <div className="max-w-xs bg-white rounded-lg overflow-hidden">
        <a href="#">
          <img className="w-44 h-44 object-cover mx-auto" src={img} alt={title} />
        </a>
        <div className="p-4">
          <h5 className="mb-2 text-xl font-bold text-center text-gray-900">{title}</h5>
        </div>
      </div>
    </div>
  );
}
