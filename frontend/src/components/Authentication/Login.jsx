import React, { useEffect, useState } from "react";
import "./auth.css";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
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
      localStorage.setItem('email',formData.email);
      localStorage.setItem('password',formData.password);
      history.push('/home');
    }else{
      console.log('Form validatation failed');
    }
  };
  useEffect(()=>{
    const email = localStorage.getItem("email");
    const password = localStorage.getItem('password');

    if(email && password){
      console.log("User is authenticated");
    }else{
      console.log("The user is not authenticated");
    }

  },[])

  return (
    <div className="authentication">
      <div className="container">
        <form
          action=""
          className="authentication_form"
          id="Login_form"
          onSubmit={handleSubmit}
        >
          <Link to="#" className="form_title">
            LOGIN
          </Link>
          <div className="input_group">
            <p className="form_lable">Email</p>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="error_message">{errors.email}</span>
            )}
          </div>
          <div className="input_group">
            <p className="form_lable">Password</p>
            <input
              type="password"
              name="password"
              id="password"
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
