import React from 'react'
import Component from './Component/page'
const Home = () => {
  return (
    <div>
    <div className='bg-gradient-to-r from-pink-600 via-pink-300 to-pink-400 text-white flex flex-col items-center justify-center h-screen text-5xl font-semibold'>
      Hello Components!
      <Component/>
    </div>
    </div>
  )
}

export default Home
