import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Banner from '@/components/banner'
import Fastcategory from '@/components/fastcategory'
import Productsgroup from '@/components/productsgroup'
import Mainproducts from '@/components/mainproducts'
import Regulerproducts from '@/components/regulerproducts'
export default function Home() {
  return (
    <div  className=' h-full flex flex-col gap-3 w-full bg-slate-100 '>
      <Navbar/>
      <Banner/>
      <Fastcategory/>
      <Productsgroup/>
      <Mainproducts/>
      <Regulerproducts/>
    </div>
  )
}
