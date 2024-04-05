import React from 'react'
import { useState } from 'react';
import { FiAlertCircle } from "react-icons/fi";

export default function Username({ onDone }) {


    const [isVisible, setIsVisible] = useState(true);
    const [userName, setUserName] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const handleClick = () => {
        if (!userName) {
            // alert('Please set an username before proceeding.');
            setShowAlert(true);
        }else{
            setIsVisible(false);
            onDone(true);
        }
      
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setUserName(value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    return (
        isVisible && (
        <div className='h-screen w-screen bg-myblack grid place-items-center hero-overlay bg-opacity-70'>
            <div className='card bg-mypink  max-w-48 shadow-lg rounded-md shadow-myblack p-6 
            border-[1px] border-mylight-gray gap-2'>

                <div className="form-control w-full flex flex-col gap-2">
                    <span className="label-text text-mylight-black text-sm">Set an Username</span>
                    <input type="text" placeholder="" value={userName}
                        onChange={e => handleChange(e)}
                        onKeyPress={e => handleKeyPress(e)}
                        className="input input-sm text-myblack input-bordered w-full max-w-xs" />

                </div>
             
                <button
                    className={`w-full bg-myred rounded-md py-2 text-sm px-4 font-semibold text-mywhite border-0 ${userName ? "enabled" : "disabled"}`}
           
                    onClick={handleClick}
                    disabled={!userName}
                >
                    Done
                </button>
                {showAlert && <span className="warning pt-2 text-myred text-xs flex gap-1"> <FiAlertCircle size={18}/>Please set an username before proceeding.</span>}

            </div>
        </div>)
    )
}
