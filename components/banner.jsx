'use client'
import React from 'react'
import Myswipper from "./swipper"
import { useSelector, useDispatch } from 'react-redux';
import { trigerdon, trigerdoff } from "@/app/redux/slices/testSlice";
function Banner() {

  const currentState = useSelector((state) => state.product)
  const dispatch = useDispatch()
  React.useEffect(() => {
    console.log(currentState);
  }, [currentState])

  function CatHovLeave() {
    dispatch(trigerdoff());
  
  }

  function CatHoveEnter() {

    dispatch(trigerdon());
  
  }
  return (
    <div className=' h-auto w-full sm:px-10 relative px-2 py-5 md:px-10 md:py-5'>
      <div  onMouseLeave={() => { CatHovLeave() }} onMouseEnter={() => {CatHoveEnter()}} className={currentState ? ' bg-white w-96 h-96 absolute shadow-2xl top-0 left-2 sm:left-10 z-50 ' : ' bg-slate-400 w-40 h-96 absolute top-0 left-0 z-50 hidden'}>

      </div>
      <Myswipper />

    </div>
  )
}

export default Banner