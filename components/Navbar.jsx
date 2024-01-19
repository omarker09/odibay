"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import { deleteProduct } from '@/app/redux/slices/cartSlice';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import whiteLogo from "../public/white-logo.png"
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
import ProjectLogo from "../public/project-logo.png"
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

import avatar1 from "../public/avatars/team-01.jpg"


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
  const currentState = useSelector((state) => state.product)
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
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen(true);
  const handleClose2 = () => setOpen(false);
  const [noAuth, setoAuth] = useState(false)
  const dispatch = useDispatch()

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
  function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(cname) == 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return "";
  }
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  function CatHoveEnter() {
    setBolstate(true)
  }

  function CatHovLeave() {
    setBolstate(false)
  }
  function getUserinfo() {

    const usr_info = localStorage.getItem("u_inf")
    const usr_info_json = JSON.parse(usr_info)
    setUsername(usr_info_json[0].username)
    console.log(usr_info_json);
  }
  useEffect(() => {
    const u_k = Cookies.get("u_tk")
    if (!u_k || u_k === "") {
      setoAuth(true)

    } else {
      setoAuth(false)
    }
    CatHovLeave()
    getUserinfo()
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
    setOpen2(false)
    window.location.reload()
    

  }
  return (
    <div style={{ display: props.display, zIndex: 999 }} className="   duration-200 w-full" >
      <div
        style={{ display: "flex" }}
        className="py-4 h-auto  w-full  flex items-center  justify-between  text-black bg-black outline-1 outline outline-gray-700 px-2 sm:px-10">
        <div className=" flex justify-center text-white items-center">
          <a href={"/"} className=" flex items-center p-1 ">
            <Image
              className="  object-cover"
              src={ProjectLogo}
              width={115}
              height={115}
              alt="Picture of the author"
            />
          </a>
        </div>
        <div className=" flex items-center w-6/12 gap-1">
          <div onMouseEnter={() => { setSearchBtnH(true) }} onMouseLeave={() => { setSearchBtnH(false) }} className={searchBtnH === true ? " hidden sm:flex items-center justify-between w-full search-background outline outline-1 outline-gray-400  p-1 pr-2 pl-3 rounded-md gap-2" : " hidden sm:flex items-center w-full justify-between search-background outline outline-1 p-1 px-2   pl-3 rounded-md gap-2"}>
            <input style={{ border: "none", outline: "none" }} placeholder="Search..." className=" text-white w-full search-background " />
            <button className=" p-1 px-4  bg-orange-500 rounded-md shadow-2xl text-white">
              <SearchOutlinedIcon fontSize="small" />
            </button>
          </div>
        </div>
        <div className=" flex  sm:flex justify-center items-center gap-3 ">
          <Link href={"https://www.google.com"} className=" text-gray-400 text-sm" target="_blank">
            Home
          </Link>
          <Link href={"https://www.google.com"} className=" text-gray-400 text-sm" target="_blank">
            About
          </Link>
          <Link href={"https://www.google.com"} className=" text-gray-400 text-sm" target="_blank">
            Contact
          </Link>
        </div>
      </div>
      <div style={{ zIndex: 9999999 }} className=" nav-background  z-50 flex items-center  justify-between h-auto w-full px-2 sm:px-10 py-2">
        <div className=" text-white">
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <button className=" text-white rounded-full px-2 py-2 duration-300 bg-gray-700 hover:bg-gray-600" onClick={toggleDrawer(anchor, true)}><MenuIcon /></button>
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
                    <div className={noAuth ? "hidden" : " flex flex-col py-2 items-center justify-center"}>
                      <Image
                        src={avatar1}
                        height={100}
                        width={100}
                        style={{ border: "solid 3px yellow" }}
                        className="    rounded-full "
                      />
                      <div>
                        <span className=" text-black text-lg font-bold">{!username || username === "" ? "" : username}</span>
                      </div>
                    </div>
                  </div>
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
                  <ListItem className={!Cookies.get("u_tk") || Cookies.get("u_tk") === ""  ? "hidden" : " py-2"} disablePadding>
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
        <div className="hidden md:flex  items-center gap-2">
          <button className="nav-buttons-bg text-xs sm:text-sm px-6 outline outline-1 outline-gray-700 py-2">IPTV</button>
          <button className="nav-buttons-bg text-xs sm:text-sm px-6 outline outline-1 outline-gray-700 py-2">PC Games</button>
          <button className="nav-buttons-bg text-xs sm:text-sm px-6 outline outline-1 outline-gray-700 py-2">Playstation</button>
          <button className="nav-buttons-bg text-xs sm:text-sm px-6 outline outline-1 outline-gray-700 py-2">XBOX</button>
        </div>
        <div className=" flex items-center gap-2">
          <div className=" hidden sm:flex items-center gap-2 text-sm text-white">
            <IconButton onClick={toggleDrawer('right', true)} aria-label="cart">
              <StyledBadge badgeContent={data.length} style={{ color: "white" }} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
          <div className=" flex items-center gap-2 text-white">
            <Link className=" flex items-center justify-center gap-2 text-sm cursor-pointer" href={noAuth ? "/login": "/myprofile/me"}>
              {noAuth ? "Sign in" : username}
              <Stack direction="row" spacing={2}>
                <Avatar className=" cursor-pointer" sx={{ width: 30, height: 30 }}>?</Avatar>
              </Stack>
            </Link>

          </div>
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
                        </List>
                      ))}
                    </div>
                  )}
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
        </div>
      </div>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className=" w-full h-full bg-transparent flex  items-center justify-center">
          <div className=" w-80 h-auto nav-background flex items-center flex-col justify-center rounded-md gap-y-3 py-10 px-5">
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
    </div>
  );
}

export default Navbar;
