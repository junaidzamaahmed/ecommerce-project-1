import Image from "next/image";
import React from "react";

export const DealOfTheDay = ({ deal }) => {
  const full = Math.round(deal.rating);
  const rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= full) {
      rating.push(<ion-icon key={i} name="star"></ion-icon>);
    } else {
      rating.push(<ion-icon key={i} name="star-outline"></ion-icon>);
    }
  }
  return (
    <div className="showcase-container">
      <div className="showcase">
        <div className="showcase-banner">
          <Image
            src={deal.img}
            alt="shampoo, conditioner & facewash packs"
            className="showcase-img"
          />
        </div>

        <div className="showcase-content">
          <div className="showcase-rating">{rating.map((star) => star)}</div>

          <a href="#">
            <h3 className="showcase-title">{deal.title}</h3>
          </a>

          <p className="showcase-desc">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet consectetur Lorem ipsum dolor
          </p>

          <div className="price-box">
            <p className="price">${deal.offerPrice}</p>

            <del>${deal.regularPrice}</del>
          </div>

          <button className="add-cart-btn">add to cart</button>

          <div className="showcase-status">
            <div className="wrapper">
              <p>
                already sold: <b>{deal.sold}</b>
              </p>

              <p>
                available: <b>{deal.stock}</b>
              </p>
            </div>

            <div className="showcase-status-bar"></div>
          </div>

          <div className="countdown-box">
            <p className="countdown-desc">Hurry Up! Offer ends in:</p>

            <div className="countdown">
              <div className="countdown-content">
                <p className="display-number">360</p>

                <p className="display-text">Days</p>
              </div>

              <div className="countdown-content">
                <p className="display-number">24</p>
                <p className="display-text">Hours</p>
              </div>

              <div className="countdown-content">
                <p className="display-number">59</p>
                <p className="display-text">Min</p>
              </div>

              <div className="countdown-content">
                <p className="display-number">00</p>
                <p className="display-text">Sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
