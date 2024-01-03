"use client"

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { trigerdon, trigerdoff } from "@/app/redux/slices/testSlice";
import Image from 'next/image'
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gtv from "../public/collectble/gtv.png"
import pf from '../public/collectble/iptvcard.png'
import gtav from "../public/collectble/red-dead.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './footer'
import Productrow from '@/componnent-sm/productrow';
import Bottomtabs from './bottomtabs';
import Navbar from './Navbar';


function Cart() {
    return (
        <div className='flex flex-col justify-between h-auto'>
            <Navbar/>
            <div className=' flex flex-col justify-between relative h-96    bg-black '>      
            </div>
            <Footer />
            <Bottomtabs />
        </div >
    )
}

export default Cart


