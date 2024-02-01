"use client"

// main
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Eventcard(props) {
    return (
        <Link href={props.link} key={props.link} draggable="false" className=' cursor-pointer flex mr-3 items-center justify-start'>
            <div className=' h-full  overflow-hidden relative  flex-col'>
                <Image
                    height={"full"}
                    width={'full'}
                    src={props.img}
                    className=' rounded-lg select-none nodrag'
                />
                <span className=' nav-background-text absolute text-lg font-bold bottom-3 left-3' >
                </span>
                <span style={{ marginRight: -30, marginTop: -30 }} className=' absolute top-10 right-0 bg-red-600 rotate-45 p-1 px-10 text-white'>
                    {props.eventname}
                </span>
            </div>
        </Link>
    )
}

export default Eventcard