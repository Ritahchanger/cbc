import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../Redux/actions"; 

const Navbar = ({ isLoggedIn, logout }) => { 
  const [showMenu, setShowMenu] = useState(false);

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
          <div className={showMenu ? "navigation__menu active" : "navigation__menu" }>
            <ul className="flex">
              <li className="ulList">
                <Link to="/home">HOME</Link>
              </li>
              {isLoggedIn ? (
                <li className="ulList">
                  <Link to="#" onClick={logout}>LOGOUT</Link>
                </li>
              ) : (
                <React.Fragment>
                  <li className="ulList">
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li className="ulList">
                    <Link to="/signup">SIGNUP</Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
          <div className="menu_bar">
            <a href="#" onClick={displayMenu}>&#9776;</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
