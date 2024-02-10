import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reduxx/userSlice";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user?.user?.loggedIn);

  const displayMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(logout());
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
          <div
            className={
              showMenu ? "navigation__menu active" : "navigation__menu"
            }
          >
            <ul className="flex">
              <li className="ulList">
                <Link to="/home">HOME</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="ulList">
                    <Link to="#" className="school_link">
                      PRE PRY
                    </Link>
                  </li>
                  <li className="ulList">
                    <Link to="#" className="school_link">
                      PRY
                    </Link>
                  </li>

                  <li className="ulList">
                    <Link to="#" className="school_link">
                      SNR SNDRY
                    </Link>
                  </li>
                  <li className="ulList">
                    <Link to="#" className="school_link">
                      SNR SNDRY
                    </Link>
                  </li>
                  <li className="ulList">
                    <Link to="#" className="school_link" onClick={handleLogout}>
                      LOGOUT
                    </Link>
                  </li>
                </>
              ) : (
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
