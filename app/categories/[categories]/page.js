"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import Categorycomp from "./component/categorycomp"
import { NextUIProvider } from "@nextui-org/react";

function page() {
  return (
      <div className=''>
        <Navbar />
        <Categorycomp/>
      </div>
  )
}

export default page