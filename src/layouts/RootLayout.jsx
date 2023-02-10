import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const RootLayout = () => {
  return (
    <>
        <Header/>
        <main className="px-4 md:px-8 py-4">
            <Outlet/>
        </main>
        <footer className="">
          <h2 className="text-blue-100 text-4xl font-bold px-4 py-4">Footer</h2>
        </footer>
    </>
  )
}

export default RootLayout
