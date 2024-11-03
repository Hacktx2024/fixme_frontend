import Image from 'next/image'
import React from 'react'

const BotResponse = ({message}) => {
    console.log(message)
  return (
    <div className='w-80vw md:w-[33vw] flex gap-4 items-start overflow-y-scroll'>
        <Image src='/botlogo.svg' width={50} height={59} alt="bot"/>

        <div className='responseArea flex flex-col gap-2'>
        {message?.map((msg, index)=> <div className='w-fit text-sm rounded-[32px] p-3 text-left bg-[#22602F] text-white' key={index}>
            {msg}
        </div>)}
        
        </div>

    </div>
  )
}

export default BotResponse