import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import "../globals.css"

function Trusted() {
    return (
        <div className='bg-black my-4 px-2 py-5 sm:px-10 md:px-16 lg:px-20 items-center justify-center gap-3 sm:justify-between h-44 flex '>
            <div className=' trst-one items-center gap-3 py-5'>
                <div>
                    <SlSpeedometer className=' text-white h-11 lg:h-16 w-8 lg:w-10  text-xl lg:text-2xl' />
                </div>
                <div>
                    <h1 className='orange-text-colo text-xl'>Super fast</h1>
                    <p className=' text-gray-400 text-lg'>Instant digital download</p>
                </div>
            </div>

            <span style={{ width: 1 }} className=' h-full trst-one bg-gray-800'></span>

            <div className=' trst-two items-center gap-3 py-5'>
                <div>
                    <MdVerified className=' text-white h-14 w-9 lg:h-16 lg:w-16 text-2xl' />
                </div>
                <div>
                    <h1 className='orange-text-colo text-lg lg:text-xl'>Reliable & safet</h1>
                    <p className=' text-gray-400 text-base lg:text-lg'>Over 10,000 games</p>
                </div>
            </div>

            <span style={{ width: 1 }} className=' h-full trst-two bg-gray-800'></span>

            <div className=' trst-three items-center gap-3 py-5'>
                <div>
                    <RiCustomerService2Fill className=' text-white h-16 w-12 md:h-14 md:w-9 lg:h-16 lg:w-16 text-2xl' />
                </div>
                <div>
                    <h1 className='orange-text-colo text-xl md:text-lg lg:text-xl'>Customer support</h1>
                    <p className=' text-gray-400 text-lg md:text-base lg:text-lg'>Human support 24/7</p>
                </div>
            </div>
            <span style={{ width: 1 }} className=' h-full trst-three bg-gray-800'></span>
            <div className=' flex items-center gap-3 py-5'>
                <div>
                    <MdVerified className=' text-white h-16 w-12 md:h-14 md:w-9 lg:h-16 lg:w-16 text-2xl' />
                </div>
                <div>
                    <h1 className='orange-text-colo text-xl md:text-lg lg:text-xl'>Reliable & safet</h1>
                    <p className=' text-gray-400 text-lg md:text-base lg:text-lg'>Over 10,000 games</p>
                </div>
            </div>
        </div>
    )
}

export default Trusted