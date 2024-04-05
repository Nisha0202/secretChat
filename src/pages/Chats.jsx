import React from 'react'
import ChatSection from '../components/ChatSection'
export default function Chats() {
  return (
    <div>
         <div className='fullscreen-container'>
                <div className='content-container flex flex-col lg:flex-row bg-[#36454F]'>
                    <div className='lg:w-1/3 w-full h-16 lg:h-full bg-mypink ads'></div>
                    <div className='lg:w-2/3 w-full h-full lg:h-full  chats'>
                        <ChatSection/>
                    </div>
                </div>
                </div>
    </div>
  )
}
