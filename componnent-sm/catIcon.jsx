import React from 'react'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import Link from "next/link";

function CatIcon(props) {
  return (
    <div className=' flex items-center   p-2 outline w-full h-auto outline-1  outline-gray-200 justify-between '>
        <div className=' flex  flex-col justify-start  items-start'>
            <Link href={props.path} className=' text-blue-900'>{props.title}</Link>
            <span className=' text-gray-400 text-sm'>{props.smtitle}</span>
        </div>
        <div>
            <Image 
             src={props.img}
             height={35}
             width={35}

            />
        </div>
    </div>
  )
}

export default CatIcon