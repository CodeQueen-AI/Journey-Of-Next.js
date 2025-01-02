import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-900 text-white text-6xl font-extrabold'>
      Hello Login Page
      <div className='flex flex-col mt-8'>
        <Link href={'/login/student'}>
          <button className='mt-4 text-xl border-2 border-black h-14 w-44'>Student Login</button>
        </Link>
        <Link href={'/login/teacher'}>
          <button className='mt-6 text-xl border-2 border-black h-14 w-44'>Teacher Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
