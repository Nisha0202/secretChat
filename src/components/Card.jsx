import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { RiShareBoxLine } from "react-icons/ri";

export default function Card() {
    return (
        <div>
            <div className="card max-w-64 h-[360px] shadow-xl bg-card px-7 py-6">
                <figure className="w-24 h-24 rounded-full mx-auto">
                    <img className='w-24 h-24 object-cover'
                        src="https://i.pinimg.com/736x/84/d7/09/84d7098cbdccbae7d254cdc7426fa39d.jpg" alt="avater" />
                </figure>
                <div className="card-body items-center text-center lato px-0 pb-0">

                    <div className="card-title w-full flex justify-between">
                        <div className='tienne text-lg'>Hello</div>
                        {/* limit */}
                        <button className="w-16 btn btn-xs p-0 flex justify-between items-center gap-0 rounded-2xl border-0 bg-myblack lato">
                            <div className="  h-full w-1/2 rounded-l-2xl p-1.5 text-mywhite ">8</div>
                            <div className="bg-mylight-gray h-full w-1/2 rounded-r-2xl p-1.5">9</div>
                        </button>


                    </div>

                    <p className='lato font-normal tracking-4 text-sm w-full text-[#000] px-0 mx-0 pt-4 pb-0' style={{ wordSpacing: '5px' }}>
                        Use bold colors sparingly and neutrals generously. Use bold colors sparingly and neutrals generously</p>

                    <div className="w-full card-actions gap-2 pt-0 pb-0 place-content-end">
                        <div className="lg:tooltip" data-tip="Jon Chat">
                            <button className="text-2xl text-myred"><FiPlusCircle /></button>
                        </div>
                        <div className="lg:tooltip" data-tip="Share Link">
                            <button className="text-2xl text-mypink"><RiShareBoxLine /></button>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}




