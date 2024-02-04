import React from "react";
import "./auth.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <div className="authentication">
      <div className="container">
        <form action="" className="authentication_form" id="Login_form">
          <a href="#" className="form_title">
            LOGIN
          </a>
          <div className="input_group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter email.."
            />
          </div>
          <div className="input_group">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter password.."
            />
          </div>
          <input type="submit" value="LOGIN" />
          <p className="login_handler">
            <br />
            <Link to="#">Forgot password.?</Link>
            <br />
            OR
            <br />
            <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
