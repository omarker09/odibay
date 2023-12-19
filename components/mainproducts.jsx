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

import "../app/globals.css"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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


    const arr = [
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
        { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
        { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
        { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
    ]
    return (
        <div className=' flex flex-col gap-3 bg-white '>
            <div className=' w-full flex px-2 sm:px-10 py-2 justify-between items-center'>
            <div className='flex flex-col gap-0 justify-start'>
                <h1 className='nav-background-text text-2xl font-bold'>Popular</h1>
                <p className='text-gray-500'>Explore exclusive programs and projects designed to enhance your experience</p>
            </div>
                <Link className=' nav-background py-1 px-2 rounded text-sm  text-white ' href={"/"}>Discover all</Link>
            </div>
            <div className='px-2 sm:px-10 '>
                <Carousel
                    responsive={responsive}
                    additionalTransfrom={2}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    draggable
                    focusOnSelect={false}
                    infinite
                    containerClass="my-carousel"
                    keyBoardControl
                    minimumTouchDrag={2}
                    renderButtonGroupOutside={true}
                    renderDotsOutside={false}
                    showDots={false}
                    pauseOnHover={true}
                    slidesToSlide={2}
                    swipeable
                    sliderClass='my-carousel'
                    className=' bg-white'
                    partialVisible={false}
                >

                    {/*Notice image size must be 1080 * 1080 px*/}
                    {arr.map((e) => {
                        return <div key={e.title} className=' border border-1 mr-2  border-gray-300  rounded-lg' >
                            <Image
                                height={290}
                                width={290}
                                src={e.image}
                                alt='Red Dead Redemption 2'
                                style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                                className=' no-drag-img no-drag-text'
                            />
                            <div className=' flex flex-col gap-1 select-none nodrag p-2 w-full justify-start items-start'>
                                <div className=' flex items-center justify-between w-full'>
                                    <p className=' text-xs lg:text-sm text-gray-400'>{e.category}</p>
                                    <Link className=' p-1 text-xs lg:text-sm text-black' href={"/"}>Details <ArrowForwardIosIcon className=' text-xs text-black  ' fontSize='small' /></Link>
                                </div>
                                <h1 className=' text-bold text-md'>{e.title}</h1>
                                <div className=' flex flex-col gap-2 items-start w-full justify-between'>
                                    <div className=' w-full items-center flex justify-between'>
                                        <span className=' text-blue-950 font-bold text-xs sm:text-sm'>{e.price} DZD</span>
                                        < Box
                                            sx={{
                                                '& > legend': { mt: 2 },
                                            }}
                                        >
                                            <Rating name="read-only" size="small" value={value} readOnly />

                                        </Box >
                                    </div>
                                    <button className=' w-full nav-top-background text-xs lg:text-sm  px-1 md:px-3 lg:px-5 py-1 text-white rounded'>add to cart</button>
                                </div>
                            </div>
                        </div>
                    })}

                </Carousel>
            </div>
        </div>
    )
}

export default Mainproducts








/*

            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className=" bg-slate-400 h-full px-10 flex gap-3 "
            >

                <SwiperSlide style={{ width: 200 }} className='  flex h-full bg-slate-50 justify-center items-center'>
                    <div style={{ width: 200 }} className=' bg-blue-500 h-full  flex flex-col items-center justify-center'>
                        <div >
                            <Image
                                height={300}
                                width={300}
                                src={gtav}
                                alt='Red Dead Redemption 2'
                            />
                        </div>
                        <div className=' h-14 w-full flex items-center justify-around bg-slate-100'>
                            <h1>Red dead 2</h1>
                            <button>buy</button>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

*/



/*

  <Swiper
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                
                pagination={{
                    clickable: true,
                    
                  }}
                  navigation={true}
                modules={[Autoplay]}
                className='mySwiper rounded-lg md:rounded-lg bg-slate-500'
            >
                <SwiperSlide className=' flex justify-start rounded-lg relative h-full'>

                </SwiperSlide>


            </Swiper>

*/


/*

                <Product img={img1} title={"Discord Nitro"} smtitle={"Purchase nitro"} />
                <Product img={img2} title={"Software"} smtitle={"Software products"} />
                <Product img={img3} title={"Gift Cards"} smtitle={"Google amazong apple .."} />
                <Product img={img4} title={"Playstation Games"} smtitle={"PS4 PS5 Games"} />

                <Product img={img1} title={"Discord Nitro"} smtitle={"Purchase nitro"} />
                <Product img={img2} title={"Software"} smtitle={"Software products"} />
                <Product img={img3} title={"Gift Cards"} smtitle={"Google amazong apple .."} />
                <Product img={img4} title={"Playstation Games"} smtitle={"PS4 PS5 Games"} />
*/