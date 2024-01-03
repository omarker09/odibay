"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { deleteProduct } from '@/app/redux/slices/cartSlice';
import Image from 'next/image';
import { button } from '@mui/material'
import Link from 'next/link'
import "../app/globals.css"
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
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
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItem from '@mui/material/ListItem';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';






import MailIcon from '@mui/icons-material/Mail';

// Outlined Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// filled Icons
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { usePathname } from 'next/navigation'

function Bottomtabs() {
    const [isHomePage, setIsHomepage] = React.useState(false)
    const [isProfilePage, setIsProfilepage] = React.useState(false)
    const [isSettingsPage, setIsSettingspage] = React.useState(false)
    const pathname = usePathname()
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    const [searchBtnH, setSearchBtnH] = useState(false)
    const [open, setOpen] = React.useState(true);
    const [state, setState] = React.useState(false);

    const data = useSelector((e) => e.cart)

    const dispatch = useDispatch()

    const totalNormal = data.reduce((acc, product) => {
        acc += product.price * product.quantity
        return acc;
    }, 0)




    const handleClose = () => {
        setOpen(false);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        if (anchor === 'left' && open === false) {
            setState(state.left = true);
        }

        setState({ ...state, [anchor]: open });
    };


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));


    const handleClick = () => {
        setOpen(!open);
    };
    useEffect(() => {
        // methode 1 is better choise

        if (pathname === "/") {
            setIsHomepage(true)
        } else if (pathname === "/settings") {
            setIsHomepage(false)
            setIsProfilepage(false)
            setIsSettingspage(true)
        } else if (pathname === "/profile") {
            setIsProfilepage(true)
            setIsSettingspage(false)
            setIsHomepage(false)
        }

    }, [])


    return (
        <div style={{ zIndex: 1000 }} className=' w-full h-12  fixed sm:hidden bottom-0 search-background '>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex sm:hidden"
            >
                <div className=" w-full h-full bg-transparent flex  items-center justify-center">

                    <div className=" w-80 h-60 nav-background flex items-center justify-between flex-col rounded-md gap-1 py-10 px-10">
                        <div className=" h-10 w-full flex  items-center justify-between">
                            <span className=" text-white text-sm">Search in gixify :</span>
                            <button onClick={() => { setOpenModal(false) }} size="small" className="rounded-full h-7 w-7 flex items-center justify-center text-xs bg-gray-700 duration-300 hover:bg-gray-600 p-2 text-white">
                                <CloseIcon className=" text-xs" fontSize="small" />
                            </button>
                        </div>
                        <div onMouseEnter={() => { setSearchBtnH(true) }} onMouseLeave={() => { setSearchBtnH(false) }} className={searchBtnH === true ? " flex items-center justify-between w-full search-background outline outline-1 outline-gray-400  p-1 pr-2 pl-3 rounded-md gap-2" : " flex items-center w-full justify-between search-background outline outline-1 outline-gray-600 p-1 px-2   pl-3 rounded-md gap-2"}>
                            <input style={{ border: "none", outline: "none" }} placeholder="Search..." className=" text-white w-full py-2 search-background " />
                            <SearchOutlinedIcon className=" text-white" fontSize="small" />
                        </div>
                        <button className=" p-1 px-4  bg-orange-500 py-2 rounded-md w-full flex items-center justify-center gap-3 shadow-2xl text-white">
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </Modal>
            <div className=' w-full flex h-full search-background px-20  items-center justify-center'>

                <ListItemButton onClick={() => { window.location.href = '/' }} className='text-white duration-300 hover:bg-gray-600  h-full w-7 flex text-center items-center justify-center'>
                    <div className='flex flex-col justify-center items-center gap-0'>
                        <HomeIcon className=" text-md  cursor-pointer text-white" />
                        <span className='text-xs text-white'>Home</span>
                    </div>
                </ListItemButton>

                <ListItemButton onClick={() => { setOpenModal(true) }} className='text-white duration-300 hover:bg-gray-600 h-full w-7 flex text-center items-center justify-center'>
                    <div className='flex flex-col justify-center items-center gap-0'>
                        <SearchIcon className=" text-md  cursor-pointer text-white" />
                        <span className='text-xs text-white'>Search</span>
                    </div>
                </ListItemButton>

                <ListItemButton className='text-white duration-300 hover:bg-gray-600 h-full w-7 flex text-center items-center justify-center'>



                    <div onClick={toggleDrawer('right', true)} className='flex flex-col justify-center items-center gap-0'>
                        <StyledBadge badgeContent={data.length} style={{ color: "white" }} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                        <span className='text-xs text-white text-center'>Cart</span>
                    </div>

                </ListItemButton>


                <React.Fragment key={"right"}>
                    <SwipeableDrawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                        onOpen={toggleDrawer("right", true)}
                        className=" flex flex-col justify-between"
                    >
                        <div className=" flex items-end justify-between pr-3 mt-3">
                            <p className=" ml-4 py-0">Cart</p>

                            <button onClick={toggleDrawer("right", false)} size="small" className="rounded-full text-sm bg-gray-700 duration-300 hover:bg-gray-600 p-2 text-white">
                                <CloseIcon fontSize="small" />
                            </button>
                        </div>
                        <Box
                            sx={{ width: "right" === 'top' || "right" === 'bottom' ? 'auto' : 250, display: "flex", height: "100%", justifyContent: "space-between", flexDirection: "column" }}
                            role="presentation"
                            onClick={toggleDrawer("right", true)}
                            onKeyDown={toggleDrawer("right", false)}

                        >

                            <div className="flex flex-col h-full gap-2 py-2 px-2">
                                {data.length === 0 ? <div className='h-full  flex w-full items-center justify-center text-black'>Cart is Empty</div> : (
                                    <div className="flex flex-col gap-2 py-2 px-2">
                                        {data.map((e) => (
                                            <List key={e.id} className="w-full flex items-start gap-3 outline outline-1 outline-gray-300 justify-start text-white rounded-md p-2">
                                                <div className="flex items-center justify-center">
                                                    <Image alt='img' height={50} width={50} className="rounded-md" src={e.image.src} />
                                                </div>
                                                <div className="w-full">
                                                    <span className="text-black">{e.title}</span>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-gray-400">{!e.oldpriceCart ? e.price + " DZD" : e.oldpriceCart + " DZD"}</span>
                                                        <span className="text-gray-400">x{e.quantity}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center h-full justify-center">
                                                    <button onClick={() => dispatch(deleteProduct(e))} size="small" className="rounded-full text-sm duration-300 p-1 c text-gray-500">
                                                        <CloseIcon fontSize="small" />
                                                    </button>
                                                </div>
                                            </List>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <List className=" flex items-center flex-col gap-3  px-3 justify-center">
                                {data.length === 0 ? "" : <div className=" w-full items-center   justify-center flex flex-col gap-2">
                                    <div className="flex items-center w-full justify-between">
                                        <span>total: </span>
                                        <span>{totalNormal + " DZD"}</span>
                                    </div>
                                    <button className=" w-full h-10 bg-black text-white p-2 rounded-md">
                                        Checkout
                                    </button>
                                </div>}
                                <span className=" text-gray-400 text-xs text-center">Copyright © 2023 Gixify.com , All rights reserved</span>
                            </List>
                        </Box>
                    </SwipeableDrawer>
                </React.Fragment>

            </div>
        </div>
    )
}

export default Bottomtabs

/*
         <button onClick={() => { setOpenModal(true) }} variant="contained" className='h-full bg-gray-500 shadow-2xl flex items-center gap-2 duration-200 hover:bg-gray-600 py-1 px-4 text-white rounded-md'>
                    <SearchIcon className=" text-md  cursor-pointer" />
                    <span className='text-md'>Search</span>
                </button>

*/