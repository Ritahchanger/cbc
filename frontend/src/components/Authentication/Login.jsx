import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange=(e)=>{

    const {name,value}=e.target;

    setFormData({
      ...formData,
      [name]:value,
    });

    setErrors({
      ...errors,
      [name]:"",
    });

  };


  const handleSubmit=(e)=>{
    e.preventDefault();

    const newErrors={};

    if(!formData.email){
      newErrors.email="Email is required";
    }
    if(!formData.password){
      newErrors.password="Password is required";
    }
    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      return;
    }
    console.log("Form submitted: ",formData);

  };

  return (
    <div className="authentication">
      <div className="container">
        <form action="" className="authentication_form" id="Login_form" onSubmit={handleSubmit}>
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
          </div>
          <span className="error_message">{errors.email}</span>
          <div className="input_group">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter password.."
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <span className="error_message">{errors.password}</span>
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
