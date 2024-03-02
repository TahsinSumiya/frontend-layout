import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import { AiOutlineHeatMap } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
export default function Header() {
  return (
    <>
    <Navbar fluid rounded className='bg-blue-900'>
      <Navbar.Brand href="/">
      <AiOutlineHeatMap className="mr-3 h-6 sm:h-9 text-white"/>

        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Essence</span>
      </Navbar.Brand>
      <div className="flex md:order-2 list-none mx-3">
      
        <Navbar.Link href="#" className='text-white mx-3 flex items-center no-underline'><IoMdPerson />Sign In</Navbar.Link>
   
        <Navbar.Link href="#"className='text-white mx-3 flex items-center no-underline'><AiOutlineShoppingCart />Cart</Navbar.Link>
    

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      <div class="flex md:order-2 w-full ">
  
    <div class="relative  md:block w-[350px] md:w-[450px] lg:w-[850px]">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm rounded-full
       text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500
        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>

  </div>

      </Navbar.Collapse>
    </Navbar>
    </>
  )
}
