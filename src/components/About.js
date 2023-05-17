import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            We believe that food should be both delicious and beautiful, which is why we take great care in crafting each dish on our menu. From our signature appetizers to our decadent desserts, 
            every dish is made with the freshest ingredients and prepared to perfection
            </p>
            <p>
            Our passion for food and hospitality shines through in every dish we prepare,
            and we're committed to providing an unforgettable dining experience for every customer.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
