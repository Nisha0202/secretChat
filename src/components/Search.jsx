import React from 'react'
import { FiSearch } from "react-icons/fi";
export default function Search() {
    return (
        <div>
            <div>
                <div className="relative my-3 md:my-4 max-w-xl rounded-full shadow-sm text-mygray">
                    <input type="text" 
                    className="block max-w-xl rounded-full border-0 md:py-3 py-2.5 md:pl-6 pl-4 md:pr-56 pr-24 text-mygray 
                    focus:outline-none focus:ring-4  placeholder:text-mylight-gray"
                    placeholder="Search Your Chat Room" />
                    <div className="absolute inset-y-3 right-4 md:right-6 flex items-center">
                        <div className=" border-0 bg-transparent text-xl text-mylight-gray">
                            <FiSearch />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
