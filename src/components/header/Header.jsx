import './header.css'
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
    return (
        <header>
            <div className="headerCon">
                <div className="headerCon_info">
                    <h3>617 Premium Bootstrap<br/> Templates & Website Themes</h3>
                    <p>WordPress themes, web templates and more. Brought to you by the largest <br/>global community of creatives.</p>
                </div>
                <div className="headerCon_search">
                    <input type="text" placeholder='Search' />
                    <button><IoSearchSharp /></button>
                </div>
            </div>
        </header>
    )
}