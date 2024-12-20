import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './productsingle.css'


export default function ProductSingle() {
    return (
        <>
            <Navbar />
            <div className="productSingle">
                <div className="productSingle_con">
                    <div className="productSingle_con_boxleft">
                        <div className="boxes_box boxes_box_single">
                            <div className="boxesCon_top">
                                <p>21.12—23.12</p>
                                <p>Бишкек (KG) — Ташкент (UZ) рыба глубокой заморозки	3 т	6 м³</p>
                            </div>
                            <div className="boxesCon_bottom">
                                <p>18.12.2024</p>
                                <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                                <p className="priceSingle">4 481 230 сум</p>
                            </div>
                        </div>
                        <div className="singleInfo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur numquam iusto officiis nesciunt quibusdam soluta. Nisi ullam soluta cumque culpa minus rem totam facere dolor accusantium voluptates saepe, quidem provident quam a, maxime at atque officiis. Saepe, libero atque! Aperiam tempora possimus hic dolor repudiandae consequatur dolore quam, in laborum minus quidem neque deleniti fuga inventore dolores a expedita, nulla saepe culpa voluptatem reprehenderit voluptates! Et laudantium commodi nisi aliquid temporibus placeat, corrupti molestiae quo labore asperiores reprehenderit consequuntur architecto! Officiis vitae itaque aut aliquid amet earum quisquam omnis nostrum illo soluta id tempora similique exercitationem, laborum dignissimos tempore.</p>
                            <button>Reception</button>
                        </div>
                    </div>
                    <div className="productSingle_con_Aside">
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
                                    <Link to={'/productsingle'}><button>Preview</button></Link>
                                </div>
                            </div>
                        </div>                <div className="boxes_box">
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
                                    <Link to={'/productsingle'}><button>Preview</button></Link>
                                </div>
                            </div>
                        </div>                <div className="boxes_box">
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
                                    <Link to={'/productsingle'}><button>Preview</button></Link>
                                </div>
                            </div>
                        </div>                <div className="boxes_box">
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
                                    <Link to={'/productsingle'}><button>Preview</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}