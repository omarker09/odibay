"use client"
import React from 'react'
import { useTheme } from 'next-themes';
function Sectionads2() {
    const { theme, setTheme } = useTheme()
    const bgColorClassTheme = theme === 'dark' ? 'cart-parent' : 'bg-white';
    return (
        <div className={theme !== "dark" ? ' w-full flex bg-white items-center justify-center py-6 ' : ' w-full flex items-center justify-center py-6 '}>
            <div className='adsbackground2 py-1 h-60 z-50 w-full text-center flex flex-col gap-2 items-center text-white justify-center  px-28'>
                <h1 className='  md:text-4xl lg:text-6xl font-bold uppercase'>Beat the Clock</h1>
                <h1 className=' text-2xl font-bold uppercase'>lots of opurtounity</h1>
            </div>
        </div>
    )
}

export default Sectionads2