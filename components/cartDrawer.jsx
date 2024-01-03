import React, { useState, useEffect } from 'react'
import { deleteProduct } from '@/app/redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import { SwipeableDrawer } from '@mui/material';

function CartDrawer(props) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const data = useSelector((e) => e.cart)
    const dispatch = useDispatch()

    const totalNormal = data.reduce((acc, product) => {
        acc += product.price * product.quantity
        return acc;
    }, 0)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <React.Fragment key={"right"}>
            <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
                className=" flex flex-col justify-between">
                <div className=" flex items-end justify-between pr-3 mt-3">
                    <p className=" ml-4 py-0">Cart</p>
                    <button onClick={toggleDrawer("right", false)} size="small" className="rounded-full text-sm bg-gray-700 duration-300 hover:bg-gray-600 p-2 text-white">
                        <CloseIcon fontSize="small" />
                    </button>
                </div>
                <Box
                    sx={{ width: "right" === 'top' || "right" === 'bottom' ? 'auto' : 250, display: "flex", height: "100%", justifyContent: "space-between", flexDirection: "column" }}
                    role="presentation"
                    onClick={toggleDrawer("right", true)}
                    onKeyDown={toggleDrawer("right", false)}>
                    <div className="flex flex-col h-full gap-2 py-2 px-2">
                        {data.length === 0 ? <div className='h-full  flex w-full items-center justify-center text-black'>Cart is Empty</div> : (
                            <div className="flex flex-col gap-2 py-2 px-2">
                                {data.map((e) => (
                                    <List key={e.id} className="w-full flex items-start gap-3 outline outline-1 outline-gray-300 justify-start text-white rounded-md p-2">
                                        <div className="flex items-center justify-center">
                                            <Image alt='img' height={50} width={50} className="rounded-md" src={e.image.src} />
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
        </React.Fragment>)}


export default CartDrawer