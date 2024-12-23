import { Link } from 'react-router-dom';
import './navbar.css'
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
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
                            <button><FaRegUser />Login</button>
                        </div>
                    </div>
                </div>
                <div className="navBottom">
                    <div className="max1140">
                        <div className="navBottom_img">
                            <Link to={'/'}><img src="http://127.0.0.1:5500/source/assets/img/logo.png" alt="" /></Link>
                        </div>
                        <div className="links">
                            <ul>
                                <li>HOME</li>
                                <li>PAGES</li>
                                <li>ALL PRODUCT</li>
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