import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
export default function Layout(){
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}