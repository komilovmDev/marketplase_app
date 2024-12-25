import './notfication.css'
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

export default function Notfication() {
    return (
        <div className="notfication">
            <div className="notficationList">
                <div className="notficationList_left">
                    <span className="notficationList_left_time"><IoTimeOutline /> 1 kun oldin (18:24 23.12)</span>
                    <span className="notficationList_left_date"><CiCalendarDate /> 25.12.-32.01</span>
                    <p className="notficationList_left_title">Gruyets (PL) — Toshkent shahri (UZ)  ~  4694 km</p>
                    <p className="notficationList_left_deck">dori-darmonlar</p>
                </div>
                <div className="notficationList_right">
                    <span className="notficationList_right_title">400 USD</span>
                    <button>ACCEPT</button>
                </div>
            </div>
            <div className="notficationList">
                <div className="notficationList_left">
                    <span className="notficationList_left_time">1 kun oldin (18:24 23.12)</span>
                    <span className="notficationList_left_date">25.12.-32.01</span>
                    <p className="notficationList_left_title">Gruyets (PL) — Toshkent shahri (UZ)  ~  4694 km</p>
                    <p className="notficationList_left_deck">dori-darmonlar</p>
                </div>
                <div className="notficationList_right">
                    <span className="notficationList_right_title">400 USD</span>
                    <button>ACCEPT</button>
                </div>
            </div>
        </div>
    )
}