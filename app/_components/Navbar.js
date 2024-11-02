import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>


    <div className='flex flex-row justify-between'>

        <Image src={'/logo.svg'} width={64} height={64} alt='logo' className='bg-red-300'/>   
        
         <div className='flex '> 

            <div>
               <button className='w-32 h-23'>Dashboard</button>
            </div>
            <div>
<Image src={'/notifications.svg'} width={24} height={24} alt='unable to load image'/>
            </div>
            <div>
<Image src={'/account_circle.svg'} width={24} height={24} alt='unable to load image'/>
            </div>
         </div>
         </div>

    </nav>
  )
}

export default Navbar