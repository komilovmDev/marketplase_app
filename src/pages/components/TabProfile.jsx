import React from "react";
import { Link } from "react-router-dom";
import { IoCart, IoStarSharp } from "react-icons/io5";
import PriviewButton from "./PriviewButton";

function TabProfile() {
  return (
    <div className="container">
      <div className="author-box">
        <div className="box-row">
          <div className="box-row__item">
            <div className="box-row__thumb">
              <Link>
                <img
                  src="	https://validthemes.net/site-template/markis/assets/img/product/1.jpg"
                  alt="box-row img"
                  className="thumb__img"
                />
              </Link>
            </div>

            <div className="box-row__info">
              <div className="box-row__top">
                <h4 className="box-row__title">
                  Boxass - Startup Landing Page Theme
                </h4>
                <p className="box-row__subtitle">
                  by Author in Startup / Landing
                </p>
                <div className="box-row__type">
                  <IoCart style={{ color: "#0056b3" }} />
                  <p>13 Sales</p>
                  <div className="box-row__ratings">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </div>
              </div>

              <div className="box-row__bottom">
                <PriviewButton />
                <div className="price">
                  <h4>$59.00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabProfile;
