import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Banner from '@/components/banner'
import Fastcategory from '@/components/fastcategory'
import Productsgroup from '@/components/productsgroup'
import Mainproducts from '@/components/mainproducts'
import Regulerproducts from '@/components/regulerproducts'
import Bannersm from '@/componnent-sm/bannersm'
import Smgroups from '@/components/smgroups'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <div className=' h-full flex flex-col gap-1 w-full bg-slate-100 '>
      <Navbar />
      <Banner />
      <div className=' h-full flex flex-col gap-8 w-full bg-slate-100 '>
        <Fastcategory />
        <Productsgroup />
        <Mainproducts />
        <Regulerproducts />
        <Bannersm />
        <Smgroups />
        <Footer/>
      </div>
 
    </div>
  )
}
