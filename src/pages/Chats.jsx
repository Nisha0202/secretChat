import React from 'react'
import ChatSection from '../components/ChatSection'
import Username from '../components/Username'

export default function Chats() {
 
  return (
    <div className=''>
         <div className='fullscreen-container relative'>
                <div className='content-container flex flex-col lg:flex-row bg-[#36454F] w-full h-full'>
                    <div className='lg:w-1/3 w-full h-16 lg:h-full bg-mypink ads'></div>
                    <div className='lg:w-2/3 w-full h-full lg:h-full  chats'>
                        <ChatSection/>
                    </div>
                </div>

                <div className='absolute z-20 inset-0'>
                  <Username/>
                </div>

                </div>
    </div>
  )
}
