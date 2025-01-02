import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full'>
        <ul className='bg-gradient-to-b from-pink-400 via-pink-500 to-pink-700 font-semibold uppercase text-xl text-white space-x-72 flex justify-center p-4'>
          <li className='mx-4'>Home</li>
          <li className='mx-4'>About</li>
          <li className='mx-4'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
