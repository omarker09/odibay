'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ScrollTop from './scrollTop';
import Navbar from '../components/Navbar'
import Banner from '@/components/banner';
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
import ServerComp from "./serverComponent"

export default function Home() {
  return (
    <div className=' h-full flex flex-col gap-0 w-full bg-white '>
      <Navbar />
      <Banner />
      <div className=' h-full flex flex-col gap-8 w-full  '>
        <ScrollTop />
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
