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
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter firstname.."
              />
            </div>
            <div className="input_group">
              <input
                type="text"
                name="sname"
                id="second"
                placeholder="Enter secondname.."
              />
            </div>
          </div>
          <div className="input_group">
            <input
              type="text"
              name="level"
              id="level"
              placeholder="Enter level.."
            />
          </div>
          <div className="input_group">
            <input
              type="text"
              name="level"
              id="level"
              placeholder="Enter level.."
            />
          </div>
          <div className="input_group">
            <select name="level" id="">
                <option value="junior secondary">Junior secondary</option>
                <option value="senior secondary">Senior secondary</option>
            </select>
          </div>
          <div className="name_col flex">
            <div className="input_group">
              <input
                type="text"
                name="password"
                id="fname"
                placeholder="Enter password.."
              />
            </div>
            <div className="input_group">
              <input
                type="text"
                name="sname"
                id="second"
                placeholder="Confirm password.."
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
