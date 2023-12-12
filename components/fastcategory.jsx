"use client"
import React from 'react'
import CatIcon from '@/componnent-sm/catIcon'
import img1 from "../public/collectble/discord.png"
import img2 from "../public/collectble/app-development.png"
import img3 from "../public/collectble/gift-card.png"
import img4 from "../public/collectble/playstation.png"


function Fastcategory() {
  return (
    <div className=' w-full grid grid-cols-2 bg-slate-100 sm:grid-cols-3 h-auto lg:grid-cols-4 justify-between gap-4 px-2 sm:px-10 py-3'>
        <CatIcon img={img1} title={"Discord Nitro"} smtitle={"Purchase nitro"} />
        <CatIcon img={img2} title={"Software"} smtitle={"Software products"} />
        <CatIcon img={img3} title={"Gift Cards"} smtitle={"Google amazong apple .."} />
        <CatIcon img={img4} title={"Playstation Games"} smtitle={"PS4 PS5 Games"}/>

        <CatIcon img={img1} title={"Discord Nitro"} smtitle={"Purchase nitro"} />
        <CatIcon img={img2} title={"Software"} smtitle={"Software products"} />
        <CatIcon img={img3} title={"Gift Cards"} smtitle={"Google amazong apple .."} />
        <CatIcon img={img4} title={"Playstation Games"} smtitle={"PS4 PS5 Games"}/>
    </div>
  )
}

export default Fastcategory