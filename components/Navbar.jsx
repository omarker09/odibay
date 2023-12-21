"use client";
import React, { useState } from "react";
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

import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function Navbar() {
  const dispatch = useDispatch()
  const currentState = useSelector((state) => state.product)

  const [open, setOpen] = React.useState(false);
  const [iscat, setIscat] = React.useState(false)
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
 
    dispatch(trigerdon());
    console.log(currentState);
  }

  function CatHovLeave() {
    dispatch(trigerdoff());
    console.log(currentState);
  }
  return (
    <div >
      <div
        style={{ display: "flex" }}
        className="py-4 h-auto flex items-center justify-between  text-black bg-black outline-1 outline outline-gray-700 px-2 sm:px-10"
      >
        <div className=" flex justify-center gap-2 text-white items-center">
          <a href={"/"} className=" flex items-center gap-2">
            <Image
              className=" rounded-full"
              src={whiteLogo}
              width={25}
              height={25}
              alt="Picture of the author"
            />
            <span> Gixify</span>
          </a>
        </div>
        <div className=" flex items-center gap-2"> 
          <Link href={"/"}>
            <FacebookIcon className=" text-xl text-white" color="white" />
          </Link>
          <Link href={"/"}>
            <InstagramIcon className=" text-xl text-white" color="white" />
          </Link>
        </div>
        <div className=" flex justify-center items-center gap-3 ">
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
      <div className="nav-background stickz z-50 flex items-center justify-between h-auto w-full px-2 sm:px-10 py-2">
        <div onMouseEnter={() => {CatHoveEnter()}} onMouseLeave={() => {CatHovLeave()}} className="  text-white flex cursor-pointer gap-3 items-center outline outline-1 outline-white px-3 rounded-lg py-1">
          <div style={{ fontSize: 10 }} className=" text-white  items-center gap-2 flex">
            <MenuIcon />
            All Categories
          </div>
          <div className=" text-white text-sm items-center gap-2 flex">
            <KeyboardArrowDownIcon />
          </div>

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
            <SearchIcon onClick={handleClickOpen} className=" cursor-pointer" />
            |
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
