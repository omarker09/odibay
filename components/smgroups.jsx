import React from 'react'
import Smallgroup from '@/components/smallgroup'
import winimg from "../public/collectble/steam.png"
import winimgz from "../public/collectble/netflix.png"
import winimgs from "../public/collectble/nordvpn.png"
import winimge from "../public/collectble/razer.png"

import img2 from "../public/collectble/app-development.png"
import img3 from "../public/collectble/gift-card.png"
import img4 from "../public/collectble/playstation.png"

function Smgroups() {
  return (
    <div className='w-full gap-3 h-auto flex flex-col items-start justify-start  py-3'>
      <div className='flex px-2 sm:px-10 flex-col gap-0 justify-start'>
        <h1 className='nav-background-text text-2xl font-bold'>Get more out of GIXIFY.COM</h1>
        <p className='text-gray-500'>Explore exclusive programs and projects designed to enhance your experience</p>
      </div>
      <div className='grid grid-cols-2 w-full  sm:grid-cols-2 md:grid-cols-2 h-auto lg:grid-cols-2 justify-between gap-6 px-2 sm:px-10'>
        <Smallgroup img={winimgs} />
        <Smallgroup img={winimgz} />
        <Smallgroup img={winimg} />
        <Smallgroup img={winimge} />
      </div>
    </div>
  )
}

export default Smgroups