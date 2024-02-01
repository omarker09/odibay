"use client"
import React from 'react'
import { useTheme } from 'next-themes';
import DoneIcon from '@mui/icons-material/Done';

function Offere1() {
    const { theme, setTheme } = useTheme()
    const bgColorClassTheme = theme === 'dark' ? 'cart-parent' : 'bg-white';
    return (
        <div className={theme !== "dark" ? ' py-5 flex items-center bg-white justify-center w-full px-2 sm:px-10 md:px-16 lg:px-20 ' : ' py-5 flex items-center cart-parent justify-center w-full px-2 sm:px-10 md:px-16 lg:px-20 '}>
            <div className=' w-full flex flex-col lg:flex-row items-start lg:items-center h-auto py-7 bg-black px-7 ju justify-between rounded-2xl'>

                <div className=' w-full lg:w-96 flex flex-col justify-start gap-4 h-full items-start'>
                    <div className='w-full'>
                        <h1 className=' text-white text-base uppercase'>New and improved Fanatical</h1>
                    </div>
                    <div className='w-full'>
                        <h1 className=' text-white text-3xl uppercase font-bold'>PC Game</h1>
                        <h1 className=' text-white text-3xl uppercase font-bold'>Price Comparison</h1>
                    </div>
                    <div className='w-full'>
                        <h1 className=' orange-text-colo text-xl uppercase font-bold'>Browser Extension</h1>
                    </div>
                </div>

                <div className=' w-full lg:w-4/6 flex flex-col gap-5 justify-between h-full items-start'>
                    <div>
                        <h1 className=' text-white text-base font-semibold'>Never miss a great deal with The Fanatical Extension</h1>
                    </div>
                    <div className=' flex items-start gap-6 '>
                        <div className=' flex flex-col gap-2'>
                            <span className=' text-white'><DoneIcon className=' text-base' /> Compare prices as you browse</span>
                            <span className=' text-white'><DoneIcon className=' text-base' /> Automatically apply coupons</span>
                            <span className=' text-white'><DoneIcon className=' text-base' /> Enchanced Privacy</span>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <span className=' text-white'><DoneIcon className=' text-base' /> Exclusive discounts</span>
                            <span className=' text-white'><DoneIcon className=' text-base' /> Safe and secure browser extension</span>
                        </div>
                    </div>
                    <div className=' w-full flex justify-center sm:justify-start lg:justify-end items-end'>
                        <button className='orange-background duration-300 hover:opacity-70 text-black p-2 px-10 rounded-lg'>Get the Fanatical Extension</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offere1