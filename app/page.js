'use client'
import Image from 'next/image'
import React, { useState, useEffect, useContext, createContext } from 'react'
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
import FastSlider from '@/components/fastSlider';
import MainproductsGroup from '@/components/productsgroup';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../app/globals.css"
import ServerComp from "./serverComponent"
import { Providers } from './redux/provider';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';
import Mainpage from './mainComponent/main';
import { Provider } from 'react-redux';
import store from './redux/store';
export const themeProvider = createContext()
import Carousel from './mainComponent/carousel';
import { Carouseldata } from '@/data/carouselData';
import { NextUIProvider } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import Sectionads2 from './mainComponent/Sectionads2';
import Offere1 from './mainComponent/offere1';
import Sectionads3 from './mainComponent/Sectionads3';


export default function App() {
 
    const [isLights, setIsLight] = useState(true);
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setIsLight(prevState => !prevState);
  };
  const slides = [
    "slide 1",
    "slide 2",
    "slide 3",
    "slide 4",
  ];

  return (
    <Provider store={store}>
      <NextUIProvider>
        <div className=' h-auto flex flex-col duration-300  gap-0 w-full cart-parent '>
          <Navbar />
          <Mainpage />
          <Mainproducts />
          <Sectionads2 />
          <Offere1 />
          <FastSlider />
          <Fastcategory />
          <Regulerproducts/>
          <MainproductsGroup/>
          <Mainproducts />
          <Sectionads3/>
          <Footer />
        </div>
      </NextUIProvider>
    </Provider>
  )
}


/*
    <div className=' h-full flex flex-col  gap-0 w-full bg-white '>
      <Navbar />
      <Banner />
      <div className=' h-full flex flex-col bg-white gap-8 w-full '>
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




      <div>
      <Navbar />
      <div className={isLight ? " bg-white h-screen w-full duration-300" : " cart-parent duration-300 h-screen w-full"}>
        <span className={isLight ? " text-black duration-300 w-full" : "  text-white duration-300 w-full"}>teset</span>
      </div>
    </div>
*/