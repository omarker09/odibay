"use client"

import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import Footer from '@/components/footer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CustomizedTooltips from '@/components/muicomponent/tooltip';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import imgTest from "../../public/collectble/netflix.png"
import Steamicon from "../../public/imgs/steam.svg"
import SteamiconDark from "../../public/imgs/steam-black.svg"
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import dzFlag from "../../public/flags/DZ.avif"
import LockIcon from '@mui/icons-material/Lock';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../redux/slices/cartSlice';
import { useTheme } from 'next-themes';

export default function Cart() {
    const selectCart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const { theme, setTheme } = useTheme()
    const totalPrice = selectCart.reduce((acc, current) => {
        return acc += current.price
    }, 0)
    useEffect(() => {
        console.log(selectCart);
    }, [])
    return (
        <div className=' flex w-full flex-col justify-between h-auto'>
            <Navbar />
            <div className={theme !== "dark" ? ' duration-300 bg-gray-100 w-full h-auto  px-2 sm:px-10 md:px-16 lg:px-20 gap-4 flex-col  flex py-10 items-center justify-center' : 'duration-300 cart-parent w-full h-auto  px-2 sm:px-10 md:px-16 lg:px-20 gap-4 flex-col  flex py-10 items-center justify-center'}>
                <div className=' w-full'>
                    <h1 className={theme !== "dark" ? ' text-black text-3xl' : ' text-white text-3xl'}><LockIcon /> Your Secure Cart </h1>

                </div>
                <div className=' w-full gap-5 flex flex-col lg:flex-row '>

                    <div className=' w-full gap-4 flex flex-col'>
                        <div className=' flex items-center justify-between border border-4 p-3 border-orange-400'>
                            <div>
                                <h1 className=' text-green-600 text-xl font-bold'>EXCLUSIVE OFFER</h1>
                                <p className={theme !== "dark" ? ' text-black ' : ' text-white'}>Get 2 Mystery Windows PC Games on Steam for only $1.90</p>
                            </div>
                            <div>
                                <button className=' orange-background py-3 px-5 text-black rounded-md'>Add to Cart</button>
                            </div>
                        </div>
                        <div className=' w-full flex gap-2 flex-col'>
                            <div className={selectCart.length < 1 ? 'flex': "hidden"}>
                                <div className={theme !== "dark" ? ' w-full p-3 pr-6 flex items-center gap-3 rounded-lg bg-white box-shadow justify-center' : ' w-full p-3 pr-6 flex items-center gap-3 rounded-lg cart-box box-shadow justify-center'}>
                                    <h1 className={theme !== "dark" ? "text-black text-lg" : "text-white text-lg"}>Cart is Empty !!</h1>
                                </div>
                            </div>
                            {selectCart.map((product, index) => {
                                return <div className={theme !== "dark" ? ' w-full p-3 pr-6 flex items-center gap-3 rounded-lg bg-white box-shadow' : ' w-full p-3 pr-6 flex items-center gap-3 rounded-lg cart-box box-shadow'}>
                                    <div className='w-full flex items-center gap-3 '>
                                        <Image
                                            src={product.img}
                                            height={140}
                                            width={140}
                                            className=' rounded-lg'
                                        />
                                        <div className=' flex flex-col items-start gap-2'>
                                            <h1 className={theme !== "dark" ? ' text-black font-bold' : ' text-white font-bold'}>{product.title}</h1>
                                            <Image
                                                src={theme !== "dark" ? SteamiconDark : Steamicon}
                                                height={60}
                                                width={60}
                                            />
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-6'>
                                        <div>
                                            <h1 className={theme !== "dark" ? ' text-black ' : ' text-white '}>-16%</h1>
                                        </div>
                                        <div>
                                            <h1 className=' text-gray-400  line-through '>{product.promo_price}$</h1>
                                            <h1 className=' orange-text-colo text-lg'>{product.price}$</h1>
                                        </div>
                                        <Tooltip title="Move to wishlist" arrow>
                                            <FavoriteIcon className={theme !== "dark" ? ' cursor-pointer text-black' : ' cursor-pointer text-white'} />
                                        </Tooltip>

                                        <Tooltip onClick={() => { dispatch(removeCart(product)) }} title="Remove from cart" arrow>
                                            <CloseIcon className={theme !== "dark" ? ' cursor-pointer text-black' : ' cursor-pointer text-white'} />
                                        </Tooltip>
                                    </div>
                                </div>

                            })}

                            {/* the cart data will end here */}
                        </div>
                        <div className={theme !== "dark" ? 'bg-white box-shadow w-full flex items-center justify-around rounded-lg p-3' : 'cart-box box-shadow w-full flex items-center justify-around rounded-lg p-3'}>

                            <div className=' flex items-center justify-center text-center gap-1 p-3'>
                                <LockIcon className={theme !== "dark" ? ' text-black text-center' : ' text-white text-center'} />
                                <p className={theme !== "dark" ? ' text-black  flex items-center gap-2' : ' text-white  flex items-center gap-2'}>100% Safe and Secure <CustomizedTooltips size={15} title="Gift this to friend" description1="give this as a gift to your friend" description2="via email address" /></p>

                            </div>

                            <div className=' flex items-center justify-center text-center gap-1 p-3'>
                                <div className=' flex items-center'>
                                    <Image
                                        src={dzFlag}
                                        height={25}
                                        width={25}
                                    />
                                </div>
                                <span className={theme !== "dark" ? ' text-black flex items-center gap-2' : ' text-white flex items-center gap-2'}>Activates in Algeria   <CustomizedTooltips size={15} title="Gift this to friend" description1="give this as a gift to your friend" description2="via email address" /></span>

                            </div>

                            <div className=' flex items-center justify-center text-center gap-1 p-3'>
                                <CheckCircleIcon className={theme !== "dark" ? ' text-black text-center' : ' text-white text-center'} />
                                <span className={theme !== "dark" ? ' text-black flex items-center gap-2' : ' text-white flex items-center gap-2'}>Instant Digital Delivery* <CustomizedTooltips className=" bg-black text-black" size={15} title="Gift this to friend" description1="give this as a gift to your friend" description2="via email address" /></span>

                            </div>
                        </div>
                    </div>

                    <div className={theme !== "dark" ? ' bg-white box-shadow w-full lg:w-96 rounded-lg py-5 px-5 gap-4 justify-between flex flex-col' : ' justify-between cart-box box-shadow w-full lg:w-96 rounded-lg py-5 px-5 gap-4 flex flex-col'}>
                        <div>
                            <h1 className={theme !== "dark" ? ' text-xl text-black' : ' text-xl text-white'}>Cart Summary</h1>
                        </div>
                        <div className=' flex items-center justify-between'>
                            <h1 className=' text-x text-gray-400'>Full Price</h1>
                            <h1 className=' text-x  text-gray-400'>0.00$</h1>
                        </div>
                        <Divider className=' bg-gray-400' />
                        <div className=' flex items-center justify-between'>
                            <h1 className={theme !== "dark" ? ' text-2xl text-black font-semibold' : ' text-2xl text-white font-semibold'}>Total : </h1>
                            <h1 className=' text-2xl orange-text-colo font-semibold'>{totalPrice}$</h1>
                        </div>
                        <div>
                            <h1 className=' text-x text-gray-400'>Prices displayed in US Dollar</h1>
                        </div>
                        <div className=' w-full  items-center px-3 py-3 flex gap-2 bg-black'>
                            <input type='checkbox' className=' text-lg h-4 w-4' />
                            <CardGiftcardIcon className=' text-white text-base' />
                            <h1 className=' text-lg text-white'>Gift this order</h1>
                            <CustomizedTooltips title="Gift this to friend" description1="give this as a gift to your friend" description2="via email address" />
                        </div>
                        <button className=' orange-background uppercase w-full flex items-center justify-center text-center py-3 px-5 text-black rounded-md'>
                            <LockIcon />
                            <div className='uppercase w-full flex items-center justify-center text-center font-bold  text-black rounded-md'> Proceed To Checkout</div>
                        </button>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
}