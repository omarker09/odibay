"use client"
import React from 'react'
import CatIcon from '@/componnent-sm/catIcon'
import Categoryitems from "@/data/categoryitems";
import { useSelector } from 'react-redux';

function Fastcategory() {
  const isLight = useSelector(state => state.themeSlice.isLight);
  return (
    <div className={isLight ? ' w-full grid grid-cols-2 bg-white  sm:grid-cols-3 h-auto lg:grid-cols-4 justify-between gap-4 px-2 sm:px-10 py-3': ' w-full grid grid-cols-2 cart-parent  sm:grid-cols-3 h-auto lg:grid-cols-4 justify-between gap-4 px-2 sm:px-10 py-3'}>
      {Categoryitems.map((e) => {
        return <CatIcon img={e.img} title={e.Title} smtitle={e.SemiTitle} path={e.link} />
      })}
    </div>
  )
}

export default Fastcategory