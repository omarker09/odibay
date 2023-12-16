import React from 'react'
import Image from 'next/image'
import Product from '@/componnent-sm/product';
import Link from "next/link";
import CatIcon from '@/componnent-sm/catIcon'
import img1 from "../public/collectble/discord.png"
import img2 from "../public/collectble/app-development.png"
import img3 from "../public/collectble/gift-card.png"
import img4 from "../public/collectble/playstation.png"
import gtv from "../public/collectble/gtv.png"
import gtav from "../public/collectble/red-dead.jpg"
import "../app/globals.css"

function Regulerproducts() {

  return (
    <div className=' flex flex-col gap-3 px-2 sm:px-10 py-2 bg-slate-100'>
      <div className='flex flex-col gap-0 justify-start'>
        <h1 className='nav-background-text text-2xl font-bold'>Promtions</h1>
        <p className='text-gray-500'>Explore exclusive programs and projects designed to enhance your experience</p>
      </div>
      <div className=' w-full overflow-hidden  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  bg-slate-100  gap-4  py-3'>
        <Product img={gtv} discount={40} title="GTA V" dicountprice={1500} price={2000} category={"PS5 Games"} rating={5} width={290} height={290} />
        <Product img={gtav} discount={20} title="RDR 2 fgh fhf ghgfh dghdghd" price={3500} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={290} height={290} />
        <Product img={gtav} discount={10} title="RDR 2" price={3500} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product img={gtv} discount={15} title="GTA V" price={2000} category={"PS5 Games"} rating={5} width={290} height={290} />
        <Product img={gtav} discount={10} title="RDR 2" price={3500} category={"PS5 Games"} rating={4} width={290} height={290} />
      </div>
    </div>
  )
}

export default Regulerproducts