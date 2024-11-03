"use client";
import { useState, useEffect } from 'react';
import HumanResponse from './HumanResponse';
import BotResponse from './BotResponse';
import DummyData from './DummyData';
const ChatThread = () => {
console.log(DummyData)
const [convoHistory, setConvoHistory]=useState(DummyData);
const getData=()=>{
    // api call to get chat history
    setConvoHistory(()=> DummyData)
}
useEffect(()=>{
getData()
},[])
  return (
    <section className='bg-slate-300 h-[70vh] flex flex-col justify-end'>
        {
            convoHistory?.map(({speaker})=> {
                if (speaker=="Chatbot") return <BotResponse message={["dsfs"]}/>
                else return <HumanResponse/>
            }
        )
        }

        <BotResponse/>

   
    </section>

    
  )
}

export default ChatThread