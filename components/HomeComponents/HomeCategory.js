import React from "react";
import Image from "next/image";
import dress from "../../public/images/icons/dress.svg";
import winterWear from "../../public/images/icons/coat.svg";
import glasses from "../../public/images/icons/glasses.svg";
import shorts from "../../public/images/icons/shorts.svg";
import tshirts from "../../public/images/icons/tee.svg";
import jackets from "../../public/images/icons/jacket.svg";
import watch from "../../public/images/icons/watch.svg";
import hat from "../../public/images/icons/hat.svg";

export const HomeCategory = () => {
  return (
    <div>
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            <div className="category-item">
              <div className="category-img-box">
                <Image src={dress} alt="dress & frock" width="30" height="30" />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Dress & frock</h3>

                  <p className="category-item-amount">(53)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <Image
                  src={winterWear}
                  alt="winter wear"
                  width="30"
                  height="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Winter wear</h3>

                  <p className="category-item-amount">(58)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <Image
                  src={glasses}
                  alt="glasses & lens"
                  width="30"
                  height="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Glasses & lens</h3>

                  <p className="category-item-amount">(68)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <Image
                  src={shorts}
                  alt="shorts & jeans"
                  width="30"
                  height="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Shorts & jeans</h3>

                  <p className="category-item-amount">(84)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <Image src={tshirts} alt="t-shirts" width="30" height="30" />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">T-shirts</h3>

                  <p className="category-item-amount">(35)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <Image src={jackets} alt="jacket" width="30" height="30" />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Jacket</h3>

                  <p className="category-item-amount">(16)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <Image src={watch} alt="watch" width="30" height="30" />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Watch</h3>

                  <p className="category-item-amount">(27)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <Image src={hat} alt="hat & caps" width="30" height="30" />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Hat & caps</h3>

                  <p className="category-item-amount">(39)</p>
                </div>

                <a href="#" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
