import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"
import { Container } from "lucide-react"

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
        <Header/>
        <Container className="flex-grow">
            <main className="flex-grow">
                <Outlet/>
            </main>
        </Container>
        <Footer/>
    </div>
  )
}

export default MainLayout