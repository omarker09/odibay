"use client"
import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'
import "../app/globals.css"

// Outlined Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// filled Icons
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { usePathname } from 'next/navigation'

function Bottomtabs() {
    const [isHomePage, setIsHomepage] = React.useState(false)
    const [isProfilePage, setIsProfilepage] = React.useState(false)
    const [isSettingsPage, setIsSettingspage] = React.useState(false)
    const pathname = usePathname()


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


        // method 2 this method work fine but it has some bugs
        /*
        switch (pathname) {
            case "/":
                setIsHomepage(true)
                setIsProfilepage(false)
                setIsSettingspage(false)
                break;
            case "/profile":
                setIsProfilepage(true)
                setIsHomepage(false)
                setIsSettingspage(false)
            case "/settings":
                setIsHomepage(false)
                setIsProfilepage(false)
                setIsSettingspage(true)
            default:
                break;
        }
        */
    }, [])


    return (
        <div style={{ zIndex: 1000 }} className=' w-full h-16 py-1 fixed sm:hidden bottom-0 search-background '>
            <div className=' w-full flex h-full search-background p-1  items-center justify-evenly'>

                <Link href={"/"} className=' h-full'>
                    <Button variant="contained" className={isHomePage ? 'h-full hover:bg-gray-600 bg-gray-600 rounded-md ' : 'h-full hover:bg-gray-600 rounded-md '}>
                        {isHomePage ? <HomeIcon/> : <HomeOutlinedIcon />}
                        <span>H</span>
                        <span className=' lowercase'>ome</span>
                    </Button>
                </Link>

                <Link href={"/profile"} className='h-full'>
                    <Button variant="contained" className={isProfilePage ? 'h-full hover:bg-gray-600 bg-gray-600 rounded-md ' : 'h-full hover:bg-gray-600 rounded-md '}>
                        {isProfilePage ? <AccountCircleIcon/> : <AccountCircleOutlinedIcon />}
                        <span>P</span>
                        <span className=' lowercase'>rofile</span>
                    </Button>
                </Link>

                <Link href={"/settings"} className=' h-full'>
                    <Button variant="contained" className={isSettingsPage ? 'h-full hover:bg-gray-600 bg-gray-600 rounded-md ' : 'h-full hover:bg-gray-600 rounded-md '}>
                        {isSettingsPage ? <SettingsIcon/> : <SettingsOutlinedIcon />}
                        <span>S</span>
                        <span className=' lowercase'>ettings</span>
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default Bottomtabs