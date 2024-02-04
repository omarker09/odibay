"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ArrowRightIcon from '@mui/icons-material/ChevronRight';
import SteamLight from "../../public/imgs/steam.svg"
import SteamDark from "../../public/imgs/steam-black.svg"
import ArrowLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTheme } from 'next-themes'

function Carousel({ data }) {
  const [slide, setSlide] = useState(0)
  const [localData, setLocalData] = useState([])
  const [title, setTitle] = useState("")
  const [promo, setPromo] = useState(0)
  const [tags, setTags] = useState([])
  const { theme, setTheme } = useTheme()
  const bgColorClassTheme = theme === 'dark' ? 'cart-box' : 'bg-white';

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }
  useEffect(() => {
    const tip = data.find((tit, index) => {
      return index === slide;
    })?.tags;
    console.log(tags);
    setTags(tip)
  }, [slide, data]);

  return (
    <div className=' w-full hidden  md:flex  h-full py-10  items-center  justify-between'>

      <div className='h-full hidden items-center justify-center'>
        <button onClick={() => prevSlide()} className="  p-1  right-0 z-10">
          <ArrowLeftIcon className=' text-white text-3xl' />
        </button>
      </div>

      <div className=' w-full  flex justify-between flex-col gap-3 h-full'>
        <h1 className={theme !== "dark" ? ' text-black text-2xl z-50 w-full' : ' text-white text-2xl z-50 w-full'}>FEATURED & RECOMMENDED</h1>

        <div className={`w-full h-96 duration-300 box-large ${bgColorClassTheme} flex flex-col md:flex-row items-start justify-between boxsh2 `}>

          <div className=' relative flex  w-full rounded-md  h-full items-center justify-between'>
            <button onClick={() => prevSlide()} className="  p-1  right-0 z-10">
              <ArrowLeftIcon className=' absolute text-white text-4xl' />
            </button>
            {data.map((item, index) => {
              return <img src={item.src} key={index} alt={item.alt} className={`absolute  w-full h-full object-cover duration-1000 ${slide !== index ? 'opacity-0' : 'opacity-100'}`}
                style={{ transition: 'opacity 0.2s ease-in-out' }} />
            })}
            <button onClick={() => nextSlide()} className="  p-1  right-0 z-10">
              <ArrowRightIcon className=' text-white text-4xl' />
            </button>
          </div>

          <div className=' w-full md:w-96  flex flex-col gap-4  justify-start h-auto items-start p-4 '>

            <div className=' flex w-full items-center justify-between'>
              <div className=' relative bg-green-600 flex overflow-hidden'>
                <button className=' bg-green-600 rounded-sm w-auto px-4 text-white p-1'>Release SED 2</button>
              </div>
              <button className={theme !== "dark" ? ' text-black text-xs' : ' text-white text-xs'}>ON Watchlist</button>
            </div>

            <div className=' flex flex-col gap-2 w-full items-center justify-between'>
              <h1 style={{ transition: 'opacity 0.2s ease-in-out' }} className={` w-full  ${theme !== "dark" ? "text-black" : " text-white"} duration-300 text-2xl `}>{data.find((tit, index) => index === slide)?.title}</h1>
              <div className=' w-full flex items-center gap-2'>
                {tags.map((e, index) => {
                  return <button className='tags-theme p-1 opacity-80 hover:opacity-100 hover:text-white duration-200 px-2 rounded-xl text-xs shadow-sm text-gray-200'>{e}</button>
                })}
              </div>
            </div>

            <div className=' w-full flex flex-col items-center justify-center bg-black p-3'>
              <h1 className=' text-white text-2xl'>SAVE 12%</h1>
              <h1 className=' text-white'>PEE-ORDER-NOW</h1>
            </div>
            <div className=' w-full flex h-auto items-end  justify-between'>

              <div className=' flex w-full items-center justify-between'>
                <div>
                  <Image src={theme !== "dark" ? SteamDark : SteamLight} className=' h-20 w-20' alt="" />
                </div>
                <div className=' flex  items-center'>
                  <span className=' p-2 bg-black text-white rounded-md'>
                    -16%
                  </span>
                  <span className=' p-2  text-white flex flex-col rounded-md'>
                    <p className=' text-gray-500 line-through'>$69.99</p>
                    <p className='orange-text-colo'>$60.89</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' w-full items-center justify-center flex'>
          <span className=' z-50  duration-300 bottom-2 flex gap-3'>
            {data.map((_, index) => {
              return <button onClick={() => { setSlide(index) }} className={index === slide ? ' p-1 h-2 w-6 opacity-100 duration-30 bg-slate-300 cursor-pointer rounded-sm' : ' p-1 h-2 w-6 opacity-70 duration-30 bg-gray-600 cursor-pointer rounded-sm'}></button>
            })}
          </span>
        </div>
      </div>


      <div className='h-full hidden  items-center justify-center'>
        <button onClick={() => nextSlide()} className="  p-1  right-0 z-10">
          <ArrowRightIcon className=' text-white text-3xl' />
        </button>
      </div>

    </div>
  );
}
export default Carousel;


/*
  // Example items array
  const items = [
    {
      imageUrl: 'https://via.placeholder.com/600x300',
      title: 'Featured Item 1',
      description: 'Description for Featured Item 1'
    },
    {
      imageUrl: 'https://via.placeholder.com/600x300',
      title: 'Featured Item 2',
      description: 'Description for Featured Item 2'
    },
    {
      imageUrl: 'https://via.placeholder.com/600x300',
      title: 'Featured Item 3',
      description: 'Description for Featured Item 3'
    }
  ];
*/