import Image from "next/image";
import React from "react";
import { useState } from "react";
import bs1 from "../../public/images/products/1.jpg";

export const SidebarMenuCatItem = ({ catagData }) => {
  const [sideMenuCarousel, setSideMenuCarousel] = useState(false);
  return (
    <li
      className="sidebar-menu-category"
      onClick={() => setSideMenuCarousel(!sideMenuCarousel)}
    >
      <button className="sidebar-accordion-menu" data-accordion-btn>
        <div className="menu-title-flex">
          <Image
            src={catagData.img}
            alt="clothes"
            width="20"
            height="20"
            className="menu-title-img"
          />

          <p className="menu-title">{catagData.title}</p>
        </div>

        <div>
          {!sideMenuCarousel ? (
            <ion-icon name="add-outline" className="add-icon"></ion-icon>
          ) : (
            <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
          )}
        </div>
      </button>

      <ul
        className={`sidebar-submenu-category-list ${
          sideMenuCarousel && `active`
        }`}
        data-accordion
      >
        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">Shirt</p>
            <data value="300" className="stock" title="Available Stock">
              300
            </data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">shorts & jeans</p>
            <data value="60" className="stock" title="Available Stock">
              60
            </data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">jacket</p>
            <data value="50" className="stock" title="Available Stock">
              50
            </data>
          </a>
        </li>

        <li className="sidebar-submenu-category">
          <a href="#" className="sidebar-submenu-title">
            <p className="product-name">dress & frock</p>
            <data value="87" className="stock" title="Available Stock">
              87
            </data>
          </a>
        </li>
      </ul>
    </li>
  );
};
