import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { GoFilter } from "react-icons/go";

export default function Search() {
    const [isFocused, setIsFocused] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="relative my-3 md:my-4 w-full md:w-2/5 rounded-full shadow-sm text-mygray bg-gray-light2">
            {/* Icon that acts as a placeholder */}
            {!isFocused && (
                <div className="absolute inset-y-3 left-4 md:left-6 flex items-center pointer-events-none">
                    <FiSearch className="text-xl text-mylight-gray" />
                </div>
            )}
                    <input type="text"
                className="block w-full z-20 rounded-full border-0 md:py-3 py-2.5 md:pl-10 pl-8 md:pr-16 pr-10 
                focus:outline-none focus:ring-1 text-myblack bg-gray-light2"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            {/* Filter icon button */}
            <button 
                className="absolute inset-y-3 right-4 md:right-6 flex items-center"
                onClick={toggleFilters}
            >
                <GoFilter className="text-xl text-mylight-gray" />
            </button>
           
            {showFilters && (
                <div className="absolute bg-mydark-white right-0  w-24 rounded-md shadow-xl z-40">
            
                    <a href="#" className="block px-4 py-2 text-sm capitalize hover:bg-mygray rounded-t-md text-mylight-black">
                        Newest
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm capitalize  hover:bg-mygray rounded-b-md text-mylight-black ">
                        Has Limit
                    </a>
                  
                </div>
            )}
        </div>
    );
}
