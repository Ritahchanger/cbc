import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./banner.css";

import StudentImage from "../../svgs/undraw_mathematics_-4-otb.svg";
import Navbar from "../../components/Navbar/Navbar";
const Banner = () => {
  return (
    <div className="banner">
     <Navbar />

      <section className="section-a" id="section">
        <div className="container flex">
          <div className="right_section flex">
            <p className="description">
              Embark
              <br />
              On a transformative
              <br />
              Learning journey <br />
              with our e-learning platform
            </p>
            <h2 className="sub_header">Excellence our choice..</h2>
            <Link  to="/home" className="hero_btn">GET STARTED</Link>
          </div>
          <div className="left_section">
            <img src={StudentImage} alt="" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            tenetur fugit dolorum ipsa quisquam facilis accusamus maiores modi
            inventore! Quae ad soluta velit eius amet saepe dicta placeat
            inventore, deserunt repudiandae accusantium laborum ipsam nulla
            autem cum facere provident cumque minus aspernatur necessitatibus
            est doloremque. Accusantium nam, voluptate laudantium ipsa
            cupiditate facere sit ut? Assumenda earum quis pariatur totam?
          </p>
        </div>
        <p className="copyright">2024 - 2025 &copy; STELLAMARIS MBITHE</p>
      </footer>
    </div>
  );
};

export default Banner;
