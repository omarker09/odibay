"use client"
import React, { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function ScrollTop() {
    const [arrow, SetArrow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (this.window.scrollY >= 300) {
                SetArrow(true)
            } else {
                SetArrow(false)
            }
        })
    }, [])

    function handleUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div style={{ zIndex: 666 }} onClick={() => { handleUp() }} className={arrow ? ' nav-background outline outline-1 outline-gray-600 hover:bg-gray-600 text-white fixed z-50 bottom-16 right-10 rounded-3xl duration-250 ' : ' nav-background text-white fixed z-50 bottom-3 outline-gray-600 hover:bg-gray-600 right-5 rounded-3xl duration-250 translate-x-52'}>
            <button className=' p-2'>
                <ArrowUpwardIcon />
            </button>
        </div>
    )
}

export default ScrollTop