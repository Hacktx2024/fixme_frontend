import Image from 'next/image'
import React from 'react'

const BotResponse = ({message}) => {
    console.log(message)
  return (
    <div className='bg-red-300 w-[51vw]'>
        <Image src='/botlogo.png' width={50} height={59}/>

        <div className='responseArea'>
        {message?.map(msg=> <div>
            {msg}
        </div>)}
        
        </div>

    </div>
  )
}

export default BotResponse