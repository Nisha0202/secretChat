import React, { useEffect, useState, useRef } from 'react';
import { RxDotsHorizontal } from "react-icons/rx";

export default function ChatSection() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    };

    const [reply, setReply] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('message.json')
            .then(response => response.json())
            .then(data => setReply(data));
    }, []);

    useEffect(() => {
        if (currentIndex < reply.length) {
            const timer = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, reply]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col h-full lato">
            <nav className="bg-blue-500 p-4 text-mydark-white lato border-b-[1px] border-myblack flex justify-between">
                <div className='text-sm md:text-base'>Chat Room Name</div>
                <div className='btn btn-circle btn-sm btn-ghost'>
                    <RxDotsHorizontal className='text-mypink' size={18} />
                    </div>
            </nav>
            <div className="flex-grow overflow-auto p-4 space-y-2">

                {/* reply bubble */}
                {reply.slice(0, currentIndex).map((message, index) => (
                    <div className='chat chat-start' key={index}>
                        <div className="chat-header mb-1 text-mydark-white">Arshad
                            <time className="text-xs opacity-50 ml-2">{new Date().toLocaleTimeString()}</time>
                        </div>
                        <div className="chat-bubble  text-sm p-2 bg-gray rounded-md text-right">
                            {message.message_text}
                        </div>
                        <div className="chat-footer text-xs opacity-50">
                            Seen at {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                ))}

                {/* chat bubble */}
                {messages.map((message, index) => (
                    <div className='chat chat-end' key={index}>
                        <div className="chat-header mb-1 text-mylight-gray">Anakin
                            <time className="text-xs opacity-50 ml-2">{new Date().toLocaleTimeString()}</time>
                        </div>
                        <div className="chat-bubble text-sm p-2 bg-gray rounded-md text-right">
                            {message}
                        </div>
                        <div className="chat-footer text-xs opacity-50">
                           Seen at {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />

            </div >

            <div className="p-4 bg-gray-200 space-x-2 border-t-[1px] border-myblack">
                <form action="" className='w-full flex gap-4 items-center'>
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className=" text-mygray flex-grow rounded-md border p-2" />
                    <button
                        type='submit'
                        onClick={handleSend}
                        className="btn btn-sm flex-shrink-0 bg-mypink border-0 text-myblack rounded-md px-4 py-2 lato" >
                        Send
                    </button>
                </form>

            </div>
        </div >
    );
}
