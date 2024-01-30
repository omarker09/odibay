'use client'
import React from 'react'
import ads from "../../public/ads.avif"
import Test from "../../public/test.avif"
import Image from 'next/image'
import "../globals.css"
import { useTheme } from 'next-themes'
function SectionAds() {
    const {theme,setTheme} = useTheme()
    const bgColorClassTheme = theme === 'dark' ? 'cart-box' : 'bg-white';
    return (
        <div className=' relative w-full h-auto bg-slate-500'>
            <div className='adsbackground   h-60 z-50 w-full text-center flex flex-col gap-2 items-center text-white justify-center  px-28'>
                <h1 className='  md:text-4xl lg:text-6xl font-bold uppercase'>Beat the Clock</h1>
                <h1 className=' text-2xl font-bold uppercase'>lots of opurtounity</h1>
            </div>
            <div className={theme !== "dark" ? ' w-full duration-300 bg-black boxsh2  flex text-center items-center justify-center' : ' w-full bg-white boxsh2  duration-300 flex text-center items-center justify-center'}>
                <h1 className={` duration-300 ${theme !== "dark" ? "text-white" : "text-black"} p-3`}>SAVE AN EXTRA 10% USING BUNDLESAVER10 AT CHECKOUT</h1>
            </div>
        </div>
    )
}

export default SectionAds