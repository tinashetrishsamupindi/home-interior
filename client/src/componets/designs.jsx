import React from 'react'
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';
import image9 from '../assets/image9.jpg';
import image4 from '../assets/image4.jpg';
import image13 from '../assets/image13.jpg';

function Designs() {
  return (
    <div className='grid grid-cols-4 gap-3 pt-8 p-10'>
      <div>
        <img className='rounded-md' src={image3}  alt='img' />
        <p className='flex justify-center mt-3 font-bold text-xl tracking-wide'> Kitchen </p>
      </div>
      <div>
        <img className='rounded-md' src={image9} width='720' height='450' alt='img' />
        <p className='flex justify-center mt-3 font-bold text-xl tracking-wide'> Living Room </p>
      </div>
      <div>
        <img className='rounded-md' src={image4} alt='img' />
        <p className='flex justify-center mt-3 font-bold text-xl tracking-wide'> Bathroom </p>
      </div>
      <div>
        <img className='rounded-md' src={image13} alt='img' />
        <p className='flex justify-center mt-3 font-bold text-xl tracking-wide'> Bedroom </p>
      </div>
    </div>
  )
}

export default Designs;