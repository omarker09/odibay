'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { trigerdon, trigerdoff } from "@/app/redux/slices/testSlice";
import Navbar from '@/components/Navbar'
import Banner from '@/components/banner'
import Fastcategory from '@/components/fastcategory'
import Productsgroup from '@/components/productsgroup'
import Mainproducts from '@/components/mainproducts'
import Regulerproducts from '@/components/regulerproducts'
import Bannersm from '@/componnent-sm/bannersm'
import Smgroups from '@/components/smgroups'
import Footer from '@/components/footer'
import Bottomtabs from '@/components/bottomtabs';
import { NextUIProvider } from "@nextui-org/react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../app/globals.css"

export default function Home() {
  const [arrow, SetArrow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY >= 300) {
        SetArrow(true)
      } else {
        SetArrow(false)
      }
    })
  }, [])

  function handleUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className=' h-full flex flex-col gap-0 w-full bg-white '>
      <Navbar />
      <Banner />
      <div className=' h-full flex flex-col gap-8 w-full  '>
        <div style={{ zIndex: 666 }} onClick={() => { handleUp() }} className={arrow ? ' nav-background outline outline-1 outline-gray-600 hover:bg-gray-600 text-white fixed z-50 bottom-16 right-10 rounded-3xl duration-250 ' : ' nav-background text-white fixed z-50 bottom-3 outline-gray-600 hover:bg-gray-600 right-5 rounded-3xl duration-250 translate-x-52'}>
          <button className=' p-2'>
            <ArrowUpwardIcon />
          </button>
        </div>
        <Fastcategory />
        <Productsgroup />
        <Mainproducts />
        <Regulerproducts />
        <Bannersm />
        <Smgroups />
        <Footer />
        <div className=' h-full flex flex-col w-full  '>
          <Bottomtabs />
        </div>
      </div>
    </div>
  )
}
