import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isLoggedIn = useSelector((state) => state.user?.user?.loggedIn);

  const displayMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="nav" id="nav">
        <div className="container flex">
          <div className="logo">
            <a href="#" className="logos">
              E-Lear<span>ning</span>
            </a>
          </div>
          <div className={showMenu ? "navigation__menu active" : "navigation__menu"}>
            <ul className="flex">
              <li className="ulList">
                <Link to="/home">HOME</Link>
              </li>
              {isLoggedIn ? <>
                
                  <li className="ulList">
                    <Link to="#" className="school_link">PRE PRIMARY</Link>
                  </li>
                  <li className="ulList">
                    <Link to="#"className="school_link">PRIMARY</Link>
                  </li>
                
                  <li className="ulList">
                    <Link to="#"className="school_link">JUNIOR SECONDARY</Link>
                  </li>
                  <li className="ulList">
                    <Link to="#"className="school_link">SENIOR SECONDARY</Link>
                  </li>
                  <li className="ulList">
                    <Link to="#"className="school_link">SENIOR</Link>
                  </li>
                </> : (
                <>
                  <li className="ulList">
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li className="ulList">
                    <Link to="/signup">SIGNUP</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="menu_bar">
            <a href="#" onClick={displayMenu}>
              &#9776;
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
