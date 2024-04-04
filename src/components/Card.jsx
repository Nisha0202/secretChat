import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { RiShareForwardFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

export default function Card({ data }) {
    return (
        <div>
            <div className="card w-48 md:w-52 h-[340px] md:h-[340px] shadow-xl shadow-myblack px-2 md:px-4 py-4 border-[1px] border-mylight-gray
            hover:transform hover:bg-myblack ">
                <figure className="w-24 h-24 rounded-full mx-auto border-[1px] border-myblack relative">
                    <img className='w-24 h-24 object-cover' src={data.avater} alt="avater" />
                    <div className="absolute inset-0 bg-myblack opacity-10 rounded-full"></div>
                </figure>
                <div className="card-body items-center text-center lato px-0 pb-0">
                    <div className="w-full flex justify-between items-center">
                        <div className='tienne text-base text-mywhite-two text-start'>{data.chatRoomName}</div>
                        {/* limit */}
                        <button className="w-[52px] btn btn-xs p-0 flex justify-between items-center gap-0 rounded-xl border-0 bg-mylight-black lato">
                            <div className=" w-1/2 rounded-l-xl p-1 lg:tooltip bg-mylight-gray" data-tip="limit">{data.currentMembers}</div>
                            <div className="w-1/2 rounded-r-xl p-1  text-mydark-white bg-mygray  ">{data.totalLimit}</div>
                        </button>

                    </div>

                    <p className='lato font-normal tracking-4 text-sm w-full px-0 mx-0 py-2 text-mylight-gray'
                        style={{ wordSpacing: '5px' }}>
                        {data.description}</p>


                    <div className='flex justify-between items-center w-full card-actions mt-2'>
                        <div className='flex gap-2 items-center mb-1.5'>
                            <button className='btn btn-xs rounded-full text-xs font-bold bg-mywhite-two border-0'>{data.category}</button>
                            {/* <button className='btn btn-xs rounded-full text-xs bg-mygray border-0'>#Tags2</button> */}
                        </div>
                        <div className="flex gap-2 ">
                            <div className="lg:tooltip" data-tip="Jon Chat">
                                <button className="text-2xl text-myred"><FiPlusCircle /></button>
                            </div>
                            <div className="lg:tooltip" data-tip="Share Link">
                                <button className="text-2xl text-mypink"><RiShareForwardFill /></button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}




