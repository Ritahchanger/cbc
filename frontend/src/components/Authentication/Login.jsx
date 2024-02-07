import React, { useState } from "react";
import "./auth.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!formData.email.match(emailRegex)) {
      newErrors.email = "Invalid Email format";
      isValid = false;
    } else {
      newErrors.email = "";
    }
    const pattern_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if (formData.password.length === 0) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Your password should be at least 8 characters long";
      isValid = false;
    } else if (!formData.password.match(pattern_password)) {
      newErrors.password =
        "Your password should contain at least one lowercase letter, one uppercase letter, and one digit";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data", formData);
      history.push("/home");
    }
  };

  return (
    <div className="authentication">
      <div className="container">
        <form
          action=""
          className="authentication_form"
          id="Login_form"
          onSubmit={handleSubmit}
        >
          <a href="#" className="form_title">
            LOGIN
          </a>
          <div className="input_group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter email.."
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="error_message">{errors.email}</span>
            )}
          </div>
          <div className="input_group">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter password.."
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error_message">{errors.password}</span>
            )}
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
