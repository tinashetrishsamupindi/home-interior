import React from 'react'
import Main from './Main'

function Navbar() {
  return (
    <div className='relative' >
        <div className='flex justify-between p-5 background'>
        <div>
            <h1 className='text-white'> Trish Home Design </h1>
        </div>
        <div className='px-3 text-white space-x-6'>
            <a href='/' className='bg-white p-2 text-black rounded-md font-bold'> Home </a>
            <a href='./About' className='bg-white p-2 text-black rounded-md font-bold'> About Us </a>
            <a href='/' className='bg-white p-2 text-black rounded-md font-bold'> Contact </a>
        </div>

        </div>
        <div className='absolute top-[30%] left-[40%]'>
            <Main />
            
        </div>
    </div>
  )
}

export default Navbar