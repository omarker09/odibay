'use client'
import React, {useState,useEffect} from 'react'
import SendServer from './sendServer'
function SendClient({children,props}) {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [ready,setIsReady] = useState(false)
    useEffect(() => {
       
        if (!username === "" || !email === "" || !message === "") {
            setIsReady(true)
      
        } else {
            setIsReady(false)
        
        }
        
    }, [])
    function handleClick() {
        if (!username == "" && !email == "" && !message == "") {
            setIsReady(true)
            console.log(ready);
        } else {
            setIsReady(false)
            console.log(ready);
        }
    }
  return (
    <div className=' w-full h-screen bg-slate-400 flex items-center justify-center'>
        <div className='flex flex-col items-center bg-white shadow-2xl p-4 justify-start gap-3'>
            <div className='flex w-full flex-col gap-2'>
                <span>Username : </span>
                <input  onChange={(e) => {setUsername(e.target.value)}} type='text' className=' p-2 border-none outline outline-1 outline-gray-400' placeholder='Username ..' />
            </div>
            <div className='flex w-full flex-col gap-2'>
                <span>Email : </span>
                <input  onChange={(e) => {setEmail(e.target.value)}} type='email' className=' p-2 border-none outline outline-1 outline-gray-400' placeholder='Email ..' />
            </div>
            <div className='flex w-full flex-col gap-2'>
                <span>Username : </span>
                <textarea  type='text' onChange={(e) => {setMessage(e.target.value)}} className=' p-2 border-none outline outline-1 outline-gray-400' placeholder='Message ..' />
            </div>
            <div className='w-full'>
                <button onClick={() => {handleClick()}} className=' bg-red-600 text-white p-2 w-full'>Send</button>
            </div>
        </div>
        <SendServer user={username} emil={email} msg={message} rea={ready}  />
    </div>
  )
}

export default SendClient