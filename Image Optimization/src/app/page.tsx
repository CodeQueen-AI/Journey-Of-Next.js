import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <div className='text-pink-600 text-3xl font-semibold flex items-center justify-center mt-3'>
        Image Optimization
      </div>
      <div className='flex space-x-4 mt-8'>
        {/* Image 1 */}
        <div className='w-1/3 h-64'>
          <Image 
            src='/img1.jpg' 
            alt='Image 1' 
            width={500} 
            height={300} 
            className='w-full h-full object-cover' 
          />
        </div>

        {/* Image 2 */}
        <div className='w-1/3 h-64'>
          <Image 
            src='/img2.jpg' 
            alt='Image 2' 
            width={500} 
            height={300} 
            className='w-full h-full object-cover' 
          />
        </div>

        {/* Image 3 */}
        <div className='w-1/3 h-64'>
          <Image 
            src='/img3.jpg' 
            alt='Image 3' 
            width={500} 
            height={300} 
            className='w-full h-full object-cover' 
          />
        </div>
      </div>
    </div>
  )
}

export default Home
