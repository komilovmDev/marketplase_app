import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import TabProfile from "./TabProfile";
import Rating from "./Rating";

function HomeProfile() {
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="author-info">
            <div className="author-info__imges">
              <img
                src="https://validthemes.net/site-template/markis/assets/img/team/1.jpg"
                alt="author image"
              />
            </div>
          </div>

          <div className="profile-info">
            <div className="top-info">
              <div className="bio">
                <h4 className="bio__title">Jessica Jones</h4>
                <p className="bio__subtitle">Member since Mar. 2019</p>
                <Link href="#" className="bio__aLink">
                  Follow
                </Link>
              </div>

              <div className="item-info">
                <ul className="item-info__ul">
                  <li className="item-info__li">
                    <h4 className="item-info__title">34</h4>
                    <span className="item-info__subtitle">Total Items</span>
                  </li>
                  <li className="item-info__li">
                    <h4 className="item-info__title">1209</h4>
                    <span className="item-info__subtitle">Total Sales</span>
                  </li>
                  <li className="item-info__li">
                    <div className="item-info__rating">
                      <Rating />
                      <span>(83)</span>
                    </div>
                    <span className="item-info__subtitle">Author Rating</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="author-content">
              <div className="author-content__buttons">
                <button className="author-content__button">Portfolio</button>
                <button className="author-content__button">Following 23</button>
                <button className="author-content__button">
                  Followers 120
                </button>
              </div>
            </div>

            <TabProfile />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProfile;
