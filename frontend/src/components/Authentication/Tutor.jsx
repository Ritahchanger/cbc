import React, { useState } from "react";
import "./auth.css";
import { Link,useHistory } from "react-router-dom";
import "./Signup.css";
const Tutor = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: "",
    idno: "",
    reg_no: "",
    email: "",
    empNo: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully");
      history.push('/login')
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      errors.name = "First name is required";
    }
    if (!formData.idno.trim()) {
      errors.idno = "Idno name is required";
    }
    if (!formData.reg_no.trim()) {
      errors.reg_no = "Registration number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!formData.email.match(emailRegex)) {
      errors.email = "Invalid email format";
    }
    if (!formData.empNo.trim()) {
      errors.empNo = "Employment No is required";
    } else if (formData.empNo.length < 8) {
      errors.empNo = "Employment No should be at least 8 characters long";
    }
    if (!formData.password.trim()) {
      errors.password = "Password  is required";
    }
    else if (formData.password.length < 8) {
      errors.empNo = "Password should be at least 8 characters long";
    } 
    else if (formData.confirmPassword !== formData.confirmPassword) {

    }if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword.length < 8) {
      errors.empNo = "Confirm password should be at least 8 characters long";
    } else if (formData.confirmPassword !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="authentication">
      <div className="container">
        <div className="signup-form" id="signup-form">
          <form
            action=""
            className="authentication_form"
            onSubmit={handleSubmit}
          >
            <a href="#" className="form_title">
            TUTOR SIGNUP
            </a>
            <div className="name_col flex">
              <div className="input_group">
                <p className="form_lable">Name</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error_message">{errors.name}</span>
                )}
              </div>
              <div className="input_group">
                <p className="form_lable">IdNo</p>
                <input
                  type="text"
                  name="idno"
                  id="second"
                  value={formData.idno}
                  onChange={handleChange}
                />
                {errors.idno && (
                  <span className="error_message">{errors.idno}</span>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="input_group">
              <p className="form_lable">Contact no</p>
                <input
                  type="text"
                  name="reg_no"
                  value={formData.reg_no}
                  onChange={handleChange}
                />
                {errors.reg_no && (
                  <span className="error_message">{errors.reg_no}</span>
                )}
              </div>
              <div className="input_group">
                <p className="form_lable">Email</p>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error_message">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="input_group">
                <p className="form_lable">Employment No</p>
                <input
                  type="text"
                  name="empNo"
                  id="empNo"
                  value={formData.empNo}
                  onChange={handleChange}
                />
                {errors.empNo && (
                  <span className="error_message">{errors.empNo}</span>
                )}
              </div>
            <div className="name_col flex">
              <div className="input_group">
                <p className="form_lable">Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="error_message">{errors.password}</span>
                )}
              </div>
              <div className="input_group">
                <p className="form_lable">Confirm password</p>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <span className="error_message">
                    {errors.confirmPassword}
                  </span>
                )}
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
    </div>
  );
};

export default Tutor;
