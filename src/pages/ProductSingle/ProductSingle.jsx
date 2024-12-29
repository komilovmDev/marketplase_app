import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import './productsingle.css';

export default function ProductSingle({ setBoxData, boxData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(boxData.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const currentData = boxData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <Navbar />
            <div className="productSingle">
                <div className="productSingle_con">
                    <div className="productSingle_con_boxleft">
                        <div className="boxes_box boxes_box_single">
                            <div className="boxesCon_top">
                                <p>21.12—23.12</p>
                                <p>Бишкек (KG) — Ташкент (UZ) рыба глубокой заморозки 3 т 6 м³</p>
                            </div>
                            <div className="boxesCon_bottom">
                                <p>18.12.2024</p>
                                <p>~ 632 км, рефрижератор, без догруза (отдельное авто)</p>
                                <p className="priceSingle">4 481 230 сум</p>
                            </div>
                        </div>
                        <div className="singleInfo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque error doloribus, praesentium, autem dolorum sapiente dignissimos unde exercitationem sunt at nesciunt? Optio provident laboriosam quo eaque iusto. Sapiente, minus quo, cupiditate, cumque quidem voluptates quae iste nostrum ducimus nobis qui.</p>
                            <Link to={'/login'}><button>Qabul qilish</button></Link>
                        </div>
                    </div>
                    <div className="productSingle_con_Aside">
                        {currentData.map((box, index) => (
                            <div className="boxes_box" key={index}>
                                <div className="boxesCon_top">
                                    <p>{box.date}—{box.date2}</p>
                                    <p>{box.locationA} — {box.locationB}</p>
                                    <p>{box.infom3}</p>
                                </div>
                                <div className="boxesCon_bottom">
                                    <p>{box.date2}</p>
                                    <p>{box.infokm}</p>
                                    <div>
                                        <p>{box.price} {box.priceUnit}</p>
                                        <Link to="/productsingle">
                                            <button>Ko‘rib chiqish</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
