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
/*
  useEffect(() => {


    axios.post("http://localhost:3002/api/v1/auth/lg", {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        setLoading(false)
        setCookie("u_tk", resp.data.data.token, 30)
        const userData = [
          {
            username: resp.data.data.username,
            user_id: resp.data.data.user_id,
            email: resp.data.data.email
          }
        ]
        localStorage.setItem("u_inf", JSON.stringify(userData))
        console.log(resp.data);
        setErrorType("")
        router.replace("/").refresh()
      })
      .catch((e) => {
        setErrorType(e.data)
        console.log(e);
        setLoading(false)
      })

  }, [])
*/
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
