import React from 'react'
import Navbar from '@/components/Navbar'
import Productdetails from '@/components/productdetails'
function Product() {
  return (
    <div className=' flex flex-col'>
        <Navbar/>
        <Productdetails/>
    </div>
  )
}

export default Product