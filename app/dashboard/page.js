import React from 'react'
import Navbar from '../_components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <Navbar/>
    
    <main className='grid grid-cols-5 w-full h-[70vh] bg-red-300'>
      
      <div className='col-span-2'>
        <Image src={'/Illustration.svg'} width={500 } alt='d' height={500} className='object-contain w-full' />
      </div>
    </main>
    </>
  )
}

export default page