import React from 'react'
import Department from '../../data/Department'
export default function Depatrment() {
  return (
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-5 mx-10">
    {Department.map(department => (
        <div key={department.id} className="max-w-xs my-5 bg-white  rounded-lg overflow-hidden">
            <a href="#">
                <img className="w-44 h-44  object-cover mx-auto" src={department.img} alt={department.title} />
            </a>
            <div className="p-4">
                <h5 className="mb-2 text-xl font-bold text-center text-gray-900">{department.title}</h5>
            </div>
        </div>
    ))}
</div>

  )
}
