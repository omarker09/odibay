'use client'
import React, { useState, useEffect, useContext, createContext } from 'react'
import ScrollTop from './scrollTop';
import Navbar from '../components/Navbar'
import Fastcategory from '@/components/fastcategory'

import Footer from '@/components/footer'

import FastSlider from '@/components/fastSlider';

import "../app/globals.css"

import Mainpage from './mainComponent/main';
import { Provider } from 'react-redux';
import store from './redux/store';
export const themeProvider = createContext()
import { NextUIProvider } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import Sectionads2 from './mainComponent/Sectionads2';
import Offere1 from './mainComponent/offere1';
import Trusted from './mainComponent/trusted';
import ProductsCards from './categories/[categories]/component/productsCards';

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
          <ProductsCards />
          <Offere1 />
          <Fastcategory />
          <ProductsCards />
          <Sectionads2 />
          <ProductsCards />
          <FastSlider />
          <Trusted/>
          <ScrollTop/>
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