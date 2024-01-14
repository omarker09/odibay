
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
import pf from "../public/collectble/iptvcard.png"
import "../app/globals.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

async function Regulerproducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json()

  const m = 'https://images.unsplash.com/photo-1703842184292-578efd933bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8'
  return (
    <div className=' flex flex-col gap-3 px-2 sm:px-10 py-2 bg-slate-100 '>
      <div className='flex flex-col gap-0 justify-start'>
        <h1 className='nav-background-text text-2xl font-bold'>Promtions</h1>
        <p className='text-gray-500'>Explore exclusive programs and projects designed to enhance your experience</p>
      </div>
      <div className=' w-full overflow-hidden  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5    gap-4  py-3'>
        {data.length === 0 ? <div>Loading ...</div> : data.map((e) => {
          return <Product id={e.id} img={e.image} discount={20} title={e.title} price={e.price} category={e.category} rating={4} width={290} height={290} />
        })}
      </div>

    </div>
  )
}

export default Regulerproducts



/*

        <Product id={2} img={pf} discount={20} title="RDR 2 fgh fhf ghgfh dghdghd" oldprice={0} price={3500} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={3} img={gtv} discount={5} title="GTA V" price={2000} oldprice={0} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={290} height={290} />
        <Product id={4} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={5} img={gtv} discount={15} title="GTA V" price={2000} oldprice={0} category={"PS5 Games"} rating={5} width={290} height={290} />
        <Product id={6} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={7} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />
        <Product id={8} img={gtv} discount={15} title="GTA V" price={2000} oldprice={0} category={"PS5 Games"} rating={5} width={290} height={290} />
        <Product id={9} img={gtav} discount={10} title="RDR 2" price={3500} oldprice={0} category={"PS5 Games"} rating={4} width={290} height={290} />

*/