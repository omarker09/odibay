"use client"

// Main
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { trigerdon, trigerdoff } from "@/app/redux/slices/testSlice";
import Image from 'next/image'
import Link from "next/link";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from './footer'
import Productrow from '@/componnent-sm/productrow';
import Bottomtabs from './bottomtabs';
import "react-image-gallery/styles/css/image-gallery.css";
import "../app/caros.css"
import Breadcrumbslinks from '@/componnent-sm/Breadcrumbslinks';

// Import SwiperJS styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Slider } from "@nextui-org/react";

// Material UI
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Images 
import gtv from "../public/collectble/gtv.png"
import pf from '../public/collectble/iptvcard.png'
import gtav from "../public/collectble/red-dead.jpg"

// Material UI list 
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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Product from '@/componnent-sm/product';
import Rating from '@mui/material/Rating';

// Material UI toggleld buttons
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Material UI buttons icon 
import GridOnIcon from '@mui/icons-material/GridOn';
import ViewListIcon from '@mui/icons-material/ViewList';

// Material UI Select
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Material UI card 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function valuetext(value) {
    return `${value}°C`;
}
const minDistance = 10;
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Categorypage() {

    // States
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [isGrid, setIsGrid] = React.useState(true);
    const [value, setValue] = React.useState([100, 40000]);
    const [value1, setValue1] = React.useState(100);
    const [value2, setValue2] = React.useState(4000);
    const [view, setView] = React.useState('module');
    const [age, setAge] = React.useState('');
    const t = 50000
    const maxVal = t.toFixed(2)

    // options
    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };
    function formatCurrency(number) {
        return number.toLocaleString('en-US');
    }
    const firstVal = formatCurrency(value1);
    const secondetVal = formatCurrency(value2);
    const SliderFirstVal = formatCurrency(value[0])
    const SlidersecondetVal = formatCurrency(value[1])

    // Toggels
    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    let grd = localStorage.getItem('isGrid')
    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    const handleChangeSelect = (event) => {
        setAge(event.target.value);
    };

    // Hooks
    useEffect(() => {
        if (grd === "true") {
            setView("module")
        } else {
            setView("list")
        }
    }, [])

    // Responsive Slider Proop
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

    // Data For testing
    const arr = [
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
        { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
        { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: gtv },
        { title: "Red dead 2", price: 2500, category: "PS5 Games", image: gtav },
        { title: "GTA 5", price: 1000, category: "XBOX Games", image: pf },
    ]
    // Grid Products Component
    const GridProducts = () => {
        // You must alway add discount proop with oldprice if you want discount percentage and price show up  !!
        // or add the price with no discount if you want normal
        return (
            <>
                <Product img={gtv} discount={99} oldprice={6500} price={1000} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
                <Product img={gtv} discount={5} oldprice={100} price={16500} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
                <Product img={gtv} discount={5} price={16500} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
                <Product img={gtv} discount={5} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
                <Product img={gtv} discount={5} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
                <Product img={gtv} discount={5} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
                <Product img={gtv} discount={5} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
                <Product img={gtv} discount={5} title="GTA V" category={"PS5 Games"} rating={5} width={290} height={290} />
            </>
        )
    }

    // Row Products Component
    const RowProducts = () => {
        return (
            <>
                <Productrow img={gtv} discount={5} oldprice={6500} title="GTA V" category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
                <Productrow img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
                <Productrow img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
                <Productrow img={gtv} discount={5} oldprice={6500} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
                <Productrow img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
                <Productrow img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
                <Productrow img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
                <Productrow img={gtv} discount={5} title="GTA V" price={2000} category={"PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg"} rating={5} width={isGrid ? 290 : 240} height={isGrid ? 290 : 190} />
            </>
        )
    }

    return (
        <div className=' flex flex-col justify-between relative h-auto    bg-white '>
            <div className=' flex items-center px-4 sm:px-10 py-4 '>
                <div className=' w-auto flex items-center gap-3 outline bg-white outline-1 outline-gray-300 rounded-sm p-2'>
                    <Breadcrumbslinks home={true} title={"Home"} path={"/"} />
                    /
                    <Breadcrumbslinks title={"Category"} path={"/"} />
                    /
                    <Breadcrumbslinks title={"Playstation"} path={"/"} />
                </div>
            </div>
            <div className='flex flex-col gap-7 px-4 h-auto py-7 sm:px-10'>
                <div className=' w-full flex gap-5 flex-col-reverse lg:flex-row h-full'>
                    <div className=' h-auto  w-full lg:w-64  '>
                        <div className=' p-2 nav-background '>
                            <h1 className=' text-white text-sm'>Categories</h1>
                        </div>
                        <div className=' flex flex-col gap-4'>
                            <List
                                sx={{ width: '100%' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className=' bg-slate-100'>
                                <ListItemButton className=' py-2 h-10 flex items-center' onClick={handleClick2}>
                                    <ListItemText primary="Streaming" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                        <Checkbox size='small' {...label} />
                                        <ListItemIcon >
                                            <ListItemText primary="all" />
                                        </ListItemIcon>
                                    </ListItemButton>

                                    <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                        <Checkbox size='small' {...label} />
                                        <ListItemIcon >
                                            <ListItemText primary="Netflix" />
                                        </ListItemIcon>
                                    </ListItemButton>

                                    <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                        <Checkbox size='small' {...label} />
                                        <ListItemIcon >
                                            <ListItemText primary="HBO Max" />
                                        </ListItemIcon>
                                    </ListItemButton>

                                    <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                        <Checkbox size='small' {...label} />
                                        <ListItemIcon >
                                            <ListItemText primary="Amazon prime" />
                                        </ListItemIcon>
                                    </ListItemButton>

                                    <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                        <Checkbox size='small' {...label} />
                                        <ListItemIcon >
                                            <ListItemText primary="Shahid VIP" />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </Collapse>

                                <ListItemButton className=' py-2 h-10 flex items-center'>
                                    <Checkbox size='small' {...label} />
                                    <ListItemText primary="Software" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10' onClick={handleClick}>
                                    <ListItemText primary="IPTV" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="all" />
                                            </ListItemIcon>

                                        </ListItemButton>
                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="LYNX" />
                                            </ListItemIcon>

                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="Iron PRO" />
                                            </ListItemIcon>

                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="GOGO" />
                                            </ListItemIcon>

                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <ListItemButton className=' py-2 h-10 flex items-center'>
                                    <Checkbox size='small' {...label} />
                                    <ListItemText primary="PC Games" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10 flex items-center'>
                                    <Checkbox size='small' {...label} />
                                    <ListItemText primary="VPN" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10 flex items-center' onClick={() => { setOpen5(!open5) }}>

                                    <ListItemText primary="Gift Cards" />
                                    {open5 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open5} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="all" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="Google Play" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="Itunes" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="Amazon " />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <ListItemButton className=' py-2 h-10 flex items-center'>
                                    <Checkbox size='small' {...label} />
                                    <ListItemText primary="PC Games" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10 flex items-center' onClick={() => { setOpen3(!open3) }}>
                                    <ListItemText primary="Playstation Games" />
                                    {open3 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open3} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="all" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="PS5" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="PS4" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Collapse>

                                <ListItemButton className=' py-2 h-10 flex items-center'>
                                    <Checkbox size='small' {...label} />
                                    <ListItemText primary="Steam" />
                                </ListItemButton>

                                <ListItemButton className=' py-2 h-10' onClick={() => { setOpen4(!open4) }}>
                                    <ListItemText primary="Xbox Games" />
                                    {open4 ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>

                                <Collapse in={open4} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="all" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="Xbox Series X" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="Xbox Sereis S" />
                                            </ListItemIcon>
                                        </ListItemButton>

                                        <ListItemButton className=' py-2 h-8 flex items-center' sx={{ pl: 4 }}>
                                            <Checkbox size='small' {...label} />
                                            <ListItemIcon >
                                                <ListItemText primary="Xbox One" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                            <div className='bg-slate-100 flex flex-col  w-full  '>
                                <span className='p-2 nav-background h-auto w-full text-white'>Filter BY PRICE</span>
                                <div className='p-3 gap-3 flex-col w-full h-auto flex items-start'>
                                    <div className=' w-full md:hidden flex gap-3 justify-between items-center'>
                                        <div className='flex items-center gap-2 justify-between'>
                                            <span>From</span>
                                            <input type='number' onChange={(e) => {
                                                const min = parseInt(e.target.value)
                                                setValue1(min)
                                            }} placeholder={`min is 0`} minLength={0} className=' w-full p-1 border-none outline-none' />
                                        </div>
                                        <div className='flex items-center gap-2 justify-between'>
                                            <span>To</span>
                                            <input type='number' onChange={(e) => {
                                                const min = parseInt(e.target.value)
                                                setValue2(min)
                                            }} placeholder={`max is 50000`} max={50000} className=' w-full p-1 border-none outline-none' />
                                        </div>
                                    </div>
                                    <Slider
                                        formatOptions={{ style: "currency", currency: "DZD" }}
                                        step={100}
                                        maxValue={50000}
                                        aria-label="fgh"
                                        minValue={0}
                                        value={value}
                                        onChange={setValue}
                                        className="max-w-md hidden md:flex w-full"
                                    />
                                    <div className='flex flex-col items-start w-full gap-3   justify-start '>
                                        <div className=' w-full px-1'>
                                            <span>Price : </span>
                                            <div className='flex items-start md:hidden justify-between w-full'>
                                                <span>{firstVal} DZD</span>
                                                <span>{secondetVal} DZD</span>
                                            </div>
                                            <div className=' hidden md:flex items-start justify-between w-full'>
                                                <span>{SliderFirstVal} DZD</span>
                                                <span>{SlidersecondetVal} DZD</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className=' bg-orange-400 p-2 w-full text-white'>FILTER</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' h-auto w-full flex flex-col gap-2 '>
                        <div className=' w-full p-2 bg-white outline outline-1 outline-gray-300 flex flex-col-reverse sm:flex-row items-center gap-5 justify-around'>
                            <div className=' flex items-center gap-4 w-full justify-start md:justify-start'>
                                <div className=' flex gap-2'>
                                    <span className=' text-xs lg:text-sm text-gray-500'>Showing results for : 10 / 175 Products</span>
                                </div>
                            </div>
                            <div className='flex flex-wrap sm:flex-nowrap items-start gap-3 justify-start md:justify-end w-full'>
                                <div className=' flex items-center gap-2'>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel style={{ marginTop: -10 }} className=' text-center flex items-center  rounded-none' id="demo-simple-select-label">Per Page</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="ghj"
                                                onChange={handleChangeSelect}
                                                className='  h-8'>
                                                <MenuItem value={10}>5</MenuItem>
                                                <MenuItem value={20}>10</MenuItem>
                                                <MenuItem value={30}>50</MenuItem>
                                                <MenuItem value={30}>100</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>

                                <div className=' flex items-center gap-2'>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel style={{ marginTop: -10 }} className=' text-center flex items-center  rounded-none' id="demo-simple-select-label">Sort By</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="ghj"
                                                onChange={handleChangeSelect}
                                                className='  h-8'>
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
                                    onChange={handleChange}>
                                    <ToggleButton onClick={() => {
                                        localStorage.setItem("isGrid", true)
                                    }} className=' h-8' value="module" aria-label="module">
                                        <GridOnIcon />
                                    </ToggleButton>
                                    <ToggleButton onClick={() => {
                                        localStorage.setItem("isGrid", false)
                                    }} className=' h-8' value="list" aria-label="list">
                                        <ViewListIcon />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                        <div className={grd == "true" ? ' w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 ' : ' w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center gap-4 '}>
                            {grd == "true" ? <GridProducts /> : <RowProducts />}
                        </div>
                        <div className=' py-4'>
                            <Stack spacing={2}>
                                <Pagination count={175} shape="rounded" />
                            </Stack>
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
                            partialVisible={false}>
                            {/*Notice image size must atleast be 512 * 512 px*/}
                            {arr.map((e) => {
                                return <div key={e.title} className=' border-1 mr-2  border-gray-300  rounded-lg' >
                                    <Image
                                        height={290}
                                        width={290}
                                        src={e.image}
                                        alt='Red Dead Redemption 2'
                                        style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
                                        className=' no-drag-img no-drag-text'/>
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

export default Categorypage