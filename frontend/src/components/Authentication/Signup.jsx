import React from "react";
import "./auth.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  return (
    <div className="authentication">
      <div className="container">
        <form action="" className="authentication_form" id="Login_form">
          <a href="#" className="form_title">
            SIGN UP
          </a>
          <div className="name_col flex">
            <div className="input_group">
              <p className="form_lable">Firstname</p>
              <input
                type="text"
                name="fname"
                id="fname"
              />
            </div>
            <div className="input_group">
            <p className="form_lable">Secondname</p>
              <input
                type="text"
                name="sname"
                id="second"
              />
            </div>
          </div>
          <div className="input_group">
            <p className="form_lable">Registration no</p>
              <input
                type="text"
                name="reg_no"
              />
            </div>
          <div className="input_group">
            <select name="level" >
              <option value="Pre-primary">Pre-primary</option>
              <option value="Primary">Primary</option>
              <option value="Junior secondary school">Junior secondary school</option>
              <option value="Senor secondary school">Senior secondary school</option>
            </select>
          </div>
          <div className="name_col flex">
            <div className="input_group">
            <p className="form_lable">Password</p>
              <input
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="input_group">
            <p className="form_lable">Confirm password</p>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
            </div>
          </div>
          <input type="submit" value="SIGN UP" />
          <p className="login_handler">
            <br />
            <Link to="#">Have account.?</Link>
            <br />
            OR
            <Link to="/login">
              <br />
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
