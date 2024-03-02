import React from 'react'
// import { Sidebar } from 'flowbite-react';
import './css/Siderbar.css'
import { PiMedalThin } from "react-icons/pi";
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
export default function SideBars() {
  return (
    <>
    <aside id="sidebar-multi-level-sidebar" class=" w-64 " aria-label="Sidebar">
   <div class="h-auto  px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-blue-950 rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='active w-9 h-6' />
               </div>
               <span class="ms-3 active">All Categories</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Cars & Motorcycle</span>
            </a>
         </li>

         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Music & Books</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Arts & Crafts</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Moms & Babies</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Softwares</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Home & Garden</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Electronics</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Kids & Toy</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Clothing & Shoes</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Beauty & Health</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Sports</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2  rounded-lg dark:text-white
             hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div class="w-5 h-5 text-gray-500 transition duration-75 
                dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
               <PiMedalThin className='e w-9 h-6' />
               </div>
               <span class="ms-3 ">Jewllery</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
    </>
  )
}
