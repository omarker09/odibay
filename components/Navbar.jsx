"use client";

// Main

import { MegaMenu } from 'primereact/megamenu';
import React, { useEffect, useState, useContext } from "react";
import avatartest from '../public/avatars/avatar-03.png'
import { themeProvider } from "@/app/page";
import axios from "axios";
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import { deleteProduct } from '@/app/redux/slices/cartSlice';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '@mui/material/Modal';
import { deepOrange, deepPurple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import { useSelector, useDispatch } from 'react-redux';
import { trigerdon, trigerdoff } from "@/app/redux/slices/testSlice";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProjectLogo from "../public/imgs/Odibay.png"
import ProjectLogoDark from "../public/imgs/Odibay-black.png"

import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

import "../app/globals.css"
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ouad from "../public/collectble/ouadkniss.svg"
import DiscordIcon from "../public/collectble/discord.png"
import cartEmpty from "../public/collectble/add-to-cart.png"
import Categoryitems from "@/data/categoryitems";
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'js-cookie';
import nouser_image from "../public/avatars/no_user.jpg"
import avatar1 from "../public/avatars/team-01.jpg"
import { changeTheme } from "@/app/redux/slices/themeSlice";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropDownIcon from '@mui/icons-material/ExpandMoreOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ThemeSwitcher from "@/app/appComponent/themeSwitcher";
import { useTheme } from "next-themes";

// mega menus
import { MegaMenu1, MegaMenu2, MegaMenu3, MegaMenu4, MegaMenu5 } from './megamenus/megas';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};



function Navbar(props) {

  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [iscat, setIscat] = React.useState(false)
  const [bolstate, setBolstate] = useState(false)
  const [searchBtnH, setSearchBtnH] = useState(false)
  const [ConditionScroll, setConditionScroll] = useState(false)
  const [offsetY, setOffsetY] = useState("fixed")
  const [isOpen, setIsopen] = useState(false)
  const [state, setState] = React.useState(false);
  const [username, setUsername] = useState('')
  const data = useSelector((e) => e.cart)
  const [dataStorage, setdataStorage] = useState([])
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen(true);
  const handleClose2 = () => setOpen(false);
  const [noAuth, setoAuth] = useState(false)
  const [avatarPath, setAvatarPath] = useState("")
  const dispatch = useDispatch()
  const currentState = useSelector((state) => state.getCart)
  const [isLightStr, setIslight] = useState()
  const isLight = useSelector(state => state.darkMode.mode);
  const [tb, setTb] = useState(null)
  // const isLight = useSelector(state => state.themeSlice.isLight);
  const [mounted, setIsMounted] = useState(null)
  const { theme, setTheme } = useTheme()
  // mega-menu hovers
  const [ishover1, setIsHover1] = useState(false)
  const [ishover2, setIsHover2] = useState(false)
  const [ishover3, setIsHover3] = useState(false)
  const [ishover4, setIsHover4] = useState(false)
  const [ishover5, setIsHover5] = useState(false)

  // account meun state
  const [accountMenu, setAccountMenu] = useState(false)
  function handleChache() {
    dispatch(changeTheme());

    console.log(isLight);
  }
  useEffect(() => {
    setIsMounted(true)
    const loc = JSON.parse(localStorage.getItem("darkMode"))
  }, [])
  const totalNormal = data.reduce((acc, product) => {
    acc += product.price * product.quantity
    return acc;
  }, 0)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const handleChangeThemes = () => {
    console.log(theme);
  }

  function CatHoveEnter() {
    setBolstate(true)
  }

  function CatHovLeave() {
    setBolstate(false)
  }
  function getUserinfo() {
    try {
      const usr_info = localStorage.getItem("u_inf")
      const usr_info_json = JSON.parse(usr_info)

      if (!usr_info_json) {
        console.log("usr_info_jso not found");
        Cookies.remove("u_tk")
      } else {
        setUsername(usr_info_json[0].username)
      }

    } catch {
      console.error("usr_info not found");
    }
  }
  async function getAvatar() {
    let email_str;
    let user_id_str;
    let token = Cookies.get("u_tk")

    try {
      let storageMail = localStorage.getItem("u_inf")
      let storageMailJson = JSON.parse(storageMail)
      email_str = storageMailJson[0].email
      user_id_str = storageMailJson[0].user_id

    } catch {
      console.error("error");
    }
    axios.post("http://localhost:3002/api/v1/auth/usr/avats", {
      email: email_str,
      user_id: user_id_str
    }, {
      headers: {
        "Authorization": 'Bearer ' + Cookies.get("u_tk")
      }
    }).then((resp) => {

      setAvatarPath(resp.data[0]?.avatar_path)
    })
      .catch((err) => {
        console.log(err);
      })
  }

  async function getCartStateStorage() {
    try {
      const storageData = localStorage.getItem("cartState");
      const storageDataJson = JSON.parse(storageData)
      setdataStorage(storageDataJson)
      console.log(storageDataJson);
    } catch {
      console.log("error while trying getting data from local storage ");
    }
  }
  useEffect(() => {
    console.log("from nav", props.isLight);
    console.log(username);
    const u_k = Cookies.get("u_tk")
    if (!u_k || u_k === "") {
      setoAuth(true)

    } else {
      setoAuth(false)
    }
    CatHovLeave()
    getUserinfo()
    getAvatar()
    getCartStateStorage()
  }, [])

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    if (anchor === 'left' && open === false) {
      setState(state.left = true);
    }
    setState({ ...state, [anchor]: open });
  };
  function signOut() {
    function deleteCookie(name) {
      var d = new Date();
      d.setTime(d.getTime() - (60 * 60 * 1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = name + "=;" + expires + ";path=/";
    }
    deleteCookie("u_tk")
    localStorage.removeItem("u_billing")
    setOpen2(false)
    window.location.reload()
  }
  const bgColorClassTheme = theme === 'dark' ? 'nav-background' : 'bg-white';
  return (

    <div style={{ zIndex: 999 }} className="   duration-200 w-full" >
      {/* top navbar start here */}
      <div
        onMouseOver={() => {
          setIsHover1(false)
          setIsHover2(false)
          setIsHover3(false)
          setIsHover4(false)
          setIsHover5(false)
        }}

        style={{ display: "flex", zIndex: 9999 }}
        className={`py-4 h-auto  w-full  flex items-center duration-300 z-50 justify-between  text-black ${bgColorClassTheme}  px-2 sm:px-10 md:px-16 lg:px-20`} >

        <div className=" flex justify-center text-white items-center">
          <Link href={"/"} className=" flex items-center p-1 ">
            <Image
              className="  object-cover"
              src={theme === "dark" ? ProjectLogo : ProjectLogoDark}
              width={145}
              height={145}
              alt="Picture of the author"
            />
          </Link>
        </div>

        <div className=" hidden md:flex items-center w-6/12 gap-1">
          <div onMouseEnter={() => { setSearchBtnH(true) }} onMouseLeave={() => { setSearchBtnH(false) }} className={searchBtnH === true ? " hidden sm:flex items-center justify-between w-full search-background outline outline-1 outline-gray-300  p-1 pr-2 pl-3 rounded-md gap-2" : " hidden sm:flex items-center w-full justify-between search-background outline outline-1 outline-gray-300 p-1 px-2   pl-3 rounded-md gap-2"}>
            <input style={{ border: "none", outline: "none" }} placeholder="Search..." className=" text-black w-full search-background " />
            <button className=" p-2 px-4  bg-orange-500 rounded-md shadow-2xl text-white">
              <SearchOutlinedIcon fontSize="small" />
            </button>
          </div>
        </div>


        <div on className=" z-50 flex justify-center relative items-center gap-3 ">
          <Link href={"/login"} className={!Cookies.get("u_tk") || Cookies.get("u_tk") === "" ? "  items-center hidden lg:flex" : " hidden"}>
            <button className=" orange-text-colo text-large">SIGN IN</button>
          </Link>
          <div className={Cookies.get("u_tk") ? " items-center relative hidden lg:flex " : " hidden"}>
            <button onMouseOver={() => { setAccountMenu(true) }} className=" orange-text-colo text-large flex items-center gap-1 cursor-pointer">My Account <ArrowDropDownIcon className='orange-text-colo' /></button>
            <div onMouseOver={() => { setAccountMenu(true) }} onMouseOut={() => { setAccountMenu(false) }} style={{ marginTop: 340 }} className={accountMenu ? ' bg-white outline outline-1 outline-gray-300 flex gap-2 flex-col h-auto zed-index w-auto rounded-md shadow-2xl py-2 absolute' : "hidden"}>
              <div className=' px-3'>
                <p style={{ fontSize: 10 }} className=' text-gray-400'>
                  LOGGED IN AS
                  BRIGADES.ANONY99@GMAIL.COM
                </p>
              </div>
              <span className='divider'></span>
              <div>
                <div className=' py-1 px-3 w-full duration-300 hover:bg-gray-200 cursor-pointer'>
                  <Link href={"/myprofile/me"} className=' text-gray-600 w-full flex text-base items-center gap-2'> <FaUser /> Account Managment</Link>
                </div>
                <div className=' py-1 px-3 w-full duration-300 hover:bg-gray-200 cursor-pointer'>
                  <span className=' text-gray-600 w-full flex text-base items-center gap-2'> <FaKey /> History logs</span>
                </div>
                <div className=' py-1 px-3 w-full duration-300 hover:bg-gray-200 cursor-pointer'>
                  <span className=' text-gray-600 w-full flex text-base items-center gap-2'> <FaBookmark /> Boobmarks</span>
                </div>
                <div onClick={() => {
                  if (theme === "dark") {
                    setTheme("light")
                  } else if (theme === "light") {
                    setTheme("dark")
                  }
                  console.log(theme)
                }} className=' py-1 px-3 w-full duration-300 hover:bg-gray-200 cursor-pointer'>
                  {theme === "dark" ? <span className=' text-gray-600 w-full flex text-base items-center gap-2'> <MdLightMode /> Light Mode</span> : <span className=' text-gray-600 w-full flex text-base items-center gap-2'> <MdDarkMode /> Dark Mode</span>}
                </div>
              </div>
              <span className='divider'></span>
              <div onClick={() => { setOpen2(true) }} className=' py-1 px-3 w-full duration-300 hover:bg-gray-200 cursor-pointer'>
                <span className=' text-gray-600 w-full flex text-base items-center gap-2'> <FaSignOutAlt /> SignOut</span>
              </div>
            </div>
          </div>
          <div className=" flex">
            {/* <ThemeSwitcher /> */}
          </div>

          <Link href={'/cart'} className="cart-box relative duration-250 px-3 rounded-md">
            <div style={{ backgroundColor: "yellow", marginTop: -10, marginRight: -10 }} className=" absolute rounded-full  flex items-center text-center justify-center  top-1 right-1 bg-yellow-300">
              <span style={{ color: "black" }} className="text-yellow-400 w-5 text-base flex items-center justify-center h-5 text-center">{data.length}</span>
            </div>
            <IconButton>
              <StyledBadge style={{ color: "white" }} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
          <button className={theme === "dark" ? " text-white flex lg:hidden rounded-full duration-300 " : " text-black flex lg:hidden rounded-full duration-300 "} onClick={toggleDrawer('left', true)} aria-label="cart">
            <MenuIcon className=' text-4xl' />
          </button>
        </div>

      </div>
      {/* top navbar end here */}

      {/* bottom navbar start here 
      
      
      */}
      <div onMouseOut={() => { setAccountMenu(false) }} onMouseOver={() => { setAccountMenu(false) }} className={` ${bgColorClassTheme} relative gap-0 duration-300  hidden lg:flex items-center  justify-between h-auto w-full `}>
        <div className=" text-white">
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <div className=" flex lg:hidden items-center justify-center text-md gap-1">
                <button className=" text-white rounded-full mr-2 px-2 py-2 duration-300 bg-gray-700 hover:bg-gray-600" onClick={toggleDrawer(anchor, true)}><MenuIcon /></button>
                <span className=" hidden sm:flex">Menu</span>
              </div>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                className=""
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}>
                <div className=" flex  items-end justify-between py-3 pr-3 ">
                  <p className=" ml-4 py-0"></p>
                  <button onClick={toggleDrawer(anchor, false)} size="small" className="rounded-full text-sm bg-black p-1 text-white">
                    <CloseIcon fontSize="small" />
                  </button>
                </div>
                <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                  role="presentation"
                  onClick={toggleDrawer(anchor, true)}
                  onKeyDown={toggleDrawer(anchor, false)}>
                  <div className=" w-full h-auto ">
                    <List className={noAuth === true ? " flex flex-col w-full" : "hidden"}>
                      <ListItem disablePadding>
                        <ListItemButton className=" flex items-center gap-3">
                          <PersonIcon />
                          <Link href={"/login"}>
                            <ListItemText primary={"Login"} />
                          </Link>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton className=" flex items-center gap-3">
                          <PersonAddIcon />
                          <Link href={"/signup"}>
                            <ListItemText primary={"Register"} />
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                  <div className=" w-full justify-center items-center">
                    <div className={noAuth ? "hidden" : " flex  flex-col py-2 items-center gap-2 justify-center px-3"}>
                      <Image
                        src={avatarPath}
                        height={100}
                        width={100}
                        className="    rounded-full p-1 border-1 bg-orange-400 border-gray-600 "
                      />
                      <div className=" w-full flex justify-center gap-1 items-center flex-col">
                        <span style={{ color: "#6f6f6f" }} className="  text-base">{!username || username === "" ? "" : username}</span>
                        <span style={{ color: "#6f6f6f", fontSize: 15 }} className="  font-medium">Balance : 0.00 DZD</span>
                        <span style={{ color: "#6f6f6f", fontSize: 17 }} className="  font-medium">Points : 0 Point</span>
                      </div>
                    </div>
                  </div>
                  <Divider />
                  <List className=' w-full'>
                    <p className=" ml-4 py-1">Account</p>
                    <ListItem className=" flex" disablePadding>
                      <ListItemButton className=" flex justify-center items-center gap-3">
                        <ListItemText>
                          <Link href={"/myprofile/me"} className=' text-gray-600 w-full flex text-base items-center gap-2'> <FaUser /> Account Managment</Link>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />
                  <List className=" w-full">
                    <p className=" ml-4 py-2">Categories</p>
                    {Categoryitems.map((text, index) => (
                      <ListItem key={text.Title} disablePadding>
                        <ListItemButton className=" flex items-center gap-3">
                          <Image src={text.img} height={30} width={30} />
                          <ListItemText primary={text.Title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    <p className=" ml-4 py-1">Theme</p>
                    <ListItem className=" flex py-2" disablePadding>
                      <ListItemButton className=" flex justify-center items-center gap-3">
                        <div onClick={() => {
                          if (theme === "dark") {
                            setTheme("light")
                          } else if (theme === "light") {
                            setTheme("dark")
                          }
                          console.log(theme)
                        }} className=' w-full duration-300 flex cursor-pointer'>
                          {theme === "dark" ? <ListItemText className=' text-gray-600 w-full flex flex-row text-base items-center gap-2'>
                            <span className=' flex items-center gap-2'><MdLightMode /> Light Mode</span>
                          </ListItemText> :
                            <ListItemText className=' text-gray-600 w-full flex text-base items-center gap-2'>
                              <span className=' flex items-center gap-2'><MdDarkMode /> Dark Mode</span>
                            </ListItemText>}
                        </div>

                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />
                  <ListItem className={!Cookies.get("u_tk") || Cookies.get("u_tk") === "" ? "hidden" : " flex py-2"} disablePadding>
                    <ListItemButton onClick={() => { setOpen2(true) }} className=" flex justify-center items-center gap-3">
                      <div className=" flex items-center w-full justify-center gap-x-3">
                        <ListItemText className=" text-red-600" primary="Sign out" />
                        <LogoutIcon className=" text-red-600" color="red" />
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <List className=" flex items-center flex-col gap-3 justify-center">
                    <div className=" w-full items-center justify-center flex gap-2">
                      <Link href={"/"}>
                        <FacebookIcon />
                      </Link>
                      <Link href={"/"}>
                        <InstagramIcon />
                      </Link>
                    </div>
                    <span className=" text-gray-400 text-xs text-center">Copyright © 2023 Gixify.com , All rights reserved</span>
                  </List>
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <div className="hidden lg:flex w-full justify-start items-center nav-background px-2 sm:px-10 md:px-16 lg:px-20">
          <div className={ishover1 ? " relative w-auto text-5xl cart-box  h-full" : " relative w-auto text-5xl   h-full"}>
            <span onMouseEnter={() => {
              setIsHover1(!ishover1);
              setIsHover2(false)
              setIsHover3(false)
              setIsHover4(false)
              setIsHover5(false)
            }} className=" menubtn cursor-pointer p-4  py-3 sm:text-base px-2 w-full  flex items-center justify-center text-white">Global <ArrowDropDownIcon /></span>
          </div>

          <div className={ishover2 ? " relative w-auto text-5xl cart-box  h-full" : " relative w-auto text-5xl   h-full"}>
            <span onMouseEnter={() => {
              setIsHover2(!ishover2);
              setIsHover1(false)
              setIsHover3(false)
              setIsHover4(false)
              setIsHover5(false)
            }} className=" menubtn cursor-pointer p-4  py-3 sm:text-base px-2 w-full  flex items-center justify-center text-white">Top Rated Games <ArrowDropDownIcon /></span>
          </div>

          <div className={ishover3 ? " relative w-auto text-5xl cart-box  h-full" : " relative w-auto text-5xl   h-full"}>
            <span onMouseEnter={() => {
              setIsHover3(!ishover3);
              setIsHover1(false)
              setIsHover2(false)
              setIsHover4(false)
              setIsHover5(false)
            }} className=" menubtn cursor-pointer p-4  py-3 sm:text-base px-2 w-full  flex items-center justify-center text-white">Gift Cards <ArrowDropDownIcon /></span>
          </div>

          <div className={ishover4 ? " relative w-auto text-5xl cart-box  h-full" : " relative w-auto text-5xl   h-full"}>
            <span onMouseEnter={() => {
              setIsHover4(!ishover4);
              setIsHover1(false)
              setIsHover2(false)
              setIsHover3(false)
              setIsHover5(false)
            }} className=" menubtn cursor-pointer p-4  py-3 sm:text-base px-2 w-full  flex items-center justify-center text-white">Xbox <ArrowDropDownIcon /></span>
          </div>

          <div className={ishover5 ? " relative w-auto text-5xl cart-box  h-full" : " relative w-auto text-5xl   h-full"}>
            <span onMouseEnter={() => {
              setIsHover5(!ishover5);
              setIsHover1(false)
              setIsHover2(false)
              setIsHover3(false)
              setIsHover4(false)
            }} className=" menubtn cursor-pointer p-4  py-3 sm:text-base px-2 w-full  flex items-center justify-center text-white">New Promo <ArrowDropDownIcon /></span>
          </div>

        </div>

        <div className=" flex sm:hidden items-center w-full gap-1">
          <div onMouseEnter={() => { setSearchBtnH(true) }} onMouseLeave={() => { setSearchBtnH(false) }} className={searchBtnH === true ? "  flex items-center justify-between w-full search-background outline outline-1 outline-gray-400  p-1 pr-2 pl-3 rounded-md gap-2" : "  flex items-center w-full justify-between search-background outline outline-1 p-1 px-2   pl-3 rounded-md gap-2"}>
            <input style={{ border: "none", outline: "none" }} placeholder="Search..." className=" text-white w-full search-background " />
            <button className=" p-1 px-4  bg-orange-500 rounded-md shadow-2xl text-white">
              <SearchOutlinedIcon fontSize="small" />
            </button>
          </div>
        </div>

        <div className=" flex  items-center gap-2">
          {/*
                  <React.Fragment key={"right"}>
            <SwipeableDrawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
              className=" flex flex-col justify-between">
              <div className=" flex w-full  items-end justify-between pt-2 px-3">
                <button onClick={toggleDrawer("right", false)} size="small" className="rounded-full text-xs bg-black duration-300  p-1 text-white">
                  <CloseIcon fontSize="small" />
                </button>
                <p className=" ml-4 py-0">Cart</p>
              </div>
              <Box
                sx={{ width: "right" === 'top' || "right" === 'bottom' ? 'auto' : 250, display: "flex", height: "100%", justifyContent: "space-between", flexDirection: "column" }}
                role="presentation"
                onClick={toggleDrawer("right", true)}
                onKeyDown={toggleDrawer("right", false)}>
                <div className="flex flex-col h-full gap-2 py-2 px-2">
                  {data.length === 0 ? <div className='h-full  flex w-full flex-col gap-3 items-center justify-center text-black'>
                    <span>Cart is Empty</span>
                    <Image height={70} width={70} src={cartEmpty} />
                  </div> : (
                    <div className="flex flex-col gap-2 py-2 px-2">
                      {data.map((e) => (
                        <List key={e.id} className="w-full flex items-start gap-3 outline outline-1 outline-gray-300 justify-start text-white rounded-md p-2">
                          <div className="flex items-center justify-center">
                            <Image alt='img' height={50} width={50} className="rounded-md" src={e.image} />
                          </div>
                          <div className="w-full">
                            <span className="text-black">{e.title}</span>
                            <div className="flex items-center gap-1">
                              <span className="text-gray-400">{!e.oldpriceCart ? e.price + " DZD" : e.oldpriceCart + " DZD"}</span>
                              <span className="text-gray-400">x{e.quantity}</span>
                            </div>
                          </div>
                          <div className="flex items-center h-full justify-center">
                            <button onClick={() => dispatch(deleteProduct(e))} size="small" className="rounded-full text-sm duration-300 p-1 c text-gray-500">
                              <CloseIcon fontSize="small" />
                            </button>
                          </div>
                        </List>))}
                    </div>)}
                </div>

                <List className=" flex items-center flex-col gap-3  px-3 justify-center">
                  {data.length === 0 ? "" : <div className=" w-full items-center   justify-center flex flex-col gap-2">
                    <div className="flex items-center w-full justify-between">
                      <span>total: </span>
                      <span>{totalNormal + " DZD"}</span>
                    </div>
                    <button className=" w-full h-10 bg-black text-white p-2 rounded-md">
                      Checkout
                    </button>
                  </div>}
                  <span className=" text-gray-400 text-xs text-center">Copyright © 2023 Gixify.com , All rights reserved</span>
                </List>
              </Box>
            </SwipeableDrawer>
          </React.Fragment>
         */}
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setIsHover1(false)
          setIsHover2(false)
        }}
        onMouseEnter={() => {
          setIsHover1(true)
          setIsHover2(false)
        }}
        className={ishover1 ? `px-2 sm:px-10 md:px-16 lg:px-20  duration-300  w-full z-50 absolute ` : `px-2 sm:px-10 md:px-16 lg:px-20 w-full hidden `}>
        <div style={{ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 }} className='cart-box  h-auto relative p-8'>

          <MegaMenu1 />
        </div>
      </div>

      <div
        onMouseLeave={() => {
          setIsHover1(false)
          setIsHover2(false)
        }}
        onMouseEnter={() => {
          setIsHover2(true)
          setIsHover1(false)
        }}
        className={ishover2 ? `px-2 sm:px-10 md:px-16 lg:px-20  duration-300  w-full z-50 absolute ` : `px-2 sm:px-10 md:px-16 lg:px-20 w-full hidden `}>
        <div style={{ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 }} className='cart-box  h-auto relative p-8'>
          <MegaMenu2 />
        </div>
      </div>

      <div
        onMouseLeave={() => {
          setIsHover1(false)
          setIsHover2(false)
          setIsHover3(false)
        }}
        onMouseEnter={() => {
          setIsHover3(true)
          setIsHover1(false)
          setIsHover2(false)
        }}
        className={ishover3 ? `px-2 sm:px-10 md:px-16 lg:px-20  duration-300  w-full z-50 absolute ` : `px-2 sm:px-10 md:px-16 lg:px-20 w-full hidden `}>
        <div style={{ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 }} className='cart-box  h-auto relative p-8'>

          <MegaMenu3 />
        </div>
      </div>

      <div
        onMouseLeave={() => {
          setIsHover1(false)
          setIsHover2(false)
          setIsHover3(false)
          setIsHover4(false)
          setIsHover5(false)
        }}
        onMouseEnter={() => {
          setIsHover4(true)
          setIsHover1(false)
          setIsHover2(false)
          setIsHover3(false)
          setIsHover5(false)
        }}
        className={ishover4 ? `px-2 sm:px-10 md:px-16 lg:px-20  duration-300  w-full z-50 absolute ` : `px-2 sm:px-10 md:px-16 lg:px-20 w-full hidden `}>
        <div style={{ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 }} className='cart-box  h-auto  relative p-8'>
          <MegaMenu4 />
        </div>
      </div>

      <div
        onMouseLeave={() => {
          setIsHover1(false)
          setIsHover2(false)
          setIsHover3(false)
          setIsHover4(false)
          setIsHover5(false)
        }}
        onMouseEnter={() => {
          setIsHover5(true)
          setIsHover1(false)
          setIsHover2(false)
          setIsHover3(false)
          setIsHover4(false)
        }}
        className={ishover5 ? `px-2 sm:px-10 md:px-16 lg:px-20  duration-300  w-full z-50 absolute ` : `px-2 sm:px-10 md:px-16 lg:px-20 w-full hidden `}>
        <div style={{ borderBottomRightRadius: 6, borderBottomLeftRadius: 6 }} className='cart-box  h-auto  relative p-8 '>
          <MegaMenu5 />
        </div>
      </div>
      {/* bottom navbar end here */}

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" w-full h-full bg-transparent flex  items-center justify-center">
          <div className=" w-80 h-auto cart-box flex items-center flex-col justify-center rounded-md gap-y-3 py-10 px-5">
            <h1 className=" text-white text-center w-full">Are you sure you want Sign out ?</h1>
            <div className=" flex items-center w-full  gap-x-4 justify-center">
              <button onClick={() => { setOpen2(false) }} className=" p-1 px-4  outline outline-1 outline-orange-500 py-2 rounded-md w-full flex items-center justify-center gap-3 shadow-2xl text-white">
                <span>No</span>
              </button>
              <button onClick={() => { signOut() }} className=" p-1 px-4  bg-orange-500 py-2 rounded-md w-full flex items-center justify-center gap-3 shadow-2xl text-white">
                <span>Yes</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>

    </div >

  );

}

export default Navbar;
