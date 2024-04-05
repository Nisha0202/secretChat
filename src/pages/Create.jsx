import React, { useState, useRef } from 'react';
import { GoPlus } from "react-icons/go";
import { Link } from 'react-router-dom';


export default function Create() {
    const maxChatNameLength = 8;
    const maxDescriptionLength = 100;
    const maxCategoryLength = 12;

    const [chatRoomName, setChatRoomName] = useState('');
    const fileInputRef = useRef();
    const [categoryLength, setCategoryLength] = useState(0);
    const [chatRoomNameLength, setChatRoomNameLength] = useState(0);
    const [descriptionLength, setDescriptionLength] = useState(0);

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
    };
    return (
        <div>
            <div className='fullscreen-container'>
                <div className='content-container grid place-items-center'>
                    <div className="card max-w-96 md:p-6 p-4 border-[1px] border-mygray shadow-xl flex=col items-center py-10 m-1">
                        <figure className="w-16 h-16 mb-6 rounded-full bg-mywhite relative">
                            <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer" onClick={handleFileInputClick}>
                                <GoPlus className='text-myBlue' size={24} />
                                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                            </div>

                        </figure>
                        <div className="flex flex-col text-center gap-4">
                            <div className='flex gap-4'>
                                <div className="flex flex-col items-start gap-2">
                                    <span className="label-text text-mylight-gray text-sm  ">Chat Room Name</span>
                                    <input type="text" maxLength={maxChatNameLength}
                                        onChange={e => {
                                            setChatRoomName(e.target.value);
                                            setChatRoomNameLength(e.target.value.length);
                                        }}
                                        className="input input-sm text-myblack  input-bordered w-full max-w-xs" />
                                    <span className='text-xs text-mygray'>{chatRoomNameLength}/{maxChatNameLength} characters</span>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <span className="label-text text-mylight-gray text-sm ">Limit</span>
                                    <input placeholder="2" type="number" name="limit" min="2" max="10" defaultValue={2}
                                        className="input input-sm text-myblack input-bordered w-full max-w-xs  " />
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <span className="label-text text-mylight-gray text-sm  ">Description</span>
                                    <textarea maxLength={maxDescriptionLength}
                                        onChange={e => setDescriptionLength(e.target.value.length)}
                                        className="textarea w-full text-myblack textarea-bordered textarea-sm" >
                                    </textarea>
                                    <span className='text-xs text-mygray'>{descriptionLength}/{maxDescriptionLength} characters</span>
                                </div>
                            </div>
                            <div className='flex gap-4 justify-between'>
                                <div className="flex flex-col items-start gap-2">
                                    <span className="label-text text-mylight-gray text-sm ">Category</span>
                                    <input type="text" maxLength={maxCategoryLength}
                                        onChange={e => setCategoryLength(e.target.value.length)}
                                        className="input input-sm text-myblack input-bordered w-full max-w-xs" />
                                    <span className='text-xs text-mygray'>{categoryLength}/{maxCategoryLength} characters</span>
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <span className="label-text text-sm text-mylight-gray">Public</span>
                                    <div className='py-1'>
                                        <input type="checkbox" className="toggle border-myblack text-mypink toggle-md" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between w-full gap-4'>
                                <button
                                    className={` py-2 text-sm px-4 font-semibold rounded-md text-mywhite border-0 w-1/2 ${chatRoomName ? "bg-myred" : "bg-gray-light2"}`}
                                    onClick={() => window.open('/chats', '_blank')} disabled={!chatRoomName}>Create
                                </button>
                                <Link className="w-1/2" to='/space'>
                                    <button className='w-full  py-2 text-sm px-4 border-[1px] border-mypink font-semibold rounded-md text-mywhite'>Cancel</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
