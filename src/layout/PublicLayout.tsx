import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"
import AuthHandler from "@/handler/AuthHandler"


const PublicLayout = () => {
  return (
    <div className='w-full'>
        
        {/* Handler to store the user data */}
        <AuthHandler/>


        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicLayout