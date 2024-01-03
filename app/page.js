'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
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
export default function Home() {
  return (
    <NextUIProvider>
      <div className=' h-full flex flex-col gap-0 w-full bg-white '>
        <Navbar />
        <Banner />
        <div className=' h-full flex flex-col gap-8 w-full  '>
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
    </NextUIProvider>

  )
}
