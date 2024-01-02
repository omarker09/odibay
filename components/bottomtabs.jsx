"use client"
import React, { useEffect, useState } from 'react'
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

            <ListItemButton onClick={() => {window.location.href = '/'}} className='text-white duration-300 hover:bg-gray-600  h-full w-7 flex text-center items-center justify-center'>
                    <div className='flex flex-col justify-center items-center gap-0'>
                        <HomeIcon className=" text-md  cursor-pointer text-white" />
                        <span className='text-xs text-white'>Home</span>
                    </div>
                </ListItemButton>

                <ListItemButton onClick={() => {setOpenModal(true)}} className='text-white duration-300 hover:bg-gray-600 h-full w-7 flex text-center items-center justify-center'>
                    <div className='flex flex-col justify-center items-center gap-0'>
                        <SearchIcon className=" text-md  cursor-pointer text-white" />
                        <span className='text-xs text-white'>Search</span>
                    </div>
                </ListItemButton>

                <ListItemButton  className='text-white duration-300 hover:bg-gray-600 h-full w-7 flex text-center items-center justify-center'>
                    <div className='flex flex-col justify-center items-center gap-0'>
                        <SearchIcon className=" text-md  cursor-pointer text-white" />
                        <span className='text-xs text-white'>Search</span>
                    </div>
                </ListItemButton>


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