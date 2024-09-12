import React from "react";
import { TbMultiplier1X } from "react-icons/tb";
import {  
    PlayIcon, 
    ForwardIcon, 
    ArrowPathRoundedSquareIcon 
  } from "@heroicons/react/20/solid";
//   import { BoltIcon } from "@heroicons/react/24/outline"; 

export function PlayControls() {
    return (
        <div className="flex space-x-20">
            <button><TbMultiplier1X className="w-10 h-10 font-thin"/></button>
            <button><ForwardIcon className="text-gray-500 w-10 h-10 rotate-180"/></button>
            <button><PlayIcon className="size-20 box-content h-10 w-10 borderHeight-20 border-2 rounded-lg border-black"/></button>
            <button><ForwardIcon className="w-10 h-10"/></button>
            <button><ArrowPathRoundedSquareIcon className="w-10 h-10"/></button>
        </div>
    )
}