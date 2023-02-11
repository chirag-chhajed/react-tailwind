import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
// import { Context } from "../context/Context"
// import { useContext } from "react"

const RootLayout = () => {
  // const {showModal,setShowModal} = useContext(Context);
  return (
    <>
      <Sidebar />
      <Header />

      <main className="px-4 md:px-8 py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
