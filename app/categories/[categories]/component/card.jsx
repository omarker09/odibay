"use client"
import React, { useEffect } from 'react'
import steamLogo from "../../../../public/collectble/steamblack.svg"
import Image from 'next/image';
import "./catstyles.css"
import "../../../globals.css"
import { IoHeartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, addToStorage } from '@/app/redux/slices/cartSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Card(props) {
    const dispatch = useDispatch()
    const selectCart = useSelector((state) => state.cart)
    const [open, setOpen] = React.useState(false);
    const payload = {
        id: props.id,
        title: props.title,
        promo_price: props.promo_price,
        price: props.price,
        img: props.image,
        product_token: props.token
    }
    const cart = {
        product_token: props.token
    }
    function handleDispatchEvent() {
        dispatch(addToCart(payload))
        // dispatch(addToStorage(payload))
        console.log(selectCart);
        if (isInCart) {
            handleClose()
        } else {
            handleClick()
        }
    }
    const isInCart = selectCart.some(product => product.id === props.id);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
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
                            <button onClick={() => { handleDispatchEvent() }} className=' text-base orange-background p-2 px-2 sm:px-5  flex items-center gap-2 text-black rounded-md'>
                                {isInCart ? "In Cart" : "Add"}
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
                    width={160}
                    height={160}
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
                        <p className=' text-gray-500 line-through text-xs sm:text-sm font-medium'>${props.promo_price}</p>
                        <p className=' orange-text-colo  text-sm sm:text-base font-medium'>${props.price}</p>
                    </div>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    This Product has been added into Your cart !!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Card