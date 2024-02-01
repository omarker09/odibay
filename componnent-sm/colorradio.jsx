import React, { useState } from 'react'

function Colorradio(props) {
    const length = props.len
    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")
    const [color3, setColor3] = useState("")

    const [iscolor1, setIsColor1] = useState(false)
    const [iscolor2, setIsColor2] = useState(false)
    const [iscolor3, setIsColor3] = useState(false)

    return (
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
    )
}

export default Colorradio