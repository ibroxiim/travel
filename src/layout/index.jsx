import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "./../components/footer/index";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
