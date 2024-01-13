"use client"
import gixiLogo from "../../public/logo-discover.png"
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import Footer from '@/components/footer';
import Bottomtabs from '@/components/bottomtabs';
import Link from "next/link";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function SignIn() {
    const route = "/api/usr";

    const handleTest = async () => {
      try {
        const response = await fetch(route);
         
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    return (
        <div className=' flex w-full flex-col justify-between h-auto'>
            <Navbar />
            <div className=' bg-slate-100 w-full  flex py-10 items-center justify-center'>
                <div style={{ width: 650}} className=" bg-white flex flex-col justify-between gap-y-5 shadow-2xl p-8 h-full sm:h-auto">
                    <div>
                        <Image
                            src={gixiLogo}
                            height={150}
                            width={150}
                            className="   object-contain"
                        />
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold">Login</h1>
                        <p>Continue your journey with Gixify.com</p>
                    </div>
                    <div className=" flex flex-col gap-y-4 w-full">
                        <div className=" flex flex-col gap-y-3 w-full">
                            <label>Email</label>
                            <input className=" p-3 border-none outline outline-1  outline-gray-300 rounded-md" type="text" placeholder="Your email address" />
                        </div>
                        <div className=" flex flex-col gap-y-3 w-full">
                            <div className=" w-full flex items-center justify-between">
                                <label>Password</label>
                                <Link className=" text-xs" href={"/"}>Forgot password</Link>
                            </div>
                            <div className="outline outline-1 px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                                <input className=" py-3 border-none outline-none  w-full" type="password" placeholder="Your password" />
                                <VisibilityIcon style={{ fontSize: 20, cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className=" flex items-center gap-x-2 justify-start">
                            <input className=" text-black bg-black" type="checkbox" />
                            <span>Remember me for 30 day</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center">
                        <button onClick={() => {handleTest()}} className="w-40 p-3 bg-black rounded-md text-white">Login</button>
                    </div>
                </div>
            </div>

            <Footer />
            <Bottomtabs />

        </div>
    );
}