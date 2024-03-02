import React from 'react'

export default function AddCart() {
  return (
    <div>
      

      <div class="flex justify-center items-center">
  <div class="w-auto h-full lg:h-[650px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h5 class='mx-3 my-2'>Good Afternoon, John Smith</h5>
    <div class='p-4 flex flex-col justify-center items-center'>
      <div class='text-center'>
        <h6 class='font-semibold text-lg'>Flash Sale for you!</h6>
        <p class='text-5xl font-semibold text-blue-900'>40% <small class='text-xs font-semibold text-blue-900'>off</small></p>
        <p class='my-2'>Offer ends in 12 hours. <strong class='text-blue-900'>Get it now!</strong></p>
      </div>
    </div>
    <a href="#">
      <img class="p-2 h-96 w-80 rounded-t-lg" src="https://plus.unsplash.com/premium_photo-1661722017296-8e33753d149a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlcyUyMHByb2R1Y3RzfGVufDB8fDB8fHww" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <div class="flex items-center justify-between">
        <a href="#" class="text-white bg-blue-950 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
