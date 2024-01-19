"use client"
import gixiLogo from "../../public/logo-discover.png"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import Footer from '@/components/footer';
import Bottomtabs from '@/components/bottomtabs';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import GppBadIcon from '@mui/icons-material/GppBad';
import { errorsLang } from "@/language_config";
import Cookies from 'js-cookie';

export default function SignIn() {
    const router = useRouter();
    const [password, setPassword] = useState("") 
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [hideEye, setHideEye] = useState(false)
    const [errorType, setErrorType] = useState("")
    const route = "/api/usr";
    const dt = {
        email,
        password
    }
 
    const handleTest = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const testMail = emailRegex.test(email)

        if (!email || !password) {
            setErrorType(errorsLang.input.input_is_empty_en)
        } else if (testMail !== true) {
            setErrorType(errorsLang.email.email_not_valid_en)
        } else {
            setLoading(true)
            setErrorType("")
            axios.post("http://localhost:3002/api/v1/auth/lg", {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((resp) => {
                    setLoading(false)
                    Cookies.set("u_tk", resp.data.data.token, { expires: 30 });
                    const userData = [
                        {
                            username: resp.data.data.username,
                            user_id: resp.data.data.user_id,
                            email: resp.data.data.email
                        }
                    ]
                    localStorage.setItem("u_inf", JSON.stringify(userData))
                    console.log(resp.data);
                    setErrorType("")
                    router.replace("/")
                })
                .catch((e) => {
                    setErrorType(e.data)
                    console.log(e);
                    setLoading(false)
                })
        }
    };
    return (
        <div className=' flex w-full flex-col justify-between h-auto'>
            <Navbar />
            <div className=' bg-slate-100 w-full  flex py-10 items-center justify-center'>
                <div style={{ width: 650 }} className=" bg-white flex flex-col justify-between gap-y-5 shadow-2xl p-8 h-full sm:h-auto">
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
                    <div className={errorType === "" ? "hidden" : " w-full rounded-md flex items-center justify-start px-3  outline outline-1 bg-red-100 outline-red-300"}>
                        <div className=" h-full flex items-center justify-center gap-x-3 py-3">
                            <GppBadIcon color="red" className=" text-red-500 text-xl" />
                            <span className=" text-red-500 text-base">{errorType}</span>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-y-4 w-full">
                        <div className=" flex flex-col gap-y-3 w-full">
                            <label>Email</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className=" p-3 border-none outline outline-1  outline-gray-300 rounded-md" type="text" placeholder="Your email address" />
                        </div>
                        <div className=" flex flex-col gap-y-3 w-full">
                            <div className=" w-full flex items-center justify-between">
                                <label>Password</label>
                                <Link className=" text-xs" href={"/"}>Forgot password</Link>
                            </div>
                            <div className="outline outline-1 px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className=" py-3 border-none outline-none  w-full" type={hideEye ? "text" : "password"} placeholder="Your password" />
                                <span onClick={() => {hideEye ? setHideEye(false) : setHideEye(true)}}>
                                    {hideEye === true ? <VisibilityOffIcon style={{ fontSize: 20, cursor: "pointer" }} /> : <VisibilityIcon style={{ fontSize: 20, cursor: "pointer" }} />}
                                </span>
                            </div>
                        </div>
                        <div className=" flex items-center gap-x-2 justify-start">
                            <input className=" text-black bg-black" type="checkbox" />
                            <span>Remember me for 30 day</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center">

                        <button onClick={() => { handleTest() }} className="w-40 p-3 bg-black rounded-md flex items-center justify-center gap-x-2 text-white">
                            {loading ? <CircularProgress className=" text-white font-extrabold" size={20} /> : <span style={{ fontSize: 15 }} className=" text-white ">Login</span>}
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
            <Bottomtabs />

        </div>
    );
}