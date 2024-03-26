import React, { useState } from "react";
import "./navbar.css";
import { Link,useHistory } from "react-router-dom";
const Navbar = () => {

  const history = useHistory()

  const isAuthenticated = !!localStorage.getItem("email");
  const [showMenu, setShowMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };
  const displayMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div>
      <nav className="nav" id="nav">
        <div className="container flex">
          <div className="logo">
            <a href="#" className="logos">
              E-<span>STUDY</span>
            </a>
          </div>
          <div
            className={
              showMenu ? "navigation__menu active" : "navigation__menu"
            }
          >
            <ul className="flex">
              <li
                className={`ulList ${activeNavItem === 0 && "active"}`}
                onClick={() => handleNavItemClick(0)}
              >
                <Link to="/home">HOME</Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li
                    className={`ulList ${activeNavItem === 1 && "active"}`}
                    onClick={() => handleNavItemClick(1)}
                  >
                    <Link to="/pre-primary" className="school_link">
                      PRE PRIMARY
                    </Link>
                  </li>
                  <li
                    className={`ulList ${activeNavItem === 2 && "active"}`}
                    onClick={() => handleNavItemClick(2)}
                  >
                    <Link to="/primary" className="school_link">
                      PRIMARY
                    </Link>
                  </li>

                  <li
                    className={`ulList ${activeNavItem === 3 && "active"}`}
                    onClick={() => handleNavItemClick(3)}
                  >
                    <Link to="/junior" className="school_link">
                      JUNIOR SECONDARY
                    </Link>
                  </li>
                  <li
                    className={`ulList ${activeNavItem === 4 && "active"}`}
                    onClick={() => handleNavItemClick(4)}
                  >
                    <Link to="/senior" className="school_link">
                      SENIOR SECONDARY
                    </Link>
                  </li>
                  <li
                    className={`ulList ${activeNavItem === 5 && "active"}`}
                    onClick={() => handleNavItemClick(5)}
                  >
                    <Link to="#" className="school_link" onClick={handleLogout}>
                      LOGOUT
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    className={`ulList ${activeNavItem === 5 && "active"}`}
                    onClick={() => handleNavItemClick(5)}
                  >
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li
                    className={`ulList ${activeNavItem === 6 && "active"}`}
                    onClick={() => handleNavItemClick(6)}
                  >
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
