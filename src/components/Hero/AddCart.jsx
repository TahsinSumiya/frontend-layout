import React from 'react'

export default function AddCart() {
  return (
    <div>
      

      <div class="flex justify-center items-center">
  <div class="w-auto h-full  sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]
   max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h5 class='mx-3 text-xs sm:text-xs md:text-sm lg:text-md'>Good Afternoon, John Smith</h5>
    <div class='p-auto lg:p-4 flex flex-col justify-center items-center'>
      <div class='text-center'>
        <h6 class='font-semibold text-sm sm:text-sm md:text-md lg:text-lg'>Flash Sale for you!</h6>
        <p class=' font-semibold text-blue-900 text-lg sm:text-lg md:text-xl lg:text-4xl'>40% <small class='text-xs font-semibold text-blue-900 text-xs sm:text-xs md:text-sm lg:text-md'>off</small></p>
        <p class='my-2 text-xs sm:text-xs md:text-sm lg:text-md'>Offer ends in 12 hours. <strong class='text-blue-900 text-xs sm:text-xs md:text-sm lg:text-md'>Get it now!</strong></p>
      </div>
    </div>
    <a href="#">
      <img class="p-2 h-auto sm:h-32 md:h-36 lg:h-44 xl:h-72 2xl:h-96 w-80 rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661722017296-8e33753d149a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlcyUyMHByb2R1Y3RzfGVufDB8fDB8fHww" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <div class="flex items-center justify-between ">
        <a href="#" class="text-white bg-blue-950 w-full hover:bg-blue-800
         focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
         rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center dark:bg-blue-600
          dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
