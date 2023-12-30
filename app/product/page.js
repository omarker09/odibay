import React from 'react'
import Navbar from '@/components/Navbar'
import Productdetails from '@/components/productdetails'
import Bottomtabs from '@/components/bottomtabs'
function Product() {
  return (
    <div className=' flex flex-col'>
        <Navbar/>
        <Productdetails/>
        <Bottomtabs/>
    </div>
  )
}

export default Product