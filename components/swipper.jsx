"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/globals.css';


import Image from 'next/image'
import img1 from "../public/banner1.jpg"
import img2 from "../public/banner2.jpg"
import img3 from "../public/Black Minimalist Motivation Quote LinkedIn Banner.png"
import img4 from "../public/Photo Modern New Collection Banner.jpg"

function MyswipperApp() {

    return (
        <>
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
                className='mySwiper rounded-lg md:rounded-lg '
            >
                <SwiperSlide className=' flex justify-start rounded-lg relative '>
                    <Image
                        src={img3}
                        width={"full"}
                        height={"full"}
                        alt="Picture of the author"
                    />
                    <div className=' w-full   h-full flex justify-center items-center  absolute top-0 left-0'>
                        <div className='w-full shadow  h-full flex justify-end items-end p-4 '>
                            <button className='   nav-background border border-1 border-gray-600 rounded-sm text-xs px-1 py-1 sm:px-7 sm:text-sm sm:py-2 text-white'>More Details </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=' flex justify-start relative h-full'>
                    <Image
                        src={img4}
                        width={"full"}
                        height={"auto"}
                        alt="Picture of the author"
                    />
                    <div className=' w-full   h-full flex justify-center items-center  absolute top-0 left-0'>
                        <div className='w-full shadow  h-full flex justify-end items-end p-4 '>
                            <button className='   nav-background border border-1 border-gray-600 rounded-sm text-xs px-1 py-1 sm:px-7 sm:text-sm sm:py-2 text-white'>More Details </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=' flex justify-start relative h-full'>
                    <Image
                        src={img2}
                        width={"full"}
                        height={"auto"}
                        alt="Picture of the author"
                    />
                    <div className=' w-full   h-full flex justify-center items-center  absolute top-0 left-0'>
                        <div className='w-full shadow  h-full flex justify-end items-end p-4 '>
                            <button className='   nav-background border border-1 border-gray-600 rounded-sm text-xs px-1 py-1 sm:px-7 sm:text-sm sm:py-2 text-white'>More Details </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className=' flex justify-start relative h-full'>
                    <Image
                        src={img1}
                        width={"full"}
                        height={"auto"}
                        alt="Picture of the author"
                    />
                    <div className=' w-full   h-full flex justify-center items-center  absolute top-0 left-0'>
                        <div className='w-full shadow  h-full flex justify-end items-end p-4 '>
                            <button className='   nav-background border border-1 border-gray-600 rounded-sm text-xs px-1 py-1 sm:px-7 sm:text-sm sm:py-2 text-white'>More Details </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default MyswipperApp;
