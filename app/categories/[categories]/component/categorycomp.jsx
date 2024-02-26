"use client"
import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import steamLogo from "../../../../public/collectble/steamblack.svg"
import Image from 'next/image';
import Link from 'next/link';
import "./catstyles.css"
import "../../../globals.css"
import darksouls from "../../../../public/imgs/dark souls.avif"
function Categorycomp() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='px-2 sm:px-10 md:px-16 lg:px-20 cart-parent flex flex-col gap-6 py-5 h-full'>
      <div className=' h-screen flex gap-4 flex-col py-5'>
        <div className=' flex gap-4 flex-col'>
          <h1 className=' text-white text-2xl font-bold'>Action RPG Games</h1>
          <p className=' text-gray-500'>Nothing's better than a game that feels like a true adventure and is chock-full of action! Our Action RPG category is host to some of the most exciting games; you'll find titles like The Elder Scrolls franchise, Pathfinder, and even the beloved God of War!</p>
        </div>
        <div className=' w-full flex items-center justify-between py-5'>
          <div className=' flex items-center gap-3'>
            <button className=' bg-white text-black p-3 px-5 rounded-3xl'>All</button>
            <button className=' tags-theme text-white shadow-2xl p-3 px-5 rounded-3xl'>Games</button>
            <button className=' tags-theme text-white shadow-2xl p-3 px-5 rounded-3xl'>DLC</button>
          </div>
          <div className=' flex items-center gap-3'>
            <span className=' text-white'>Sort by</span>
            <select className=' p-3 rounded-md text-white cursor-pointer'>
              <option className=' cursor-pointer'>item 1</option>
              <option>item 2</option>
              <option>item 3</option>
              <option>item 4</option>
            </select>
          </div>
        </div>

        <div className=' '>
          <div className='parent-hov w-96 h-72 boxsh2 rounded-xl cart-box flex relative flex-col'>
            <div style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12, borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }} className='background-transparent-black z-50 w-full h-full flex items-center justify-center absolute'>
              <div className=' w-full h-4/5 flex  bg-slate-50'>
                <div className=' w-full flex items-center justify-end hide-btns'>
                  <button className=' text-white'>hert</button>
                </div>
                <div className='hide-btns'>
                  <button className=' bg-orange-400 p-3 text-white rounded-2xl'>blob</button>
                  <button className=' bg-orange-400 p-3 text-white rounded-2xl'>blob</button>
                </div>
              </div>
            </div>
            <div style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12 }} className=' w-full h-4/5 relative '>
              <Image
                src={darksouls}
                className='w-full h-full rou'
                style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12 }}
              />
            </div>
            <div style={{ borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }} className=' w-full h-1/5 px-4 cart-box flex justify-between items-center'>
              <Image
                height={80}
                width={80}
                src={steamLogo}
                className=' z-50'
              />
              <div className=' z-50 flex items-center gap-3'>
                <div className=' p-1 promor-perc rounded-md px-2 flex items-center justify-center'>
                  <h1 className=' text-white text-base font-medium'>-30%</h1>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                  <p className=' text-gray-500 line-through text-sm font-medium'>$29.99</p>
                  <p className=' orange-text-colo line-through text-base font-medium'>$24.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categorycomp