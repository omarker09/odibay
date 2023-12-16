"use client"
import Image from 'next/image';
import cute from '../public/winter/cute.jpg';
import React, { useRef, useState } from 'react';

function Bannersm() {


    return (
        <div className='h-auto w-full px-2 flex sm:px-10 flex-col  gap-4 justify-start items-start rounded-lg text-white'>
            <div className='flex flex-col gap-0 justify-start'>
                <h1 className='nav-background-text text-2xl font-bold'>Get more out of GIXIFY.COM</h1>
                <p className='text-gray-500'>Explore exclusive programs and projects designed to enhance your experience</p>
            </div>
            <div className='flex w-full items-start'>

                <div
                    className=' gridiant w-full flex flex-col items-start justify-center h-52 py-3 px-10 rounded-lg duration-200 boxshadow-b'
                >
                    <div className='flex flex-col items-start gap-1'>
                        <p>25% off</p>
                        <h1 className='text-white text-3xl font-extrabold'>Winter Is Coming</h1>
                        <p>dec 7 - jan 25</p>
                        <button className='button-hov duration-500 mt-2 p-1 px-5 rounded-lg'>Shop</button>
                    </div>
                </div>

                <div style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }} className='hidden bg-slate-400'>
                    <Image
                        style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }}
                        src={cute}
                        className='h-52 w-96 object-cover'
                    />
                </div>
            </div>
        </div>
    );
}

export default Bannersm;
