import React from "react";
import { menu } from "../Data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>Fast Food</h3>
              <div className="price">
                ₹ 70/- <span>₹ 100</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>

        
        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>Fast Food</h3>
              <div className="price">
                ₹ 70/- <span>₹ 100</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
