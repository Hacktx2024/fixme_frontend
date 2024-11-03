import React from 'react'
import Navbar from '../_components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Navbar/>
    
    <main className='grid grid-cols-6 grid-rows-5 w-full h-[70vh] pr-22 '>
      
      <div className='col-span-2 '>
        <Image src={'/Illustration.svg'} width={400 } alt='d' height={400} className='object-contain' />
      </div>
      <div className='col-span-1 flex flex-col items-center gap-2 mt-18 row-start-2 row-end-3 col-start-3'>
        <Link href={'/report'}><Image alt="photo not loaded" src={'/first.svg'} width={250} height={250}/></Link>
        <div className='text-md hover:font-bold hover:underline cursor-pointer'>Latest Report → </div>
      </div>
      <div className='col-span-1 flex flex-col items-center gap-2 mt-18 row-start-2 row-end-3 col-start-4'>
        <Link href={'/history'}><Image alt="photo not loaded" src={'/second.svg'} width={250} height={250}/></Link>
        <div className='text-md hover:font-bold hover:underline cursor-pointer'>History → </div>
      </div>
      <div className='col-span-1 flex flex-col items-center gap-2 mt-18 row-start-2 row-end-3 col-start-5'>
        <Link href={'/reminder'}><Image alt="photo not loaded" src={'/third.svg'} width={250} height={250}/></Link>
        <div className='text-md hover:font-bold hover:underline cursor-pointer'>Set Reminder → </div>
      </div>
    </main>
    </>
  )
}

export default page