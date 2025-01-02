'use client'
import {useParams , usePathname} from 'next/navigation'

const page = () => {
    const params = useParams();
    const pathName = usePathname();

    console.log(params);
    console.log(pathName);
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-l from-green-700 via-green-300 to-green-300 text-6xl text-white font-extrabold'>
      User Profile Page
    </div>
  )
}

export default page
