import './login.css'
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


export default function Login() {
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
                        <span>
                            <input type="checkbox" />
                            <p>Remember Me</p>
                        </span>
                        <button>LOGIN</button>
                    </div>
                    <div className="registerLink">
                        <p>Not a member yet?</p>
                        <Link to={'/register'}>Register now</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}