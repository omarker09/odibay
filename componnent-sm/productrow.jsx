"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function Productrow(props) {
    const [isDiscount, setIsdicount] = useState(false)
    const [afterDiscount, setAfterDiscount] = useState(0)
    const oldprice = props.oldprice
    const perc = props.discount
    function CalcuLateDiscount(oldprice, perc) {
        const percentageCalc = (oldprice * perc) / 100;
        const DiscountAmount = oldprice - percentageCalc;
        return DiscountAmount
    }

    useEffect(() => {
        if (!props.dicountprice) {
            setIsdicount(true)
        }


    }, [])
    return (
        <div className=' boxshadow duration-200 flex   justify-between   border border-1  relative border-gray-300  w-full rounded-lg' >
            <div style={{ borderTopRightRadius: 8 }} className={props.discount ? ' bg-red-600 text-white px-4 py-1 absolute top-0 right-0' : "hidden"}>
                {props.discount}{props.discount ? '% OFF' : ""}
            </div>
            <div className=' p-2 flex items-center justify-center'>
                <Image
                    height={props.height}
                    width={props.width}
                    src={props.img}
                    alt='Red Dead Redemption 2'
                    style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                    className=' select-none nodrag'
                />
            </div>


            <div className=' flex flex-col gap-1 select-none nodrag p-2 w-full justify-center items-start'>

                <div className=' flex w-full flex-col gap-2'>
                    <div className=' flex items-center justify-start w-full'>
                        {props.category.length > 11 ? props.category.slice(0, 11) + "..." : props.category}
                    </div>
                    <h1 className=' text-bold text-md'>{props.title.length > 20 ? props.title.slice(0, 16) + "..." : props.title}</h1>
                    <div className=' flex flex-col gap-0 items-start w-full justify-between'>
                        <div className=' w-full items-center flex flex-col justify-start'>
                            <div className=' flex  w-full gap-0 items-start justify-start'>
                                <div className={!props.oldprice ? ' hidden' : "flex items-center gap-2"}>
                                    <span className='text-gray-400 font-bold text-xs sm:text-sm line-through'>{!props.oldprice ? "" : props.oldprice} </span>
                                    <span className=' text-blue-950 font-bold text-xs sm:text-sm'>  {!CalcuLateDiscount(oldprice, perc) ? "" : CalcuLateDiscount(oldprice, perc) + " DZD"} </span>
                                </div>
                                <span className={props.oldprice ? " hidden" : ' text-blue-950 font-bold text-xs sm:text-sm'}>  {!props.price ? "No price included" : props.price} {!props.price ? "" : "DZD"}</span>
                            </div>
                            <div className=' w-full items-start'>
                                < Box
                                    sx={{
                                        '& > legend': { mt: 1 },
                                    }}
                                >
                                    <Rating name="read-only" size="small" value={props.rating} readOnly />
                                </Box >
                            </div>
                        </div>
                        <div className=' flex flex-wrap items-center w-full justify-between pr-6'>
                            <button className={!props.price && !props.oldprice ? ' w-40 bg-gray-500 cursor-no-drop text-xs lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded' : ' w-40 text-xs nav-top-background lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded'}>add to cart</button>
                            <Link className={!props.price && !props.oldprice ? ' p-1 text-xs cursor-no-drop text-black underline' : ' p-1 text-xs cursor-pointer text-black underline'} href={"/"}>See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productrow