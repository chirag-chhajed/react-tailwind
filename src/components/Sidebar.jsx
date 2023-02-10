import { createPortal } from "react-dom";
import { Context } from "../context/Context";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const {showModal,setShowModal} = Context;
    console.log(showModal)
  return (
    createPortal(<nav className="hidden sm:flex gap-4 md:gap-6">
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"about"}>About</NavLink>
    <NavLink to={"docs"}>Docs</NavLink>
    <NavLink to={"contact"}>Contact</NavLink>
</nav>),document.body.querySelector('#sidebar'));
};

export default Sidebar;
