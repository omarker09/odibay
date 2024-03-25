"use client";
import gixiLogo from "../../public/imgs/Odibay.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import Bottomtabs from "@/components/bottomtabs";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GppBadIcon from "@mui/icons-material/GppBad";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { errorsLang } from "@/language_config";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [hideEye, setHideEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hideEye2, setHideEye2] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorType, setErrorType] = useState("");
  const [seccType, setSeccType] = useState("");
  function handleRegister() {
    // you stoped here your next task is to handle registration response
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const testMail = emailRegex.test(email);
    if (!email || !password || !password2 || !username) {
      setErrorType(errorsLang.input.input_is_empty_en);
    } else if (password !== password2) {
      setErrorType(errorsLang.password.password_is_equal_en);
    } else if (!emailRegex.test(email)) {
      setErrorType(errorsLang.email.email_not_valid_en);
    } else {
      setLoading(true);
      axios
        .post(
          "http://localhost:3002/api/v1/auth/rg",
          {
            email: email,
            password: password,
            username: username,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => {
          setLoading(false);
          setSeccType(errorsLang.registred.registred_en);
          setErrorType("");
        })
        .catch((e) => {
          setErrorType(e.response.data.message_en);
          setSeccType("");
          setLoading(false);
        });
    }
  }
  useEffect(() => {
    const cookie = Cookies.get("u_tk");
    if (cookie || cookie > 0) {
      router.replace("/");
    }
    setToken(cookie);
  }, [token]);
  return (
    <div>
      {token || token > 0 ? (
        <div></div>
      ) : (
        <div className=" flex w-full flex-col justify-between h-auto">
          <Navbar />
          <div className=" bg-slate-100 w-full h-auto flex py-10 items-center justify-center">
            <div
              style={{ width: 650 }}
              className=" bg-white flex flex-col justify-between gap-y-5 shadow-2xl p-8"
            >
              <div>
                <Image
                  src={gixiLogo}
                  height={150}
                  width={150}
                  className="   object-contain"
                />
              </div>
              <div>
                <h1 className=" text-2xl font-bold">SignUp</h1>
                <p>Continue your journey with Gixify.com</p>
              </div>
              <div
                className={
                  errorType === ""
                    ? "hidden"
                    : " w-full rounded-md flex items-center justify-start px-3  outline outline-1 bg-red-100 outline-red-300"
                }
              >
                <div className=" h-full flex items-center justify-center gap-x-3 py-3">
                  <GppBadIcon color="red" className=" text-red-500 text-xl" />
                  <span className=" text-red-500 text-base">{errorType}</span>
                </div>
              </div>
              <div
                className={
                  seccType === ""
                    ? "hidden"
                    : " w-full rounded-md flex items-center justify-start px-3  outline outline-1 bg-green-200 outline-green-500"
                }
              >
                <div className=" h-full flex items-center justify-center gap-x-3 py-3">
                  <CheckCircleOutlineIcon
                    color="white"
                    className=" text-green-500 text-xl"
                  />
                  <span className=" text-green-500 text-base">{seccType}</span>
                </div>
              </div>
              <div className=" flex flex-col h-auto gap-y-4 w-full">
                <div className=" flex flex-col gap-y-3 w-full">
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className=" p-3 border-none outline outline-1  outline-gray-300 rounded-md"
                    type="text"
                    placeholder="Your email address"
                  />
                </div>
                <div className=" flex flex-col gap-y-3 w-full">
                  <label>Username</label>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className=" p-3 border-none outline outline-1  outline-gray-300 rounded-md"
                    type="text"
                    placeholder="Your username"
                  />
                </div>
                <div className=" flex flex-col h-auto gap-y-3 w-full">
                  <label>Password</label>
                  <div className="outline outline-1 px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className=" py-3 border-none outline-none  w-full"
                      type={hideEye ? "text" : "password"}
                      placeholder="Your password"
                    />
                    <span
                      onClick={() => {
                        hideEye ? setHideEye(false) : setHideEye(true);
                      }}
                    >
                      {hideEye === true ? (
                        <VisibilityOffIcon
                          style={{ fontSize: 20, cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityIcon
                          style={{ fontSize: 20, cursor: "pointer" }}
                        />
                      )}
                    </span>
                  </div>
                  <div className="outline outline-1 px-3 flex focus:focus:outline-gray-700 justify-between items-center outline-gray-300 rounded-md">
                    <input
                      value={password2}
                      onChange={(e) => {
                        setPassword2(e.target.value);
                      }}
                      className=" py-3 border-none outline-none  w-full"
                      type={hideEye2 ? "text" : "password"}
                      placeholder="Confirm Your password"
                    />
                    <span
                      onClick={() => {
                        hideEye2 ? setHideEye2(false) : setHideEye2(true);
                      }}
                    >
                      {hideEye2 === true ? (
                        <VisibilityOffIcon
                          style={{ fontSize: 20, cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityIcon
                          style={{ fontSize: 20, cursor: "pointer" }}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <div className=" flex items-center gap-x-2 justify-start">
                  <input className=" text-black bg-black" type="checkbox" />
                  <span>Remember me for 30 day</span>
                </div>
              </div>
              <button
                onClick={() => {
                  handleRegister();
                }}
                className="w-40 p-3 bg-black rounded-md flex items-center justify-center gap-x-2 text-white"
              >
                {loading ? (
                  <CircularProgress
                    className=" text-white font-extrabold"
                    size={20}
                  />
                ) : (
                  <span style={{ fontSize: 15 }} className=" text-white ">
                    Sign Up
                  </span>
                )}
              </button>
            </div>
          </div>
          <Footer />
          <Bottomtabs />
        </div>
      )}
    </div>
  );
}
