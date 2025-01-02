import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <nav className='bg-gradient-to-r from-green-400 via-white via-blue-900 to-blue-500 text-white'>
        <div className='flex items-center justify-between p-4'>
          <div className='text-2xl font-extrabold'>Logo</div>
          <ul className='flex items-center justify-between space-x-4'>
            <Link href={'/home'}><li className='hover:text-black text-xl'>Home</li></Link>
            <Link href={'/about'}><li className='hover:text-black text-xl'>About</li></Link>
            <Link href={'/contact'}><li className='hover:text-black text-xl'>Contact</li></Link>
          </ul>
        </div>
      </nav>
      <div className='bg-gradient-to-b from-pink-500 via-green-500 via-red-500 to-blue-400 flex flex-col items-center justify-center h-screen'>
        <div className='mt-4 text-4xl text-white font-extrabold'>Welcome to my Webpage!</div>
        <div>We Learn About Routes and Navigation</div>
        <button className='border-2 border-black text-black bg-white hover:text-white hover:border-white hover:bg-black h-12 w-56 mt-6'>Get Started!</button>
      </div>
    </div>
  )
}

export default page
