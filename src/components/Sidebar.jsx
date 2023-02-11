import { useContext } from "react";
import { Context } from "../context/Context";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { showModal, setShowModal } = useContext(Context);
  const cssClass = showModal ? "" : "translate-y-[100%] hidden";
  console.log(showModal);
  return (
    <nav
      className={
        "absolute h-[100%] w-[100%]  justify-center gap-8 text-slate-900 font-bold text-2xl items-center bg-yellow-200 flex flex-col sm:hidden transition " +
        cssClass
      }
    >
      <button onClick={()=>setShowModal(!showModal)} className="absolute top-0 right-0 translate-y-8 translate-x-[-2rem]"><i className="ri-close-line"></i></button>
      <NavLink onClick={()=>setShowModal(!showModal)} to={"/"}>Home</NavLink>
      <NavLink onClick={()=>setShowModal(!showModal)} to={"about"}>About</NavLink>
      <NavLink onClick={()=>setShowModal(!showModal)} to={"docs"}>Docs</NavLink>
      <NavLink onClick={()=>setShowModal(!showModal)} to={"contact"}>Contact</NavLink>
    </nav>
  );
};

export default Sidebar;
