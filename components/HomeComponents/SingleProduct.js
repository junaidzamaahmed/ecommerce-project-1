import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ImageContainer } from "./ProductContainer";
import { BagAddOutline } from "react-ionicons";

export const SingleProduct = ({ product }) => {
  const full = Math.round(product.rating);
  const rating = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= full) {
      rating.push(<ion-icon key={i} name="star"></ion-icon>);
    } else {
      rating.push(<ion-icon key={i} name="star-outline"></ion-icon>);
    }
  }
  return (
    <div className="showcase">
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="showcase-banner"
      >
        <ImageContainer>
          <Image
            height="300"
            src={product.img1}
            alt={product.title}
            width="300"
            className="product-img default"
          />
        </ImageContainer>
        {product.img2 && (
          <Image
            height="300"
            src={product.img2}
            alt={product.title}
            width="300"
            className="product-img hover"
          />
        )}

        {product.discount && (
          <p className="showcase-badge">
            {100 - (product.offerPrice / product.regularPrice) * 100}%
          </p>
        )}
        {product.sale && <p className="showcase-badge angle black">sale</p>}
        {product.new && <p className="showcase-badge angle pink">new</p>}
        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <BagAddOutline color={"#00000"} />
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {product.category}
        </a>

        <h3 className="showcase-title">
          <Link href={"/products/" + product.key}>{product.title}</Link>
        </h3>

        <div className="showcase-rating">{rating.map((rate) => rate)}</div>

        <div className="price-box">
          <p className="price">${product.offerPrice}.00</p>
          <del>${product.regularPrice}.00</del>
        </div>
      </div>
    </div>
  );
};
