import React from 'react'
import { useState } from 'react';

export default function Username() {
    const [userName, setUserName] = useState('');

    const handleClick = () => {
        // setIsVisible(false);
        // onDone(true);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setUserName(value);
    }
    return (
        <div className='h-screen w-screen bg-myblack grid place-items-center hero-overlay bg-opacity-70'>
            <div className='card bg-mypink  max-w-48 shadow-lg rounded-md shadow-myblack p-6 
            border-[1px] border-mylight-gray gap-2'>

                <div className="form-control w-full flex flex-col gap-2">
                    <span className="label-text text-mylight-black text-sm">Set an Username</span>
                    <input type="text" placeholder=""   value={userName}
                            
                        onChange={e => handleChange(e)}
                        className="input input-sm text-myblack input-bordered w-full max-w-xs" />

                </div>
             
                <button
  className={`w-full bg-myred rounded-md py-2 text-sm px-4 font-semibold text-mywhite border-0 ${userName ? "bg-myred" : "bg-mygray"}`}
  id="custom-btn3"
  onClick={handleClick}
  disabled={!userName}
>
  Done
</button>
                    {!userName && <span className="warning pt-2 text-myred text-xs">Please set an username before proceeding.</span>}

            </div>
        </div>
    )
}
