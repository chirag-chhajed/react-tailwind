import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className='h-[12vh] px-4 py-6 flex justify-between items-center text-xl text-yellow-50 font-bold md:px-8 md:text-2xl'>
        <h3 className=''>
            API <br /> Generator
        </h3>
        <button className='bg-white px-2 rounded-sm text-lg sm:hidden text-black'><i className="ri-menu-fill"></i></button>
        <nav className="hidden sm:flex gap-4 md:gap-6">
            <NavLink>Home</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"docs"}>Docs</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Header
