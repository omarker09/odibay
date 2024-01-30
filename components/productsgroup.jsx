'use client'
import React from 'react'
import iml from "../public/Black and Pink Modern Black Friday Sale Banner.png"
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";
import rdr2 from "../public/collectble/red-dead2.jpg"
import gtv from "../public/collectble/gtv.png"
import gtav from "../public/collectble/red-dead.jpg"
import discordtest from "../public/iptv1080.png"
import grey from "../public/Grey Minimalist Product Advertising Instagram Post.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../app/globals.css"
import iml3 from "../public/Black and Pink Modern Black Friday Sale Banner 2.png"
import { useSelector } from 'react-redux';
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

// notice the size should be only 6912 * 3456 in (canvas its called Banner landscape 72 * 36)
function Mainproducts() {
    const [value, setValue] = React.useState(4);
    const isLight = useSelector(state => state.themeSlice.isLight);
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



    const arr = [
        { image: iml, link: "/" },
        { image: discordtest, link: "/" },
        { image: iml, link: "/" },
        { image: iml3, link: "/" },

    ]
    const style = {
        background: "#fff"
    }

    return (
        <div className={isLight ? ' bg-white flex flex-col ' : ' cart-parent flex flex-col '}>
            <div className=' w-full flex flex-col px-2 sm:px-10 py-2 gap-3 justify-between items-start'>
                <div className=' w-full flex items-center justify-between'>
                    <h1 className={isLight ? 'nav-background-text text-2xl font-bold' : ' text-white text-2xl font-bold'}>Events</h1>
                    <Link className=' nav-background py-1 px-2 rounded text-xs  underline text-white ' href={"/"}>Discover all</Link>
                </div>
                <div className='flex flex-col gap-0 justify-start'>
                    <p className={isLight ? 'text-gray-500' : 'text-white'}>Explore exclusive programs and projects designed to enhance your experience</p>
                </div>
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
                    containerClass={style.background}
                    keyBoardControl
                    minimumTouchDrag={2}
                    renderButtonGroupOutside={true}
                    renderDotsOutside={false}
                    showDots={false}
                    pauseOnHover={true}
                    slidesToSlide={1}
                    swipeable
                    sliderClass='my-carousel'
                    partialVisible={false}
                >

                    {/*Notice image size must be 1080 * 1080 px*/}

                    {arr.map((e) => {
                        return <Link href={e.link} key={e.link} draggable="false" className='   cursor-pointer flex  mr-3 items-center justify-start'>
                            <div className=' h-full   overflow-hidden relative  flex-col'>
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