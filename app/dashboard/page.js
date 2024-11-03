import React from 'react'
import Navbar from '../_components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <Navbar/>
    
    <main className='grid grid-cols-5 w-full h-[70vh] px-12 '>
      
      <div className='col-span-2'>
        <Image src={'/Illustration.svg'} width={400 } alt='d' height={400} className='object-contain' />
      </div>
    </main>
    </>
  )
}

export default page