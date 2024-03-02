"use client"
import React from 'react'
import { useTheme } from 'next-themes';
function Sectionads3() {
    const { theme, setTheme } = useTheme()
    const bgColorClassTheme = theme === 'dark' ? 'cart-parent' : 'bg-white';
    return (
        <div className={theme !== "dark" ? ' w-full flex px-2 sm:px-10 md:px-16 lg:px-20 bg-white items-center justify-center py-6 ' : ' w-full flex px-2 sm:px-10 md:px-16 lg:px-20 cart-parent  items-center justify-center py-6 '}>
            <div className='adsbackground3 py-1 rounded-lg cursor-pointer h-60 z-50 w-full text-center flex flex-col gap-2 items-center text-white justify-center  px-28'>

            </div>
        </div>
    )
}

export default Sectionads3