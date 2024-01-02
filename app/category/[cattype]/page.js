"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import Categorypage from '@/components/categorypage'
import { NextUIProvider } from "@nextui-org/react";

function page() {
  return (
    <NextUIProvider>
      <div className=''>
        <Navbar />
        <Categorypage />
      </div>
    </NextUIProvider>

  )
}

export default page