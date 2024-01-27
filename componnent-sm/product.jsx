"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import CartDrawer from '@/components/cartDrawer'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { addProduct } from '@/app/redux/slices/cartSlice'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Product(props) {
  const [isDiscount, setIsdicount] = useState(false)
  const [isFree, setIsFree] = useState("")
  const [afterDiscount, setAfterDiscount] = useState(0)
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openDrawer, setOpenDrawer] = useState(true)
  const handleClickSnack = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };
  const oldprice = props.oldprice
  const perc = props.discount
  const datas = useSelector((e) => e.cart)
  const dispatch = useDispatch()
  function handleAdd() {
    const data = {
      id: props.id,
      title: props.title,
      image: props.img,
      price: props.price
    }
    dispatch(addProduct(data))
    setOpenSnack(true)
  }
  useEffect(() => {
    const percentageCalc = (oldprice * perc) / 100;
    const DiscountAmount = oldprice - percentageCalc;
    setAfterDiscount(DiscountAmount)
  }, [])

  function CalcuLateDiscount(oldprice, perc) {
    const percentageCalc = (oldprice * perc) / 100;
    const DiscountAmount = oldprice - percentageCalc;

    if (perc === 100) {
      return "free"
    } else {

      return DiscountAmount + " DZD"
    }

  }
  useEffect(() => {
    if (!props.dicountprice) {
      setIsdicount(true)
      console.log(datas);
    }

  }, [])
  return (
    <div key={props.id} className=' boxshadow duration-200 flex flex-col justify-between   border border-1  relative border-gray-300  w-full rounded-lg' >
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
          <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
            {props.title} has been add to your Cart!
          </Alert>
        </Snackbar>
      </Stack>
      <div style={{ borderTopRightRadius: 8 }} className={props.discount ? ' bg-red-600 text-white px-4 py-1 absolute top-0 right-0' : " hidden"}>
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
          <Link className={!props.price && !props.oldprice ? ' p-1 text-xs cursor-no-drop text-black underline' : ' p-1 text-xs cursor-pointer text-black underline'} href={"/"}>See Details</Link>
        </div>
        <h1 className=' text-bold text-md'> {props.title.length > 20 ? props.title.slice(0, 16) + "..." : props.title}</h1>
        <div className=' flex flex-col gap-0 items-start w-full justify-between'>
          <div className=' w-full items-center flex flex-col justify-start'>
            <div className=' flex  w-full gap-0 items-start justify-start'>
              <div className="flex items-center gap-2">
                <span className={!props.oldprice ? "hidden" : 'text-gray-400 font-bold text-xs sm:text-sm line-through'}>{props.oldprice} </span>
                <span className=' text-blue-950 font-bold text-xs sm:text-sm'>  {props.price + " DZD"}</span>
              </div>
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
          <button onClick={() => { handleAdd() }} className={!props.price && !props.oldprice ? ' w-full bg-gray-500 cursor-no-drop text-xs lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded' : ' w-full text-xs nav-top-background lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded'}>add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product