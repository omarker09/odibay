"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image'
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

// Icons
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
// Data

import Categoryitems from "@/data/categoryitems";




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
  const dispatch = useDispatch()
  const currentState = useSelector((state) => state.product)
  const [open, setOpen] = React.useState(false);
  const [iscat, setIscat] = React.useState(false)
  const [bolstate, setBolstate] = useState(false)
  const [searchBtnH, setSearchBtnH] = useState(false)
  const [ConditionScroll, setConditionScroll] = useState(false)
  const [offsetY, setOffsetY] = useState("fixed")
  const [isOpen, setIsopen] = useState(false)



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
  function CatHoveEnter() {
    setBolstate(true)
  }
  function CatHovLeave() {
    setBolstate(false)
  }
  useEffect(() => {
    CatHovLeave()
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
      const currentValue = this.scrollY
      setOffsetY(currentValue)
      if (currentValue > lastScroll) {

        setConditionScroll(true)
        setOffsetY("fixed")
      } else if (currentValue < lastScroll) {
        setOffsetY("flex")
        setConditionScroll(false)
      } else {
        console.log("none");
      }
      lastScroll = currentValue
    })
  }, [])

  const [state, setState] = React.useState(false);

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className=" w-full h-auto ">
        <List className=" w-full">
          <div className=" flex items-end justify-between pr-3 pb-2">
            <p className=" ml-4 py-0">Account</p>
            <Button onClick={() => { setIsopen(true) }} size="small" className="rounded-full text-sm bg-gray-700 hover:bg-gray-700 text-white">
              <CloseIcon fontSize="small" />
            </Button>
          </div>
          <ListItem disablePadding>
            <ListItemButton className=" flex items-center gap-3">
              <PersonIcon />
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className=" flex items-center gap-3">
              <PersonAddIcon />
              <ListItemText primary={"Register"} />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <Divider />
      <List className=" w-full">
        <p className=" ml-4 py-2">Categories</p>
        {Categoryitems.map((text, index) => (
          <ListItem key={text.Title} disablePadding>
            <ListItemButton className=" flex items-center gap-3">
              <Image src={text.img} height={30} width={30} />
              {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
              <ListItemText primary={text.Title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
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
  );
  return (
    <div style={{ display: props.display, zIndex: 999 }} className="   duration-200 w-full" >

      <div
        style={{ display: "flex" }}
        className="py-4 h-auto  w-full  flex items-center  justify-between  text-black bg-black outline-1 outline outline-gray-700 px-2 sm:px-10"
      >
        <div className=" flex justify-center text-white items-center">
          <a href={"/"} className=" flex items-center p-1 ">
            <Image
              className=" rounded-full  object-cover"
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
              <button className=" text-white rounded-full p-2 duration-300 bg-gray-700 hover:bg-gray-600" onClick={toggleDrawer(anchor, true)}><MenuIcon /></button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <div className=" flex items-end justify-between pr-3 mt-3">
                  <p className=" ml-4 py-0">Account</p>

                  <button onClick={toggleDrawer(anchor, false)} size="small" className="rounded-full text-sm bg-gray-700 duration-300 hover:bg-gray-600 p-2 text-white">
                    <CloseIcon fontSize="small" />
                  </button>
                </div>
                <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                  role="presentation"
                  onClick={toggleDrawer(anchor, true)}
                  onKeyDown={toggleDrawer(anchor, false)}
                >
                  <div className=" w-full h-auto ">
                    <List className=" w-full">

                      <ListItem disablePadding>
                        <ListItemButton className=" flex items-center gap-3">
                          <PersonIcon />
                          <ListItemText primary={"Login"} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton className=" flex items-center gap-3">
                          <PersonAddIcon />
                          <ListItemText primary={"Register"} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </div>
                  <Divider />
                  <List className=" w-full">
                    <p className=" ml-4 py-2">Categories</p>
                    {Categoryitems.map((text, index) => (
                      <ListItem key={text.Title} disablePadding>
                        <ListItemButton className=" flex items-center gap-3">
                          <Image src={text.img} height={30} width={30} />
                          {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
                          <ListItemText primary={text.Title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
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
        <div className=" md:flex hidden py-3 flex items-center gap-5">
          <button className=" text-white text-sm">IPTV</button>
          <button className=" text-white text-sm">GAMES</button>
          <button className=" text-white text-sm">XBOX</button>
          <button className=" text-white text-sm">PLAYSTATION</button>
          <button className=" text-white text-sm">Rayzer</button>
          <button className=" text-white text-sm">Playstation</button>
        </div>
        <div className=" flex items-center gap-2">
          <div className=" flex items-center gap-2 text-sm text-white">
            
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={0} style={{ color: "white" }} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
          <div className=" flex items-center gap-2 text-white">
            <Link className=" text-sm cursor-pointer" href={"/signup"}>Sign Up</Link>
            <Stack direction="row" spacing={2}>
              <Avatar className=" cursor-pointer" sx={{ width: 30, height: 30 }}>?</Avatar>
            </Stack>
          </div>
          <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <DialogContentText className=" w-60 sm:w-96">
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Saerch"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="outlined" onClick={handleClose}>Search <SearchIcon className=" cursor-pointer" /></Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


/*

    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
*/


/*
        <div style={{ marginBottom: -445 }} onMouseEnter={() => { CatHoveEnter() }} onMouseLeave={() => { CatHovLeave() }} className={bolstate === true ? "boxsh1 w-auto bg-slate-100 rounded-lg shadow-2xl h-96 absolute flex flex-col" : "hidden"}>
          <div className=" flex justify-between w-full items-center p-2 ">
            <h1><MenuIcon /> Ctegorries</h1>
            <button className=" text-black"><CloseIcon fontSize="small" /></button>
          </div>
          <div className=" overflow-y-scroll w-full grid grid-cols-1">

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start ">
                <DesktopMacOutlinedIcon fontSize="small" />
                <span>PC | Laptop</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start ">
                <PhoneIphoneOutlinedIcon fontSize="small" />
                <span>Smart Phones</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start  ">
                <CardGiftcardOutlinedIcon fontSize="small" />
                <span>Gift Cards</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start  ">
                <DesktopMacOutlinedIcon fontSize="small" />
                <span>PC | Laptop</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start ">
                <DesktopMacOutlinedIcon fontSize="small" />
                <span>PC | Laptop</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start ">
                <PhoneIphoneOutlinedIcon fontSize="small" />
                <span>Smart Phones</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start  ">
                <CardGiftcardOutlinedIcon fontSize="small" />
                <span>Gift Cards</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start  ">
                <DesktopMacOutlinedIcon fontSize="small" />
                <span>PC | Laptop</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start ">
                <DesktopMacOutlinedIcon fontSize="small" />
                <span>PC | Laptop</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start ">
                <PhoneIphoneOutlinedIcon fontSize="small" />
                <span>Smart Phones</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start  ">
                <CardGiftcardOutlinedIcon fontSize="small" />
                <span>Gift Cards</span>
              </div>
            </Button>

            <Button className=" rounded-none text-black">
              <div className=" flex items-start gap-3 w-full justify-start  ">
                <DesktopMacOutlinedIcon fontSize="small" />
                <span>PC | Laptop</span>
              </div>
            </Button>

          </div>
        </div>
*/