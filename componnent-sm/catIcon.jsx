import React from 'react'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import Link from "next/link";
import { useSelector } from 'react-redux';
function CatIcon(props) {
  const isLight = useSelector(state => state.themeSlice.isLight);
  return (
    <div className={isLight ? ' flex items-center   p-2 outline w-full h-auto outline-1  outline-gray-200 justify-between ' : ' flex items-center   p-2 outline w-full h-auto outline-1  outline-gray-400 justify-between '}>
        <div className=' flex  flex-col justify-start  items-start'>
            <Link href={props.path} className='orange-text-colo'>{props.title}</Link>
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