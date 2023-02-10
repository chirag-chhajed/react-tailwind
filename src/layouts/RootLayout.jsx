import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
        <header className=" h-[12vh]">
          <h2 className="text-blue-100 text-4xl font-bold px-4 py-4">Header</h2>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer className=" h-[12vh]">
          <h2 className="text-blue-100 text-4xl font-bold px-4 py-4">Footer</h2>
        </footer>
    </>
  )
}

export default RootLayout
