import { NavLink,Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/Context"

const Header = () => {
  const {showModal,setShowModal} = useContext(Context)
  console.log(showModal)
  return (
    <header className='h-[15vh] px-4 py-6 flex justify-between items-center text-xl text-yellow-50 font-bold md:px-8 md:text-2xl'>
      <Link to={"/"}>
        <h3>
            API <br /> Generator
        </h3>
        </Link>
        <button onClick={()=> setShowModal(!showModal)} className='bg-white px-2 rounded-sm text-lg sm:hidden text-black'><i className="ri-menu-fill"></i></button>
        <nav className="hidden sm:flex gap-4 md:gap-6">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"docs"}>Docs</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Header
