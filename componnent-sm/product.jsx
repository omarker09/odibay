import React from 'react'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
function Product(props) {
  return (
    <div className=' border border-1 border-gray-300 w-full rounded-lg' >
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
          <p className=' text-xs lg:text-sm text-gray-400'>{props.category}</p>
          <Link className=' p-1 text-xs lg:text-sm text-black' href={"/"}>Details <ArrowForwardIosIcon className=' text-xs text-black  ' fontSize='small' /></Link>
        </div>
        <h1 className=' text-bold text-md'>{props.title}</h1>
        <div className=' flex flex-col gap-2 items-start w-full justify-between'>
          <div className=' w-full items-center flex justify-between'>
            <span className=' text-blue-950 font-bold text-xs sm:text-sm'>{props.price} DZD</span>
            < Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <Rating name="read-only" size="small" value={props.rating} readOnly />

            </Box >
          </div>
          <button className=' w-full nav-top-background text-xs lg:text-sm  px-1 md:px-3 lg:px-5 py-1 text-white'>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product