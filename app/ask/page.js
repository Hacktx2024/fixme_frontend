import React from 'react'
import Prompt from '../_components/Prompt'

import ChatThread from '../_components/ChatThread'
import Navbar from '../_components/Navbar'
const page = () => {
  return (
    <main>
        <Navbar/>
<ChatThread/>
<Prompt/>
    </main>
  )
}

export default page;