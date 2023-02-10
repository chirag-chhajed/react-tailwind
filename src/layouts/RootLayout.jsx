import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    <>
        <Header/>
        <main className="px-4 md:px-8 py-4">
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default RootLayout
