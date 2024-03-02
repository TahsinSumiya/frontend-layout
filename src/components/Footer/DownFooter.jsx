import React from 'react'
import { BiLogoPlayStore } from "react-icons/bi";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import  visa from '../../static/visa.png'
import paypal from '../../static/paypal.png'
export default function DownFooter() {
  return (
    <>

<footer class="bg-slate-100">
    <div class=" ">

      <div class="grid grid-cols-2 gap-8 px-4 
      py-6 lg:py-8 md:grid-cols-5">
   
        <div>
          <h1 className='text-2xl font-bold text-black'>Essence</h1>
        <p className='text-gray-500 my-3'>Got Question? Call Us 24/7</p>
        <p className='text-gray-500 font-bold my-3'>(+1)46578435458</p>
        <p>Register now & get your 10% offer from first order!</p>
        <div className='my-2 bg-slate-300 w-28 py-2'>            
          <Dropdown label="English(USA)" inline className='bg-slate-300'>
            <Dropdown.Item>English(USA)</Dropdown.Item>
            <Dropdown.Item>Bengali</Dropdown.Item>
            <Dropdown.Item>Hindi</Dropdown.Item>
          </Dropdown>
        </div>
        </div>
        <div>
            <h2 class="mb-6 text-md font-bold
             text-cyan uppercase
             transition ease-in-out delay-150  hover:-translate-y-1 
              duration-300
             
            ">Services</h2>
            <ul class="text-cyan  font-medium">
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class=" hover:text-amber-500
                    
                    ">Company</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300 ">
                    <Link to="/" class="hover:underline hover:text-amber-600">About Us</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-600">Career</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-600">
                        Contact Us </Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-600">
                    Start Selling </Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-600">
                    Order History</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-md font-bold
             text-cyan uppercase
             transition ease-in-out delay-150  hover:-translate-y-1 
              duration-300
             ">My Account</h2>
            <ul class="text-cyan  font-medium">
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-600">Track My Order</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-600">View Cart</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Sign In</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Help</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Wishlist</Link>
                </li>
             
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-md font-bold
             text-cyan uppercase
             transition ease-in-out delay-150  hover:-translate-y-1 
              duration-300
             ">Customer Service</h2>
            <ul class="text-cyan  font-medium">
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Payment Methods</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Money Return Policy</Link>
                </li>
                <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Product Return</Link>
                    <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Contact Seller</Link>
                    <li class="mb-4 transition ease-in-out delay-150  hover:-translate-y-1 
                    duration-300">
                    <Link to="/" class="hover:underline hover:text-amber-500">Terms & Conditions</Link>
                </li>
                </li>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-md font-bold
             text-cyan uppercase
             transition ease-in-out delay-150  hover:-translate-y-1 
              duration-300
            ">Download app</h2>
<div className='flex '>

<button type="button" class="flex bg-white hover:bg-[#3b5998]/90 focus:ring-4 border border-black
  focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-96
  text-center items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
  <BiLogoPlayStore className='text-6xl' />
  <div>
    <p className='text-xs'>Get it on</p> 
    <strong>Google play</strong>
  </div> 
</button>

<button type="button" class="flex bg-white hover:bg-[#3b5998]/90 focus:ring-4 border border-black
  focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 w-96
  text-center x items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
  <BiLogoPlayStore className='text-6xl' />
  <div>
    <p className='text-xs'>Download on the</p> 
    <strong>App Store</strong>
  </div>
</button>

</div>

<div className='flex my-20 gap-x-16 '>
<FaFacebookF className=' bg-slate-200 text-5xl '/>
<FaInstagram className='bg-slate-200 text-5xl '/>
<FaLinkedin className='bg-slate-200 text-5xl '/>
<FaTwitter className='bg-slate-200 text-5xl '/>
</div>

        </div>
    </div>
    <div className=' border-fruit '></div>
    <div class="  bg-slate-200   flex flex-wrap
      justify-start sm:justify-start md:justify-between lg:justify-between pt-3 ">

        <div className='flex flex-wrap'>
     

        <p class="mx-4 text-lg
         text-gray-700 hover:text-black
         sm:text-center">All rights reserved.@ 2024 zcart.com
        </p>
        </div>
        
       <div className='flex'>
        <p>We are using safe for</p>
        <div>

        </div>
        <img src={visa} alt="" srcset=""  className='h-5 w-8 border border-slate-500 border-spacing-4 mx-2'/>
        <img src={paypal} alt="" srcset=""  className='h-5 w-8 border border-slate-500 border-spacing-4 mx-2'/>
        <img src={visa} alt="" srcset=""  className='h-5 w-8 border border-slate-500 border-spacing-4 mx-2'/>
        <img src={paypal} alt="" srcset=""  className='h-5 w-8 border border-slate-500 border-spacing-4 mx-2'/>
       </div>
        
      </div>

    </div>
</footer>


    </>
  )
}
