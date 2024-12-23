import './footer.css'
import { FaFacebookF, FaPinterest, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer>
            <div className="footerCon">
                <div className="footerCon_top">
                    <div className="footerCon_top_box1">
                        <label>About</label>
                        <p>Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing because sitting replied six. Had arose guest visit going off child</p>
                        <div>
                            <button><FaFacebookF /></button>
                            <button><FaXTwitter /></button>
                            <button><FaPinterest /></button>
                            <button><FaTelegramPlane /></button>
                        </div>
                    </div>
                    <div className="footerCon_top_box2">
                        <label htmlFor="">Company</label>
                        <ul>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Brand</li>
                            <li>Products</li>
                            <li>Affiliate</li>
                            <li>Copyrights</li>
                            <li>Licenses</li>
                        </ul>
                    </div>
                    <div className="footerCon_top_box2">
                        <label htmlFor="">Support</label>
                        <ul>
                            <li>Create Profile</li>
                            <li>Download</li>
                            <li>Refund Policy</li>
                            <li>Live Chat</li>
                            <li>Authors Faq</li>
                            <li>Buyer Guide</li>
                        </ul>
                    </div>
                    <div className="footerCon_top_box3">
                        <div className="footerCon_top_box3_top">
                            <div>
                                <span>124778</span>
                                <label htmlFor="">Total Items</label>
                            </div>
                            <div>
                                <span>397877</span>
                                <label htmlFor="">Community Users</label>
                            </div>
                        </div>
                        <div className="footerCon_top_box3_bottom">
                            <label htmlFor="">We Accept</label>
                            <div>
                                <button><FaFacebookF /></button>
                                <button><FaXTwitter /></button>
                                <button><FaPinterest /></button>
                                <button><FaTelegramPlane /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}