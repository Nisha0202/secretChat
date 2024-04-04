import React, { useState } from 'react';
import { RxDotsHorizontal } from "react-icons/rx";
export default function ChatSection() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        setMessages([...messages, input]);
        setInput('');
    };
    return (
        <div className="flex flex-col h-full lato">
            <nav className="bg-blue-500 p-4 text-white lato border-b-[1px] border-myblack flex justify-between">
                <div>Chat Room Name</div>
                <div><RxDotsHorizontal className='text-myBlue' size={24}/></div>  
            </nav>
            <div className="flex-grow overflow-auto p-4 space-y-2 chat chat-end">
                {messages.map((message, index) => (
                    <div key={index} className=" chat-bubble p-2 bg-myblack rounded-md text-right">
                        {message}
                    </div>
                ))}
            </div>
            <div className="p-4 bg-gray-200 flex items-center space-x-2 border-t-[1px] border-myblack">
                <input 
                    type="text"
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    className="textarea text-mygray flex-grow rounded-md border p-2"   />
                <button 
                    onClick={handleSend} 
                    className="btn btn-sm bg-mypink border-0 text-myblack rounded-md px-4 py-2 lato" >
                    Send
                </button>
            </div>
        </div>
    );
}

