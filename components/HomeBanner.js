import React from "react";
import Image from "next/image";
import banner1 from "../public/images/banner-1.jpg";
import banner2 from "../public/images/banner-2.jpg";
import banner3 from "../public/images/banner-3.jpg";

export const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <Image
              src={banner1}
              alt="women's latest fashion sale"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Womens latest fashion sale</h2>

              <p className="banner-text">
                starting at $ <b>20</b>.00
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <Image
              src={banner2}
              alt="modern sunglasses"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at $ <b>15</b>.00
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <Image
              src={banner3}
              alt="new fashion summer sale"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at $ <b>29</b>.99
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
