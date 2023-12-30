import React from 'react'
import Image from 'next/image'
import img1 from "../public/collectble/ouadkniss.svg"
import ProjectLogo from "../public/project-logo.png"
import "../app/globals.css"
import Divider from '@mui/material/Divider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import Link from 'next/link'
function Footer() {
  return (
    <div className='flex flex-col pb-16 h-auto nav-background p-6  sm:pb-0'>
      <div className=' w-full flex flex-col gap-4 items-center sm:items-start px-2 sm:px-10'>
        <Image
          src={ProjectLogo}
          width={205}
          height={205}
        />
        <span className=' text-white text-center text-xs sm:text-start'>
          A specialized company offering digital gift cards and games, we have been in operation for more than 3 years. Our commitment to delivering the best services and products extends primarily to Algeria and the Arab region.
        </span>
        <div>
          <button className=' bg-green-500 w-52 justify-center p-2 flex items-center gap-2 rounded-md text-center text-white'><WhatsAppIcon fontSize='small'/>  WhatsApp </button>
        </div>
      </div>

      <div className=' w-full grid grid-cols-1 h-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 px-2 sm:px-10 gap-3  items-center justify-center py-6 nav-background'>
        <div className=' flex flex-col gap-6 justify-center  h-full'>

          <div className=' flex flex-col gap-5 items-center sm:items-start  justify-start '>
            <h1 className=' text-white'>Soulotions</h1>
            <div className=' flex flex-col items-center sm:items-start gap-2'>
              <Link href={"/"} className=' no-underline text-gray-400'>Control</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Control Scalibilyty</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>System Managment</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Digigtal Assistant Managment</Link>
            </div>
          </div>
        </div>

        <div className=' flex flex-col gap-6 justify-center  h-full'>
          <div className=' flex flex-col gap-5 items-center sm:items-start justify-start '>
            <h1 className=' text-white'>Soulotions</h1>
            <div className=' flex flex-col items-center sm:items-start gap-2'>
              <Link href={"/"} className=' no-underline text-gray-400'>Control</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Control Scalibilyty</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>System Managment</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Digigtal Assistant Managment</Link>
            </div>
          </div>
        </div>


        <div className=' flex flex-col gap-6 justify-center  h-full'>
          <div className=' flex flex-col gap-5 items-center sm:items-start justify-start'>
            <h1 className=' text-white'>Soulotions</h1>
            <div className=' flex flex-col items-center sm:items-start gap-2'>
              <Link href={"/"} className=' no-underline text-gray-400'>Control</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Control Scalibilyty</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>System Managment</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Digigtal Assistant Managment</Link>
            </div>
          </div>
        </div>


        <div className=' flex flex-col gap-6 justify-center  h-full'>
          <div className=' flex flex-col gap-5 items-center sm:items-start justify-start '>
            <h1 className=' text-white'>Soulotions</h1>
            <div className=' flex flex-col items-center sm:items-start gap-2'>
              <Link href={"/"} className=' no-underline text-gray-400'>Control</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Control Scalibilyty</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>System Managment</Link>
              <Link href={"/"} className=' no-underline text-gray-400'>Digigtal Assistant Managment</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full px-2 sm:px-10'>
        <Divider className=' text-white bg-gray-600' />
      </div>
      <div className=' w-full flex items-center flex-wrap justify-center gap-2 sm:justify-between py-5 px-2 sm:px-10'>
        <p className=' text-white text-xs'>Copyright © 2023 Gixify.com , All rights reserved</p>
        <div className=' flex items-center gap-2'>
          <p className=' text-white text-xs'>Email : omardev@gmail.com</p>
          <p className=' text-white text-xs'>Phone : +213 792028538</p>
        </div>
      </div>
    </div>
  )
}

export default Footer