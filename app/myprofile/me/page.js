"use client"
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
    function setCookie(name,value,exp_days) {
        var d = new Date();
        d.setTime(d.getTime() + (exp_days*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
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
                    setCookie("u_tk",resp.data.data.token,30)
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
                    router.replace("/").refresh()
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
         
            </div>

            <Footer />
            <Bottomtabs />

        </div>
    );
}