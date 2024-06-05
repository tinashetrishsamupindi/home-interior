import React from 'react'

function Contact() {
  return (
    <div className='p-5' id='contact'>
        <div className='flex justify-center item-center mt-8'>
        <h1 className='text-4xl font-bold tracking-wider'> Contact us </h1>
      </div>

      <div className='grid grid-rows-3 mt-5 p-6'>
        <div className='flex justify-center'>
            <img src='/public/app.jpg' width='50' height='50' />
            <p className='pl-5 mt-4 text-md font-semibold text-center'> +263 78 581 3361</p>
        </div>

        <div className='flex justify-center'>
        <img src='/public/emai.jpg' width='50' height='50' />
        <p className='pl-5 mt-4 text-md font-semibold text-center'> tinashetrishsamupindi@gmail.com</p>
        </div>
        
        <div className='flex justify-center'>
        <img src='/public/facebook.png' width='50' height='50' />
        <p className='pl-5 mt-4 text-md font-semibold text-center'> tinashetrishsamupindi</p>
        </div>
        <div className='flex justify-center'>
        <img src='/public/twitter.jpg' width='50' height='50' />
        <p className='pl-5 mt-4 text-md font-semibold text-center'> @samupinditrish</p>
        </div>
        <div className='flex justify-center'>
        <img src='/public/call.jpg' width='50' height='50' />
        <p className='pl-5 mt-4 text-md font-semibold text-center'> +263 78 581 3361 </p>
        </div>
        
      </div>
    </div>
  )
}

export default Contact