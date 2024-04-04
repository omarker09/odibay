"use client";

import React, { createContext } from "react";
import ScrollTop from "./scrollTop";
import Navbar from "../components/Navbar";
import Fastcategory from "@/components/fastcategory";
import Footer from "@/components/footer";
import FastSlider from "@/components/fastSlider";
import "../app/globals.css";
import Mainpage from "./mainComponent/main";
import { Provider } from "react-redux";
import store from "./redux/store";
export const themeProvider = createContext();
import { NextUIProvider } from "@nextui-org/react";
import Sectionads2 from "./mainComponent/Sectionads2";
import Offere1 from "./mainComponent/offere1";
import Trusted from "./mainComponent/trusted";
import ProductsCards from "./categories/[categories]/component/productsCards";
import Explore from "./mainComponent/explore";
import { useTheme } from "next-themes";
export default function App() {
  const {theme,setTheme} = useTheme();
  return (
    <Provider store={store}>
      <NextUIProvider>
        <div className={theme === "dark" ? " h-auto flex flex-col duration-300  gap-0 w-full cart-parent " : " h-auto flex flex-col duration-300  gap-0 w-full bg-white "}>
          <Navbar />
          <Mainpage />
          <ProductsCards />
          <Offere1 />
          <Fastcategory />
          <ProductsCards />
          <Sectionads2 />
          <ProductsCards />
          <FastSlider />
          <ScrollTop />
          <Explore/>
          <Trusted />
          <Footer />
        </div>
      </NextUIProvider>
    </Provider>
  );
}
