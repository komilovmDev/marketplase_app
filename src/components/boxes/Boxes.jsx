import { useState } from 'react';
import { Link } from 'react-router-dom';
import './boxes.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Boxes({ setBoxData, boxData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Show 6 items per page

    // Calculate total number of pages
    const totalPages = Math.ceil(boxData.length / itemsPerPage);

    // Navigate to the previous page
    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Navigate to the next page
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Get the current page's data
    const currentData = boxData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="boxes">
            <div className="boxesCon">
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
                                <p>{box.price} сум</p>
                                <Link to="/productsingle">
                                    <button>Ko‘rib chiqish</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="boxes_pagin">
                <button onClick={handlePrev} disabled={currentPage === 1} aria-label="Previous">
                    <FaAngleLeft />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <span
                        key={i}
                        className={currentPage === i + 1 ? 'active' : ''}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </span>
                ))}
                <button onClick={handleNext} disabled={currentPage === totalPages} aria-label="Next">
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
}
