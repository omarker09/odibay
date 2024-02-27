"use client"
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import steamLogo from "../../../../public/collectble/steamblack.svg"
import Image from 'next/image';
import Link from 'next/link';
import "./catstyles.css"
import "../../../globals.css"
import darksouls from "../../../../public/imgs/dark souls.avif"
import { GoHeartFill } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

function Card(props) {
    return (
        <div className='parent-hov cursor-pointer lg:w-full h-auto  boxsh2 rounded-xl cart-box flex items-center relative flex-col'>
            <div style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12, borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }} className=' background-transparent-black z-50 w-full h-full  absolute'>
                <div style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12 }} className=' w-full h-4/5 flex justify-center relative flex-col items-center'>
                    <div className=' absolute top-3 right-3 hide-btns'>
                        <button className=' text-white text-2xl'>
                            <IoHeartOutline />
                        </button>
                    </div>
                    <div className='hide-btns flex flex-col items-center gap-3'>
                        <h1 className=' text-white text-lg font-medium'>{props.title}</h1>
                        <div className=' flex items-center gap-3'>
                            <button className=' text-base orange-background p-2 px-2 sm:px-5 flex items-center gap-2 text-black rounded-md'>
                                View
                                <FaArrowCircleRight />
                            </button>
                            <button className=' text-base orange-background p-2 px-2 sm:px-5  flex items-center gap-2 text-black rounded-md'>
                                Add
                                <FaCartShopping />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12 }} className=' w-full h-auto relative '>
                <Image
                    src={props.image}
                    className='w-full h-full object-cover'
                    layout='responsive'
                    style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12 }}
                />
            </div>
            <div style={{ borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }} className=' w-full h-auto px-4 cart-box flex justify-between items-center'>
                <Image
                    height={80}
                    width={80}
                    src={steamLogo}
                    className=' z-50 hidden sm:flex'
                />
                <div className=' z-50 flex w-full justify-between h-full  sm:w-auto sm:justify-center items-center gap-3'>
                    <div className=' p-1 promor-perc rounded-md px-2 flex items-center justify-center'>
                        <h1 className=' text-white text-sm sm:text-base font-medium'>-30%</h1>
                    </div>
                    <div className=' p-1 flex flex-col h-full justify-between items-center '>
                        <p className=' text-gray-500 line-through text-xs sm:text-sm font-medium'>$29.99</p>
                        <p className=' orange-text-colo line-through text-sm sm:text-base font-medium'>$24.99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card