'use client'

// main
import React from 'react'
import Myswipper from "./swipper"

// redux toolkit
import { useSelector, useDispatch } from 'react-redux';
import { trigerdon, trigerdoff } from "@/app/redux/slices/testSlice";

function Banner() {
  const currentState = useSelector((state) => state.product)
  const dispatch = useDispatch()
  function CatHovLeave() {
    dispatch(trigerdoff());
  }
  function CatHoveEnter() {
    dispatch(trigerdon());
  }
  return (
    <div className='h-auto flex md:hidden w-full sm:px-10 relative px-2 py-5 md:px-10 md:py-5'>
      <Myswipper />
    </div>
  )
}

export default Banner