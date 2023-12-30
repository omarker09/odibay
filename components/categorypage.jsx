"use client"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { trigerdon, trigerdoff } from "@/app/redux/slices/testSlice";
import Image from 'next/image'
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gtv from "../public/collectble/gtv.png"
import pf from '../public/collectble/iptvcard.png'
import gtav from "../public/collectble/red-dead.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './footer'
import Productrow from '@/componnent-sm/productrow';
import Bottomtabs from './bottomtabs';
const imr = "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred-dead.d11f5ba7.jpg&w=96&q=75"
import "react-image-gallery/styles/css/image-gallery.css";
import "../app/caros.css"
import Breadcrumbslinks from '@/componnent-sm/Breadcrumbslinks';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// list 

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


import Rating from '@mui/material/Rating';


// toggleld buttons

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// buttons icon 

import GridOnIcon from '@mui/icons-material/GridOn';
import ViewListIcon from '@mui/icons-material/ViewList';

// Select

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// card 


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Product from '@/componnent-sm/product';

function Categorypage() {
    const [open, setOpen] = React.useState(true);
    const [isGrid, setIsGrid] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    const [age, setAge] = React.useState('');

    const handleChangeSelect = (event) => {
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
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: pf },
    ]

    return (
        <div className=' flex flex-col justify-between relative h-auto    bg-white '>
            <div className=' flex items-center px-4 sm:px-10 py-4 bg-slate-200'>
                <div className=' w-auto flex items-center gap-3 outline bg-white outline-1 outline-gray-300 rounded-sm p-2'>
                    <Breadcrumbslinks home={true} title={"Home"} path={"/"} />
                    /
                    <Breadcrumbslinks title={"Category"} path={"/"} />
                    /
                    <Breadcrumbslinks title={"Playstation"} path={"/"} />
                </div>
            </div>
            <div className='flex flex-col gap-7 px-4 h-auto py-7 sm:px-10'>

                <div className=' w-full flex gap-5 flex-col-reverse lg:flex-row  h-full   '>
                    <div className=' h-auto  w-full lg:w-64 bg-slate-100 '>
                        <div className=' p-2 nav-background '>
                            <h1 className=' text-white text-sm'>Categories</h1>
                        </div>
                        <div>
                            <List
                                sx={{ width: '100%' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Sent mail" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10' onClick={handleClick}>
                                    <ListItemText primary="Inbox" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Sent mail" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10' onClick={handleClick}>
                                    <ListItemText primary="Inbox" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Sent mail" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10' onClick={handleClick}>
                                    <ListItemText primary="Inbox" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Sent mail" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10'>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10' onClick={handleClick}>
                                    <ListItemText primary="Inbox" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8' sx={{ pl: 4 }}>
                                            <ListItemIcon >
                                                <ListItemText primary="Starred" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Collapse>


                            </List>
                        </div>
                    </div>
                    {/*
                    import GridOnIcon from '@mui/icons-material/GridOn';
                    import ViewListIcon from '@mui/icons-material/ViewList';
                    */}
                    {/* ' h-auto w-full flex flex-col gap-2 ' */}
                    <div className=' h-auto w-full flex flex-col gap-2 '>
                        <div className=' w-full p-2 bg-white outline outline-1 outline-gray-300 flex flex-col-reverse md:flex-row items-center gap-5 justify-around'>

                            <div className=' flex items-center gap-4 w-full justify-around md:justify-start'>
                                <div className=' flex gap-2'>
                                    <span className=' text-xs lg:text-sm text-black font-bold'>8</span>
                                    <span className=' text-xs lg:text-sm text-gray-500'>Products found</span>
                                </div>

                                <div className=' flex items-center gap-2'>
                                    <label className='text-xs lg:text-sm'>Per page : </label>
                                    <input defaultValue={5} max={10} min={1} className=' w-20 text-center border-none h-7 rounded-sm   p-1 px-1 outline outline-1 outline-gray-300' type='number' />
                                </div>
                            </div>

                            <div className='flex items-center gap-3 justify-around md:justify-end w-full'>
                                <div className=' flex items-center gap-2'>
                                    <label className='text-xs lg:text-sm'>Sort By : </label>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel style={{ marginTop: -10 }} className=' text-center flex items-center  rounded-none' id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="auto"
                                                onChange={handleChangeSelect}
                                                className='  h-8'
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                                <ToggleButtonGroup
                                    orientation="horizontal"
                                    value={view}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton  onClick={() => {setIsGrid(true)}} className=' h-8' value="module" aria-label="module">
                                        <GridOnIcon />
                                    </ToggleButton>

                                    <ToggleButton onClick={() => {setIsGrid(false)}} className=' h-8' value="list" aria-label="list">
                                        <ViewListIcon />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>

                        </div>
                        <div className={isGrid ? ' w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center gap-4 ' : ' w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center gap-4 '}>
                            {isGrid ?  <Product img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={290} height={290} /> :  <Productrow img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 190} height={isGrid ? 290 : 190}  />}
                           
                          
                        </div>
                    </div>
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

                            {/*Notice image size must atleast be 512 * 512 px*/}
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
            <Bottomtabs/>
        </div>
    )
}

export default Categorypage


