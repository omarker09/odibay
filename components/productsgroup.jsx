'use client'
import React from 'react'
import iml from "../public/Black and Pink Modern Black Friday Sale Banner.png"
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";
import rdr2 from "../public/collectble/red-dead2.jpg"
import gtv from "../public/collectble/gtv.png"
import gtav from "../public/collectble/red-dead.jpg"
import grey from "../public/Grey Minimalist Product Advertising Instagram Post.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowProps } from 'react-multi-carousel/lib/types'
import iml3 from "../public/Black and Pink Modern Black Friday Sale Banner 2.png"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import caros from "../app/caros.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import img1 from "../public/collectble/discord.png"
import img2 from "../public/collectble/app-development.png"
import img3 from "../public/collectble/gift-card.png"
import img4 from "../public/collectble/playstation.png"
import Product from '@/componnent-sm/product';
import Eventcard from '@/componnent-sm/eventcard';
// The promotion must has only 2 link
function Mainproducts() {
    const [value, setValue] = React.useState(4);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1320 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1320, min: 940 },
            items: 4
        },
        mobilemid: {
            breakpoint: { max: 940, min: 640 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 640, min: 390 },
            items: 2
        },
        mobilesmall: {
            breakpoint: { max: 390, min: 0 },
            items: 2
        }
    };
    const arrowStyle = {
        background: "blue",
        border: 0,
        color: "black",
        fontSize: "80px"
    };
    const CustomRight = ({ onClick }) => (
        <button className="arrow right" onClick={onClick} style={arrowStyle}>
            <h1 style={{ fontSize: "50px" }} >
                right
            </h1>
        </button>
    );
    const CustomLeft = ({ onClick }) => (
        <button className="arrow left" onClick={onClick} style={arrowStyle}>
            <h1 style={{ fontSize: "50px" }} >
                left
            </h1>
        </button>
    );

    const styles = {
        carouselItem: "padding-right: 0px"
    }
    const arr = [
        { image: iml, link: "/" },
        { image: iml3, link: "/" },
        { image: iml, link: "/" },
        { image: iml3, link: "/" },

    ]

    let isMouseDown = false;
    return (
        <div className=' flex flex-col gap-3 '>
            <div className=' w-full flex px-2 sm:px-10 py-2 justify-between items-center'>
                <h1 className=' text-xl font-bold nav-background-text '>Events</h1>
                <Link className=' nav-background py-1 px-2 rounded text-sm  text-white ' href={"/"}>Discover all <ArrowForwardIosIcon className=' text-sm' /></Link>
            </div>
            <div className='px-2 sm:px-10'>
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={2}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    draggable
                    focusOnSelect={false}


                    keyBoardControl
                    minimumTouchDrag={2}
                    renderButtonGroupOutside={true}
                    renderDotsOutside={false}
                    showDots={false}
                    pauseOnHover={true}
                    slidesToSlide={1}
                    swipeable

                    partialVisible={false}
                >

                    {/*Notice image size must be 1080 * 1080 px*/}

                    {arr.map((e) => {
                        return <Link href={e.link} key={e.link} draggable="false" className=' cursor-pointer flex mr-3 items-center justify-start'>
                            <div className=' h-full  overflow-hidden relative  flex-col'>
                                <Image
                                    height={"full"}
                                    width={'full'}
                                    src={e.image}
                                    className=' rounded-lg select-none nodrag'
                                />
                                <span className=' nav-background-text absolute text-lg font-bold bottom-3 left-3' >

                                </span>
                                <span style={{ marginRight: -30, marginTop: -30 }} className=' absolute top-10 right-0 bg-red-600 rotate-45 p-1 px-10 text-white'>
                                    New
                                </span>
                            </div>
                        </Link>
                    })}

                </Carousel>
            </div>
        </div>
    )
}

export default Mainproducts










/*

import React from 'react'
import iml from "../public/Black and Pink Modern Black Friday Sale Banner.png"
import Image from 'next/image'
import iml3 from "../public/Black and Pink Modern Black Friday Sale Banner 2.png"
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// The promotion must has only 2 link
function Productsgroup() {
    return (
        <div className=' flex flex-col gap-3 px-2 sm:px-10 py-2 bg-slate-100'>
            <div className=' w-full flex justify-between items-center'>
                <h1 className=' text-xl font-bold nav-background-text '>New Events</h1>
                <Link className=' nav-background py-1 px-2 rounded text-sm  text-white ' href={"/"}>More events <ArrowForwardIosIcon className=' text-sm'/></Link>
            </div>
            <div className='flex gap-3 flex-wrap justify-start w-full '>

                <Link href={"/"} className=' flex items-center justify-start'>
                    <div className=' h-full w-36 sm:w-52 md:w-80 overflow-hidden relative  flex-col'>
                        <Image
                            height={"full"}
                            width={'full'}
                            src={iml}
                            className=' rounded-lg'
                        />
                        <span className=' nav-background-text absolute text-lg font-bold bottom-3 left-3' >

                        </span>
                        <span style={{ marginRight: -30, marginTop: -30 }} className=' absolute top-10 right-0 bg-red-600 rotate-45 p-1 px-10 text-white'>
                            New
                        </span>
                    </div>
                </Link>

                <Link href={"/"} className=' flex items-center justify-start'>
                    <div className=' h-full w-36 sm:w-52 md:w-80 overflow-hidden relative  flex-col'>
                        <Image
                            height={"full"}
                            width={'full'}
                            src={iml3}
                            className=' rounded-lg'
                        />
                        <span className=' nav-background-text absolute text-lg font-bold bottom-3 left-3' >

                        </span>
                        <span style={{ marginRight: -30, marginTop: -30 }} className=' absolute top-10 right-0 bg-red-600 rotate-45 p-1 px-10 text-white'>
                            New
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Productsgroup

*/