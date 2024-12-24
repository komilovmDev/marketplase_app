import './login.css'
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export default function Register() {
    return (
        <>
            <Navbar />
            <div className="loginCon">
                <div className="loginBox">
                    <div className="loginBox_top">
                        <h4>Welcome Back</h4>
                        <p>You can sign in with your email.</p>
                    </div>
                    <div className="loginForm">
                        <input type="email" placeholder='Email*' />
                        <input type="password" placeholder='Password*'/>
                        <input type="password" placeholder='Password*'/>
                        <span>
                            <input type="checkbox" />
                            <p>Remember Me</p>
                        </span>
                        <button>RESGISTER</button>
                    </div>
                    <div className="registerLink">
                        <p>Not a member yet?</p>
                        <Link to={'/login'}>Login now</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}