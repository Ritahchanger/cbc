import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div>
      <nav className="nav" id="nav">
        <div className="container flex">
          <div className="logo">
            <a href="#" className="logos">
              E-Lear<span>ning</span>
            </a>
          </div>
          <div className="navigation__menu">
            <ul className="flex">
              <li className="ulList">
                <Link to="#">HOME</Link>
              </li>
              <li className="ulList">
                <Link to="/login">SIGN IN</Link>
              </li>
              <li className="ulList">
                <Link to="/signup">SIGN OUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
