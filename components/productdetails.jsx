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
import "../app/globals.css"
import gtv from "../public/collectble/gtv.png"
import gtav from "../public/collectble/red-dead.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './footer'
const imr = "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred-dead.d11f5ba7.jpg&w=96&q=75"
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


    return (
        <div className=' flex flex-col justify-between h-auto  gap-4  bg-white '>
            <div className='flex flex-col gap-10 px-2 py-10  sm:px-10'>
                <div className=' w-full grid  gap-9 h-auto grid-cols-1 md:grid-cols-2 items-center  '>
                    <div className=' w-full  h-96 flex flex-col rounded-md  relative justify-center items-center bg-slate-100   outline outline-1 outline-gray-300'>

                        <Image
                            src={imagePath}
                            width={330}

                            height={300}
                            className=' rounded-md object-cover '
                        />

                        <div style={{ bottom: -38 }} className=' w-full absolute  z-30 flex items-center justify-center gap-3 h-20 '>
                            <Image
                                src={gtav}
                                onClick={handleImageClick}
                                height={40}
                                width={40}
                                className='outline outline-1  bg-white cursor-pointer outline-gray-300 p-2 rounded-md'
                            />
                            <Image
                                src={Tesla}
                                height={50}
                                width={50}
                                className='outline outline-1 cursor-pointer bg-white outline-gray-300 p-2 rounded-md'
                            />
                            <Image
                                src={Tesla}
                                height={50}
                                width={50}
                                className='outline outline-1 cursor-pointer bg-white outline-gray-300 p-2 rounded-md'
                            />
                            <Image
                                src={Tesla}
                                height={50}
                                width={50}
                                className='outline outline-1 cursor-pointer bg-white outline-gray-300 p-2 rounded-md'
                            />
                        </div>
                    </div>
                    <div className=' w-full h-96 flex flex-col justify-between gap-3   sm:px-0 '>
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
                        <div className=' flex gap-2 flex-col'>
                            <h1>Style</h1>
                            <div className=' flex gap-4 items-center'>
                                <input type='text' onClick={() => {
                                    setIsColor1(true)
                                    setIsColor2(false)
                                    setIsColor3(false)
                                    if (iscolor1 === true) {
                                        setIsColor1(false)

                                    }
                                }} style={{ backgroundColor: `blue`, fontSize: 0 }} className={iscolor1 == true ? ' p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2 outline-gray-400 border border-spacing-3 border-white ' : "p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2"}/>
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
                                }} style={{ backgroundColor: `black`, fontSize: 0 }} className={iscolor3 == true ? ' p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2 outline-gray-400 border border-spacing-3 border-white ' : "p-4 rounded-full cursor-pointer  border-none outline-none   outline outline-2"}/>
                            </div>
                        </div>
                        <div className=' flex flex-col sm:flex-row gap-3'>
                            <button className=' p-2 outline outline-1 outline-orange-500 text-black w-full rounded-md'>Add to cart</button>
                            <button className=' p-2 bg-orange-500 text-white w-full  rounded-md'>Buy</button>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-96 outline outline-1 rounded-md outline-gray-300 '>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChangez} aria-label="basic tabs example">
                                <Tab label="Description" {...a11yProps(0)} />
                                <Tab label="Item Details" {...a11yProps(1)} />
                                <Tab label="Other service" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Item One
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
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