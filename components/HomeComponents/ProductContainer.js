import React from "react";
import Image from "next/image";
import bs1 from "../../public/images/products/1.jpg";
import bs2 from "../../public/images/products/2.jpg";
import bs3 from "../../public/images/products/3.jpg";
import bs4 from "../../public/images/products/4.jpg";
import belt from "../../public/images/products/belt.jpg";
import clothes1 from "../../public/images/products/clothes-1.jpg";
import clothes2 from "../../public/images/products/clothes-2.jpg";
import clothes3 from "../../public/images/products/clothes-3.jpg";
import clothes4 from "../../public/images/products/clothes-4.jpg";
import jacket1 from "../../public/images/products/jacket-1.jpg";
import jacket2 from "../../public/images/products/jacket-2.jpg";
import jacket3 from "../../public/images/products/jacket-3.jpg";
import jacket4 from "../../public/images/products/jacket-4.jpg";
import jacket5 from "../../public/images/products/jacket-5.jpg";
import jacket6 from "../../public/images/products/jacket-6.jpg";
import jewellery1 from "../../public/images/products/jewellery-1.jpg";
import jewellery2 from "../../public/images/products/jewellery-2.jpg";
import jewellery3 from "../../public/images/products/jewellery-3.jpg";
import partywear1 from "../../public/images/products/party-wear-1.jpg";
import partywear2 from "../../public/images/products/party-wear-2.jpg";
import perfume from "../../public/images/products/perfume.jpg";
import shampoo from "../../public/images/products/shampoo.jpg";
import shirt1 from "../../public/images/products/shirt-1.jpg";
import shirt2 from "../../public/images/products/shirt-2.jpg";
import shoe1 from "../../public/images/products/shoe-1.jpg";
import shoe11 from "../../public/images/products/shoe-1_1.jpg";
import shoe2 from "../../public/images/products/shoe-2.jpg";
import shoe21 from "../../public/images/products/shoe-2_1.jpg";
import shoe3 from "../../public/images/products/shoe-3.jpg";
import shoe4 from "../../public/images/products/shoe-4.jpg";
import shoe5 from "../../public/images/products/shoe-5.jpg";
import shorts1 from "../../public/images/products/shorts-1.jpg";
import shorts2 from "../../public/images/products/shorts-2.jpg";
import sports1 from "../../public/images/products/sports-1.jpg";
import sports2 from "../../public/images/products/sports-2.jpg";
import sports3 from "../../public/images/products/sports-3.jpg";
import sports4 from "../../public/images/products/sports-4.jpg";
import sports5 from "../../public/images/products/sports-5.jpg";
import sports6 from "../../public/images/products/sports-6.jpg";
import watch1 from "../../public/images/products/watch-1.jpg";
import watch2 from "../../public/images/products/watch-2.jpg";
import watch3 from "../../public/images/products/watch-3.jpg";
import watch4 from "../../public/images/products/watch-4.jpg";
import styled from "styled-components";
import { SidebarMenuCatItem } from "./SidebarMenuCatItem";
import { DealOfTheDay } from "./DealOfTheDay";
import { SingleProduct } from "./SingleProduct";
import { toggleMobileCatag } from "../../slices/mobilemenuSlice";
import { useSelector, useDispatch } from "react-redux";

export const ImageContainer = styled.div`
  position: absolute;
`;
export const ProductContainer = ({}) => {
  const mobileCatag = useSelector((state) => state.mobilemenu.mobileCatagValue);
  const dispatch = useDispatch();

  const catagMenuData = [
    {
      key: 1,
      title: "Clothes",
      img: bs1,
      items: [
        { itemName: "Shirt", value: "300" },
        { itemName: "Shorts & Jeans", value: "60" },
        { itemName: "Jackets", value: "50" },
      ],
    },
    {
      key: 2,
      title: "Footwear",
      img: bs2,
      items: [
        { itemName: "Sports", value: "45" },
        { itemName: "Formal", value: "75" },
        { itemName: "Casual", value: "35" },
        { itemName: "Safety Shoes", value: "25" },
      ],
    },
    {
      key: 3,
      title: "Jewellery",
      img: bs3,
      items: [
        { itemName: "Earrings", value: "45" },
        { itemName: "Couple Rings", value: "75" },
        { itemName: "Necklace", value: "61" },
      ],
    },
    {
      key: 4,
      title: "Perfume",
      img: bs4,
      items: [
        { itemName: "Clothes Perfume", value: "45" },
        { itemName: "Deodrant", value: "75" },
        { itemName: "Jacket", value: "35" },
        { itemName: "Dress & Frock", value: "25" },
      ],
    },
    {
      key: 5,
      title: "Cosmetics",
      img: bs2,
      items: [
        { itemName: "Sports", value: "45" },
        { itemName: "Formal", value: "75" },
        { itemName: "Casual", value: "35" },
        { itemName: "Safety", value: "25" },
      ],
    },
    {
      key: 6,
      title: "Glasses",
      img: belt,
      items: [
        { itemName: "Sports", value: "45" },
        { itemName: "Formal", value: "75" },
        { itemName: "Casual", value: "35" },
        { itemName: "Safety", value: "25" },
      ],
    },
    {
      key: 7,
      title: "Bags",
      img: belt,
      items: [
        { itemName: "Sports", value: "45" },
        { itemName: "Formal", value: "75" },
        { itemName: "Casual", value: "35" },
        { itemName: "Safety", value: "25" },
      ],
    },
  ];
  const dealOfTheDay = [
    {
      key: 1,
      img: shampoo,
      title: "SHAMPOO, CONDITIONER & FACEWASH PACKS",
      descShort:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
      regularPrice: 200,
      offerPrice: 150,
      stock: 40,
      sold: 20,
      rating: 3,
    },
    {
      key: 2,
      img: jewellery1,
      title: "ROSE GOLD DIAMONDS EARRING",
      descShort:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
      regularPrice: 2000,
      offerPrice: 1950,
      stock: 55,
      sold: 20,
      rating: 4.5,
    },
  ];
  const products = [
    {
      key: 1,
      img1: jacket3,
      img2: jacket4,
      discount: true,
      category: "Jacket",
      title: "Mens Winter Leathers Jackets",
      rating: 3,
      regularPrice: 75,
      offerPrice: 48,
    },
    {
      key: 2,
      img1: shirt1,
      img2: shirt2,
      sale: true,
      category: "Shirt",
      title: "Pure Garment Dyed Cotton Shirt",
      rating: 4,
      regularPrice: 56,
      offerPrice: 45,
    },
    {
      key: 3,
      img1: jacket5,
      img2: jacket6,
      category: "Jacket",
      title: "MEN Yarn Fleece Full-Zip Jacket",
      rating: 4,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 4,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 5,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 6,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 7,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 8,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 9,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 10,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 11,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
    {
      key: 12,
      img1: clothes3,
      img2: clothes4,
      new: true,
      category: "Skirt",
      title: "Black Floral White Midi Skirt",
      rating: 5,
      regularPrice: 65,
      offerPrice: 58,
    },
  ];
  return (
    <div className="product-container">
      <div className="container">
        {/* <!--
          - SIDEBAR
        --> */}

        <div
          className={
            mobileCatag
              ? "sidebar has-scrollbar active"
              : "sidebar has-scrollbar"
          }
          data-mobile-menu
        >
          <div className="sidebar-category">
            <div className="sidebar-top">
              <h2 className="sidebar-title">Category</h2>

              <button
                onClick={() => dispatch(toggleMobileCatag())}
                className="sidebar-close-btn"
                data-mobile-menu-close-btn
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="sidebar-menu-category-list">
              {catagMenuData.map((catagData) => (
                <SidebarMenuCatItem key={catagData.key} catagData={catagData} />
              ))}
            </ul>
          </div>

          <div className="product-showcase">
            <h3 className="showcase-heading">best sellers</h3>

            <div className="showcase-wrapper">
              <div className="showcase-container">
                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <Image
                      src={bs1}
                      alt="baby fabric shoes"
                      width="75"
                      height="75"
                      className="showcase-img"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">baby fabric shoes</h4>
                    </a>

                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$4.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <Image
                      src={bs2}
                      alt="men's hoodies t-shirt"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">mens hoodies t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                      <del>$17.00</del>
                      <p className="price">$7.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <Image
                      src={bs3}
                      alt="girls t-shirt"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">girls t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>

                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$3.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <Image
                      src={bs4}
                      alt="woolen hat for men"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">woolen hat for men</h4>
                    </a>
                    <div className="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <div className="price-box">
                      <del>$15.00</del>
                      <p className="price">$12.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-box">
          {/* <!--
            - PRODUCT MINIMAL
          --> */}

          <div className="product-minimal">
            <div className="product-showcase">
              <h2 className="title">New Arrivals</h2>

              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={clothes1}
                        alt="relaxed short full sleeve t-shirt"
                        width="70"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Relaxed Short full Sleeve T-Shirt
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Clothes
                      </a>

                      <div className="price-box">
                        <p className="price">$45.00</p>
                        <del>$12.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={clothes2}
                        alt="girls pink embro design top"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Girls pnk Embro design Top
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Clothes
                      </a>

                      <div className="price-box">
                        <p className="price">$61.00</p>
                        <del>$9.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={clothes3}
                        alt="black floral wrap midi skirt"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Black Floral Wrap Midi Skirt
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Clothes
                      </a>

                      <div className="price-box">
                        <p className="price">$76.00</p>
                        <del>$25.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={shirt1}
                        alt="pure garment dyed cotton shirt"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Pure Garment Dyed Cotton Shirt
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Mens Fashion
                      </a>

                      <div className="price-box">
                        <p className="price">$68.00</p>
                        <del>$31.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={jacket5}
                        alt="men yarn fleece full-zip jacket"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          MEN Yarn Fleece Full-Zip Jacket
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Winter wear
                      </a>

                      <div className="price-box">
                        <p className="price">$61.00</p>
                        <del>$11.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={jacket1}
                        alt="mens winter leathers jackets"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Mens Winter Leathers Jackets
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Winter wear
                      </a>

                      <div className="price-box">
                        <p className="price">$32.00</p>
                        <del>$20.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={jacket3}
                        alt="mens winter leathers jackets"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Mens Winter Leathers Jackets
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Jackets
                      </a>

                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$25.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={shorts1}
                        alt="better basics french terry sweatshorts"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Better Basics French Terry Sweatshorts
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Shorts
                      </a>

                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$10.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-showcase">
              <h2 className="title">Trending</h2>

              <div className="showcase-wrapper  has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={sports1}
                        alt="running & trekking shoes - white"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Running & Trekking Shoes - White
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Sports
                      </a>

                      <div className="price-box">
                        <p className="price">$49.00</p>
                        <del>$15.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={sports2}
                        alt="trekking & running shoes - black"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Trekking & Running Shoes - black
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Sports
                      </a>

                      <div className="price-box">
                        <p className="price">$78.00</p>
                        <del>$36.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={partywear1}
                        alt="womens party wear shoes"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Womens Party Wear Shoes
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Party wear
                      </a>

                      <div className="price-box">
                        <p className="price">$94.00</p>
                        <del>$42.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={sports3}
                        alt="sports claw women's shoes"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Sports Claw Womens Shoes
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Sports
                      </a>

                      <div className="price-box">
                        <p className="price">$54.00</p>
                        <del>$65.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={sports6}
                        alt="air tekking shoes - white"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Air Trekking Shoes - white
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Sports
                      </a>

                      <div className="price-box">
                        <p className="price">$52.00</p>
                        <del>$55.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={sports3}
                        alt="Boot With Suede Detail"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Boot With Suede Detail
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        boots
                      </a>

                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={shoe1}
                        alt="men's leather formal wear shoes"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Mens Leather Formal Wear shoes
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        formal
                      </a>

                      <div className="price-box">
                        <p className="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={shoe2}
                        alt="casual men's brown shoes"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Casual Mens Brown shoes
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Casual
                      </a>

                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$55.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-showcase">
              <h2 className="title">Top Rated</h2>

              <div className="showcase-wrapper  has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={watch3}
                        alt="pocket watch leather pouch"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Pocket Watch Leather Pouch
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Watches
                      </a>

                      <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$34.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={jewellery3}
                        alt="silver deer heart necklace"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Silver Deer Heart Necklace
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Jewellery
                      </a>

                      <div className="price-box">
                        <p className="price">$84.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={perfume}
                        alt="titan 100 ml womens perfume"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Titan 100 Ml Womens Perfume
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Perfume
                      </a>

                      <div className="price-box">
                        <p className="price">$42.00</p>
                        <del>$10.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={belt}
                        alt="men's leather reversible belt"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Mens Leather Reversible Belt
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Belt
                      </a>

                      <div className="price-box">
                        <p className="price">$24.00</p>
                        <del>$10.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={jewellery2}
                        alt="platinum zircon classic ring"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          platinum Zircon Classic Ring
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        jewellery
                      </a>

                      <div className="price-box">
                        <p className="price">$62.00</p>
                        <del>$65.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={watch1}
                        alt="smart watche vital plus"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Smart watche Vital Plus
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        Watches
                      </a>

                      <div className="price-box">
                        <p className="price">$56.00</p>
                        <del>$78.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={shampoo}
                        alt="shampoo conditioner packs"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          shampoo conditioner packs
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        cosmetics
                      </a>

                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <Image
                        height="70"
                        src={jewellery1}
                        alt="rose gold peacock earrings"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">
                          Rose Gold Peacock Earrings
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        jewellery
                      </a>

                      <div className="price-box">
                        <p className="price">$20.00</p>
                        <del>$30.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--
            - PRODUCT FEATURED
          --> */}

          <div className="product-featured">
            <h2 className="title">Deal of the day</h2>

            <div className="showcase-wrapper has-scrollbar">
              {dealOfTheDay.map((deal) => (
                <DealOfTheDay key={deal.key} deal={deal} />
              ))}
            </div>
          </div>

          {/* <!--
            - PRODUCT GRID
          --> */}

          <div className="product-main">
            <h2 className="title">New Products</h2>

            <div className="product-grid">
              {products.slice(0, 12).map((product) => (
                <SingleProduct key={product.key} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
