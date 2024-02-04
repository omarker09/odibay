"use client"

// main
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import CartDrawer from '@/components/cartDrawer'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import Link from "next/link";
import "../app/globals.css"
// redux toolkit
import { addProduct } from '@/app/redux/slices/cartSlice'
import { useTheme } from 'next-themes'
// Material ui
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// alert mui
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Product(props) {
  const [isDiscount, setIsdicount] = useState(false)
  const [isFree, setIsFree] = useState("")
  const [afterDiscount, setAfterDiscount] = useState(0)
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openDrawer, setOpenDrawer] = useState(true)
  const { theme } = useTheme()
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
    <div key={props.id} className=' boxshadow duration-200 flex flex-col justify-between   relative  w-full rounded-lg' >
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
      <div key={props.title} className={theme !== "dark" ? ' mr-2 border border-gray-200 rounded-lg w-full' : ' mr-2 w-full cart-box rounded-lg'} >
        <Image
          height={290}
          width={290}
          src={props.img}
          alt='Red Dead Redemption 2'
          style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
          className=' no-drag-img no-drag-text'
        />
        <div className=' flex flex-col gap-1 select-none nodrag p-2 w-full justify-start items-start'>
          <div className=' flex items-center justify-between w-full'>
            <p className={theme !== "dark" ? ' text-xs lg:text-sm text-gray-400' : ' text-xs lg:text-sm text-white'}>{props.category}</p>
            <Link className={theme !== "dark" ? 'p-1 text-xs lg:text-sm text-black' : 'p-1 text-xs lg:text-sm text-white'} href={"/"}>Details <ArrowForwardIosIcon className=' text-xs text-black  ' fontSize='small' /></Link>
          </div>
          <h1 className={theme !== "dark" ? ' text-bold text-md' : ' text-bold text-gray-200 text-md'}>{props.title}</h1>
          <div className=' flex flex-col gap-2 items-start w-full justify-between'>
            <div className=' w-full items-center flex justify-between'>
              <span className={theme !== "dark" ? 'font-bold text-black text-xs sm:text-sm' : 'font-bold text-orange-400 text-xs sm:text-sm'}>{props.price} DZD</span>
              < Box
                sx={{
                  '& > legend': { mt: 2 },
                }}>
                <Rating name="read-only" size="small" value={5} readOnly />
              </Box >
            </div>
            <button className={theme !== "dark" ? ' w-full duration-300 hover:opacity-70 orange-background text-xs lg:text-sm  px-1 md:px-3 lg:px-5 py-2 text-black rounded' : ' w-full duration-300 hover:opacity-70 orange-background text-xs lg:text-sm  px-1 md:px-3 lg:px-5 py-2 text-black rounded'}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product