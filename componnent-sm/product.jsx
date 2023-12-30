"use client"
import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
function Product(props) {
  const [isDiscount,setIsdicount] = useState(false)
  useEffect(() => {
    if (!props.dicountprice) {
      setIsdicount(true)
    }
  }, [])
  return (
    <div className=' boxshadow duration-200 flex flex-col justify-between   border border-1  relative border-gray-300  w-full rounded-lg' >
      <div style={{ borderTopRightRadius: 8}} className={props.discount ? ' bg-red-600 text-white px-4 py-1 absolute top-0 right-0' : "hidden"}>
        {props.discount}{props.discount ? '% OFF' : ""}
      </div>
      <Image
        height={props.height}
        width={props.width}
        src={props.img}
        alt='Red Dead Redemption 2'
        style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
        className=' select-none nodrag'
      />
      <div className=' flex flex-col gap-1 select-none nodrag p-2 w-full justify-start items-start'>
        <div className=' flex items-center justify-between w-full'>
        {props.category.length > 11 ? props.category.slice(0, 11) + "..." : props.category}
          <Link className=' p-1 text-xs  text-black' href={"/"}>Details</Link>
        </div>
        <h1 className=' text-bold text-md'> {props.title.length > 20 ? props.title.slice(0, 16) + "..." : props.title}</h1>
        <div className=' flex flex-col gap-0 items-start w-full justify-between'>
          <div className=' w-full items-center flex flex-col justify-start'>
            <div className=' flex  w-full gap-1 items-start justify-start'>
              <span className={isDiscount ? 'hidden' : ' text-gray-400 font-bold text-xs sm:text-sm line-through'}>{props.dicountprice} </span>
              <span className=' text-blue-950 font-bold text-xs sm:text-sm'>{props.price} DZD</span>
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
          <button className=' w-full nav-top-background text-xs lg:text-sm  px-1 md:px-3 lg:px-5 py-1 text-white rounded'>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product