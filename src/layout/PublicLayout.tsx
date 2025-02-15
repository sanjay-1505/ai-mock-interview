import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"


const PublicLayout = () => {
  return (
    <div className='w-full'>
        {/* Handler to store the user data */}
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicLayout