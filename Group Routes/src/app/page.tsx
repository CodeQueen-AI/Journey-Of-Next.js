import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className='text-3xl bg-gradient-to-tr from-red-500 via-green-600 via-white to-blue-600 flex flex-col items-center justify-center h-screen space-y-4'>
      <Link href='/Home'>
        <button className='border-2 border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white hover:border-white py-2 px-4 transition-colors duration-300'>
          Home
        </button>
      </Link>
      <Link href='/About'>
        <button className='border-2 border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white hover:border-white py-2 px-4 transition-colors duration-300'>
          About
        </button>
      </Link>
      <Link href='/Contact'>
        <button className='border-2 border-purple-500 text-purple-500 bg-white hover:bg-purple-500 hover:text-white hover:border-white py-2 px-4 transition-colors duration-300'>
          Contact
        </button>
      </Link>
    </div>
  );
}

export default page;