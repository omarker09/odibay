import { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion'; // Import motion from Framer Motion
import "../globals.css"
import BasicRating from '@/components/muicomponent/rating';
import Image from 'next/image';
import ArrowRightIcon from '@mui/icons-material/ChevronRight';
import ArrowLeftIcon from '@mui/icons-material/ChevronLeft';
import Mainproducts from '@/components/mainproducts';
import { useTheme } from 'next-themes';
const DRAG_BUFFER = 30;
const DELAY_VALUE_MS = 2000


const RecommendSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDrag, setIsDrag] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [delayValue, setDelayValue] = useState(2000)
  const {theme,setTheme} = useTheme()
  const dragX = useMotionValue(0)
  const fakeApiResponse = [
    { id: 1, title: 'Slide 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Slide 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Slide 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: 'Slide 4', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: 'Slide 5', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];
  const handleBack = () => {
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1)
  }
  const handleNext = () => {
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1)
  }
  const DragStart = () => {
    setIsDrag(true)
  }
  const DragEnd = () => {
    const currentDrag = dragX.get()
    console.log(dragX.get());
    setIsDrag(false)
    if (currentDrag <= -DRAG_BUFFER) {
      setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1)
    } else if (currentDrag >= DRAG_BUFFER) {
      setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1)
    }
  }
  useEffect(() => {
    let interval;

    /* 
    uncomment this if you want auto scroll
      if (!isHover) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === fakeApiResponse.length - 1 ? 0 : prevIndex + 1
        );
      }, delayValue);
    }
    */

    return () => clearInterval(interval);
  }, [isHover, delayValue]);

  return (
    <div className='  flex duration-300 h-auto items-center gap-3 justify-center overflow-hidden relative'>
      <button
        onMouseEnter={() => { setIsHover(true) }}
        onMouseLeave={() => { setIsHover(false) }}
        onClick={() => { handleNext() }}
        className='absolute left-4 flex items-center justify-center rounded-full hover:bg-black duration-300  text-4xl z-50  text-white'>
        <ArrowLeftIcon style={{fontSize: 40}} className=' text-4xl'/>
      </button>

      <div className=' flex duration-300  w-full h-auto gap-7 flex-col'>
        <motion.div
          animate={{
            translateX: `-${currentIndex * 100}%`,
            transition: {
              type: "tween", // or use "tween", "inertia", etc. the default is "spring"
              stiffness: 100, // Adjust stiffness and damping as needed
              damping: 10,
            }
          }}
          style={{ x: dragX }}
          onDragStart={DragStart}
          onDragEnd={DragEnd}
          onMouseEnter={() => { setIsHover(true) }}
          onMouseLeave={() => { setIsHover(false) }}
          dragConstraints={{ right: 0, left: 0 }}
          drag="x"
          className='w-full  cursor-pointer rounded-md h-auto lg:h-80   flex '>

          {data.map((el, index) => (
            <div key={el.id} className={theme !== "dark" ? ' border border-gray-200 min-w-full h-full flex flex-col lg:flex-row items-center justify-between' : '   min-w-full h-full flex flex-col lg:flex-row items-center justify-between'}>

              <img
                src={el.src}
                className='no-drag-img w-full lg:w-3/6 h-72 lg:h-full object-cover lg:object-cover'
              />

              <div className={theme !== "dark" ? 'h-full duration-300 w-full lg:w-3/6 bg-white flex gap-3 p-5 rounded-b-md lg:rounded-e-md   items-start justify-between flex-col ' : 'h-full w-full duration-300 lg:w-3/6 cart-box  flex gap-3 p-5 rounded-b-md lg:rounded-e-md  items-start justify-between flex-col '}>
                <div className=' w-full  items-start gap-3 flex flex-col'>
                  <div className=' w-full flex items-center justify-between'>
                    <h1 className={theme !== "dark" ? 'text-black text-2xl' : 'text-white text-2xl'}>{el.title}</h1>
                    <BasicRating count={4} />
                  </div>
                  <div className=' w-full flex items-center gap-2'>
                    <button className='tags-theme p-1 opacity-80 hover:opacity-100 hover:text-white duration-200 px-2 rounded-xl text-xs shadow-sm text-gray-200'>Action</button>
                    <button className='tags-theme p-1 opacity-80 hover:opacity-100 hover:text-white duration-200 px-2 rounded-xl text-xs shadow-sm text-gray-200'>RolePlay</button>
                    <button className='tags-theme p-1 opacity-80 hover:opacity-100 hover:text-white duration-200 px-2 rounded-xl text-xs shadow-sm text-gray-200'>Games</button>
                  </div>
                </div>
                <div>
                  <p className={theme !== "dark" ? 'text-black' : 'text-gray-300'}>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam  eum minus magni voluptatum pis atque optio, odit iure repellat, maxime repellendus, totam sequi..."</p>
                  <button className='orange-text-colo'>See Full Product</button>
                </div>
                <div className=' w-full flex items-center justify-between'>
                  <div className=' flex  items-center'>
                    <span className=' p-2 bg-black text-white rounded-md'>
                      -16%
                    </span>
                    <span className=' p-2  text-white flex flex-col rounded-md'>
                      <p className=' text-gray-500 line-through'>$69.99</p>
                      <p className='orange-text-colo'>$60.89</p>
                    </span>
                  </div>
                  <div>
                    <button className='orange-background flex items-center p-2 justify-between px-10 rounded-md'>View <ArrowRightIcon className=' text-lg' /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <div className='  w-full gap-3 text-white flex items-center justify-center'>
          {data.map((_, index) => (
            <span style={{padding: 5}} onMouseEnter={() => { setIsHover(true) }}
              onMouseLeave={() => { setIsHover(false) }}
               key={index} onClick={() => { setCurrentIndex(index) }} 
               className={theme !== "dark" ? ` cursor-pointer ${index !== currentIndex ? " bg-gray-300" : "bg-gray-500"} rounded-full` : ` cursor-pointer ${index !== currentIndex ? " bg-gray-500" : "bg-slate-100"} rounded-full`}>
               </span>
          ))}
        </div>
      </div>
      <button
        onMouseEnter={() => { setIsHover(true) }}
        onMouseLeave={() => { setIsHover(false) }}
        onClick={() => { handleBack() }}
        className='  absolute right-4 hover:bg-black duration-300 flex items-center justify-center rounded-full z-50  text-white'>
        <ArrowRightIcon style={{fontSize: 40}} className=' text-4xl'/>
      </button>
    </div>
  );
};

export default RecommendSlider;
