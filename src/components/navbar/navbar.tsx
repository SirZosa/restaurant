import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Burger from "../burger-icon/burger"
import logo from "../../assets/logo.png"
import fb from '../../assets/Facebook.png'
import ig from '../../assets/Instagram.png'
import tw from '../../assets/Twitter.png'
import "./navbar.css"
export default function Navbar(){
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    function onClickProp(){
        setOpen(prev => !prev);
    }
    return(
        <>
        <nav>
            <div className="nav">
                <img src={logo} className="logo" alt="loco icon" onClick={()=> navigate("/")} />
                <div className="nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="menu">MENU</Link>
                    <Link to="specials">SPECIALS</Link>
                    <Link to="other">OTHER</Link>
                </div>
                <div className="burger-icon">
                    <Burger arial-label="open-close" onClickProp={onClickProp} open={open}/>
                </div>
            </div>
            <div className={`nav-container ${open ? 'open' : 'close'}`}>
                <div className="nav-container-links">
                    <Link onClick={()=> setOpen(false)} to="/">HOME</Link>
                    <Link onClick={()=> setOpen(false)} to="menu">MENU</Link>
                    <Link onClick={()=> setOpen(false)} to="specials">SPECIALS</Link>
                    <Link onClick={()=> setOpen(false)} to="other">OTHER</Link>
                </div>
                <div className="nav-socials">
                    <a href="#"><img src={ig} alt="instagram logo" /></a>
                    <a href="#"><img src={fb} alt="facebook logo" /></a>
                    <a href="#"><img src={tw} alt="twitter logo" /></a>
                </div>
            </div>
        </nav>
        </>
    )
}