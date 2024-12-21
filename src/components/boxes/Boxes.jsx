import { Link } from 'react-router-dom';
import './boxes.css'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";


export default function Boxes() {
    return (
        <div className="boxes">
            <div className="boxesCon">
                <div className="boxes_box">
                    <div className="boxesCon_top">
                        <p>21.12—23.12</p>
                        <p>Бишкек (KG) — Ташкент (UZ)</p>
                        <p>рыба глубокой заморозки	3 т	6 м³</p>
                    </div>
                    <div className="boxesCon_bottom">
                        <p>18.12.2024</p>
                        <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                        <div>
                            <p>4 481 230 сум</p>
                            <Link to={'/productsingle'}><button>Ko‘rib chiqish</button></Link>
                        </div>
                    </div>
                </div>
                <div className="boxes_box">
                    <div className="boxesCon_top">
                        <p>21.12—23.12</p>
                        <p>Бишкек (KG) — Ташкент (UZ)</p>
                        <p>рыба глубокой заморозки	3 т	6 м³</p>
                    </div>
                    <div className="boxesCon_bottom">
                        <p>18.12.2024</p>
                        <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                        <div>
                            <p>4 481 230 сум</p>
                            <Link to={'/productsingle'}><button>Ko‘rib chiqish</button></Link>
                        </div>
                    </div>
                </div>
                <div className="boxes_box">
                    <div className="boxesCon_top">
                        <p>21.12—23.12</p>
                        <p>Бишкек (KG) — Ташкент (UZ)</p>
                        <p>рыба глубокой заморозки	3 т	6 м³</p>
                    </div>
                    <div className="boxesCon_bottom">
                        <p>18.12.2024</p>
                        <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                        <div>
                            <p>4 481 230 сум</p>
                            <Link to={'/productsingle'}><button>Ko‘rib chiqish</button></Link>
                        </div>
                    </div>
                </div>
                <div className="boxes_box">
                    <div className="boxesCon_top">
                        <p>21.12—23.12</p>
                        <p>Бишкек (KG) — Ташкент (UZ)</p>
                        <p>рыба глубокой заморозки	3 т	6 м³</p>
                    </div>
                    <div className="boxesCon_bottom">
                        <p>18.12.2024</p>
                        <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                        <div>
                            <p>4 481 230 сум</p>
                            <Link to={'/productsingle'}><button>Ko‘rib chiqish</button></Link>
                        </div>
                    </div>
                </div>

                <div className="boxes_box">
                    <div className="boxesCon_top">
                        <p>21.12—23.12</p>
                        <p>Бишкек (KG) — Ташкент (UZ)</p>
                        <p>рыба глубокой заморозки	3 т	6 м³</p>
                    </div>
                    <div className="boxesCon_bottom">
                        <p>18.12.2024</p>
                        <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                        <div>
                            <p>4 481 230 сум</p>
                            <Link to={'/productsingle'}><button>Ko‘rib chiqish</button></Link>
                        </div>
                    </div>
                </div>
                <div className="boxes_box">
                    <div className="boxesCon_top">
                        <p>21.12—23.12</p>
                        <p>Бишкек (KG) — Ташкент (UZ)</p>
                        <p>рыба глубокой заморозки	3 т	6 м³</p>
                    </div>
                    <div className="boxesCon_bottom">
                        <p>18.12.2024</p>
                        <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                        <div>
                            <p>4 481 230 сум</p>
                            <Link to={'/productsingle'}><button>Ko‘rib chiqish</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxes_pagin">
                <button><FaAngleLeft /></button>
                <span className='active'>1</span>
                <span>2</span>
                <span>3</span>
                <button><FaAngleRight /></button>
            </div>
        </div>
    )
}