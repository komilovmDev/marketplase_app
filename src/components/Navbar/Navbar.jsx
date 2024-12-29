import { Link } from 'react-router-dom';
import './navbar.css'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

export default function Navbar() {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <>
            <nav>
                <div className="navTop">
                    <div className="max1140">
                        <div className="navTop_left">
                            <p>Total Items: <b>319</b></p>
                            <span>|</span>
                            <p>Community Users: <b>397877</b></p>
                        </div>
                        <div className="navTop_right">
                            <Link to={'/login'}><button><FaRegUser />Login</button></Link>
                        </div>
                    </div>
                </div>
                <div className="navBottom">
                    <button onClick={() => isOpen ? setIsOpen(!isOpen) : setIsOpen(!isOpen)} className="burgerNav">{isOpen ? <IoClose /> : <MdOutlineMenu />}</button>
                    <div className="max1140">
                        <div className="navBottom_img">
                            <Link to={'/'}><img src="https://validthemes.net/site-template/markis/assets/img/logo.png" alt="" /></Link>
                        </div>
                        <div className={isOpen ? "links" : "links burgerClose"}>
                            <ul>
                                <li>HOME</li>
                                <li>PAGES</li>
                                <Link to={'/profil'}><li>PROFIL</li></Link>
                                <li>NEW</li>
                                <li>POPULAR</li>
                                <li>BLOG</li>
                                <li>CONTACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}