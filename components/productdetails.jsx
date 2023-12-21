"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img1 from "../public/collectble/discord.png"
import winimg from "../public/collectble/steam.png"
import winimgz from "../public/collectble/netflix.png"
import winimgs from "../public/collectble/nordvpn.png"
import rdr2 from "../public/collectble/gtv.png"
import rd2 from "../public/collectble/red-dead.jpg"
import Tesla from "../public/tesla.png"
import soft from "../public/collectble/app-development.png"
import Link from "next/link";
import big from '../public/big.jpg'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import gtv from "../public/collectble/gtv.png"
import gtav from "../public/collectble/red-dead.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './footer'
const imr = "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred-dead.d11f5ba7.jpg&w=96&q=75"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../app/caros.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (

        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Productdetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [imgSrc, setImgsrc] = useState("")
    const [imagePath, setImagePath] = useState(Tesla);

    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")
    const [color3, setColor3] = useState("")

    const [iscolor1, setIsColor1] = useState(false)
    const [iscolor2, setIsColor2] = useState(false)
    const [iscolor3, setIsColor3] = useState(false)

    const handleChangez = (event, newValue) => {
        setValue(newValue);
    };
    const handleChanger = (event) => {
        setAge2(event.target.value);
    };
    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
    const handleImageClick = () => {
        console.log('Image path:', imagePath);
        // Add any other logic you want to perform on image click
    };

    const images = [
        {
            original: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped%20Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg",
            thumbnail: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped%20Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg"
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <div className=' flex flex-col justify-between h-auto  gap-4  bg-white '>
            <div className='flex flex-col gap-10 px-4 h-auto py-10  sm:px-10'>
                <div className=' w-full grid gap-5 h-full grid-cols-1 md:grid-cols-2 items-start justify-start  '>
                    <div className=' lg-height w-full flex flex-col '>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={false}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202203/1409/oltI7Zc96usbdvhVVXcV1EAi.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.bynogame.com/games/gta5-1662829149472.webp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202203/1409/oltI7Zc96usbdvhVVXcV1EAi.png" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://cdn.bynogame.com/games/gta5-1662829149472.webp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className=' w-full h-auto flex flex-col justify-between gap-3   sm:px-0 '>
                        <div className=' flex flex-col gap-2'>
                            <div className=' flex items-center justify-between'>
                                <h1 className=' text-xl font-bold'>GTA 5</h1>
                                <span className=' text-2xl font-bold'>Price : 15$</span>
                            </div>
                            <div className=' flex items-center  justify-between'>
                                <p className=' text-xl font-bold text-gray-500'>Grand theft auto v Premuim edition</p>
                                <div className=' flex items-center'>
                                    < Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                    >
                                        <Rating name="read-only" size="small" value={4} readOnly />

                                    </Box >
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea assumenda vitae eaque labore cum</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-3'>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>ghk</MenuItem>
                                        <MenuItem value={20}>ghkghk</MenuItem>
                                        <MenuItem value={30}>vbnb;</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age2}
                                        label="Age"
                                        onChange={handleChanger}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <h1 className='font-bold'>Status : </h1>
                            <span className=' text-orange-500 font-bold'> In stock</span>
                        </div>
                        <div className=' flex gap-2 flex-col'>

                            <div className=' flex items-center justify-between'>
                                <div className=' flex flex-col gap-2'>
                                    <p className=' text-xs'>Style :</p>
                                    <div className=' flex gap-4 items-center'>
                                        <input type='text' onClick={() => {
                                            setIsColor1(true)
                                            setIsColor2(false)
                                            setIsColor3(false)
                                            if (iscolor1 === true) {
                                                setIsColor1(false)

                                            }
                                        }} style={{ backgroundColor: `blue`, fontSize: 0 }} className={iscolor1 == true ? ' p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2 outline-gray-400 border border-spacing-3 border-white ' : "p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2"} />
                                        <input type='text' onClick={() => {
                                            setIsColor2(true)
                                            setIsColor1(false)
                                            setIsColor3(false)
                                            if (iscolor2 === true) {
                                                setIsColor2(false)
                                            }
                                        }} style={{ backgroundColor: `orange`, fontSize: 0 }} className={iscolor2 == true ? ' p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2 outline-gray-400 border border-spacing-3 border-white ' : "p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2"} />
                                        <input type='text' onClick={() => {
                                            setIsColor3(true)
                                            setIsColor1(false)
                                            setIsColor2(false)
                                            if (iscolor3 === true) {
                                                setIsColor3(false)
                                            }
                                        }} style={{ backgroundColor: `black`, fontSize: 0 }} className={iscolor3 == true ? ' p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2 outline-gray-400 border border-spacing-3 border-white ' : "p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2"} />
                                    </div>
                                </div>
                                <div className=' p-0 flex gap-2 items-start justify-start flex-col '>
                                    <p className=' text-xs'>Quantity : </p>
                                    <div className='outline outline-1 outline-gray-300 p-2'>
                                        <button className=' text-lg' >-</button>
                                        <input style={{ border: "none", outline: "none" }} className=' w-20 text-center ' type=' text' value={0} />
                                        <button className=' text-lg'>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col sm:flex-row gap-3'>
                            <button className=' p-2 outline outline-1 outline-orange-500 text-black w-full rounded-md'>Add to cart</button>
                            <button className=' p-2 bg-orange-500 text-white w-full  rounded-md'>Buy</button>
                        </div>
                    </div>
                </div>
                <div className=' w-full overflow-y-scroll h-96 outline outline-1 rounded-md outline-gray-300 '>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChangez} aria-label="basic tabs example">
                                <Tab label="Description" {...a11yProps(0)} />
                                <Tab label="Item Details" {...a11yProps(1)} />
                                <Tab label="Other service" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Grand Theft Auto V (GTA V) is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It was initially released for PlayStation 3 and Xbox 360 in September 2013 and later for PlayStation 4, Xbox One, and Microsoft Windows. Here's a brief description of the game:

                            Title: Grand Theft Auto V

                            Genre: Action-Adventure

                            Platform: PlayStation 3, Xbox 360, PlayStation 4, Xbox One, Microsoft Windows

                            Plot:
                            The game is set in the fictional state of San Andreas, a satirical recreation of Southern California. The narrative revolves around three protagonists—Michael De Santa, a retired bank robber; Franklin Clinton, a street hustler looking for better opportunities; and Trevor Philips, a volatile and psychopathic criminal. Players switch between these characters throughout the game, each with their own unique skills and storylines.

                            The plot follows their attempts to commit heists while dealing with personal issues and the pressures of the criminal underworld. The story explores themes of crime, morality, and the pursuit of the American Dream.

                            Gameplay:
                            GTA V offers an open-world environment with a detailed and expansive landscape, featuring the city of Los Santos and the surrounding countryside. Players can explore the world on foot or by various vehicles, including cars, motorcycles, airplanes, and boats. The game combines elements of driving, shooting, and exploration, providing a vast and immersive experience.

                            One notable feature is the heist system, where players plan and execute elaborate robberies, making choices that impact the outcome of the missions and the overall story. The game also includes an online multiplayer mode, Grand Theft Auto Online, where players can engage in various activities, missions, and heists with other players.

                            Graphics and Sound:
                            GTA V is praised for its detailed graphics, realistic depiction of the game world, and attention to detail. The soundtrack features a diverse selection of music across various genres, enhancing the atmosphere of the game.

                            Reception:
                            Grand Theft Auto V received widespread critical acclaim for its gameplay, storytelling, open-world design, and technical achievements. It became one of the best-selling video games of all time, achieving both commercial success and cultural impact. The game's longevity has been extended through ongoing updates to Grand Theft Auto Online, keeping the community engaged years after its initial release.
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            1. Grand Theft Auto V - PS4:

                            Platform: PlayStation 4
                            Storage: The game requires a certain amount of storage space on the PS4 hard drive.
                            Internet Connection: While not mandatory for single-player gameplay, an internet connection is required for online features and updates.
                            2. Grand Theft Auto V - PS5:

                            Platform: PlayStation 5
                            Storage: The game may take advantage of the increased storage capabilities of the PS5.
                            Internet Connection: Similar to the PS4 version, online features and updates may require an internet connection.
                            3. Grand Theft Auto V - PC:


                            Other: A high-speed internet connection is recommended for online features.
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Platform: Microsoft Windows (PC)

                            System Requirements:

                            OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1
                            Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)
                            Memory: 8 GB RAM
                            Graphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GB
                            DirectX: Version 11
                            Storage: 72 GB available space
                            Sound Card: 100% DirectX 10 compatible
                            Additional Requirements:
                        </CustomTabPanel>
                    </Box>
                </div>
                <div className=' text-2xl font-bold gap-3 flex flex-col'>
                    <h1>You Might also Like </h1>
                    <div>
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
                            slidesToSlide={1}
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
                                        <h1 className=' text-bold text-sm text-black'>{e.title}</h1>

                                    </div>
                                </div>
                            })}

                        </Carousel>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Productdetails 