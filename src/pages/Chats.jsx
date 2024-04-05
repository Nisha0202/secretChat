import React from 'react'
import { useState } from 'react';
import ChatSection from '../components/ChatSection'
import Username from '../components/Username'

export default function Chats() {
  const [isUsernameVisible, setIsUsernameVisible] = useState(true);

  const handleUsernameDone = () => {
      setIsUsernameVisible(false);
  }
 
  return (
    <div className=''>
         <div className='fullscreen-container relative'>
                <div className='content-container flex flex-col lg:flex-row bg-gray-light2 w-full h-full'>
                    <div className='lg:w-1/3 w-full h-1/6 lg:h-full hero-overlay opacity-70  ads'>
                        <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/72/8d/45/728d458072c4bbd347d9f9d2f331e67c.jpg" alt="" />
                    </div>
                    <div className='lg:w-2/3 w-full h-5/6 lg:h-full  chats'>
                        <ChatSection/>
                    </div>
                </div>

                {isUsernameVisible && 
                    <div className='absolute z-20 inset-0'>
                        <Username onDone={handleUsernameDone}/>
                    </div>
                }

                </div>
    </div>
  )
}
