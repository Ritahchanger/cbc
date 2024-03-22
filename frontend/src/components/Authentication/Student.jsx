import React, { useState } from "react";
import "./auth.css";
import { Link,useHistory } from "react-router-dom";
import "./Signup.css";
const Student = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fname: "",
    sname: "",
    reg_no: "",
    email: "",
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
    if (!formData.fname.trim()) {
      errors.fname = "First name is required";
    }
    if (!formData.sname.trim()) {
      errors.sname = "Second name is required";
    }
    if (!formData.reg_no.trim()) {
      errors.reg_no = "Registration number is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!formData.email.match(emailRegex)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password should be at least 8 characters long";
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password should be at least 8 characters long";
    } else if (formData.password !== formData.confirmPassword) {
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
              STUDENT
            </a>
            <div className="name_col flex">
              <div className="input_group">
                <p className="form_lable">Firstname</p>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                {errors.fname && (
                  <span className="error_message">{errors.fname}</span>
                )}
              </div>
              <div className="input_group">
                <p className="form_lable">Secondname</p>
                <input
                  type="text"
                  name="sname"
                  id="second"
                  value={formData.sname}
                  onChange={handleChange}
                />
                {errors.sname && (
                  <span className="error_message">{errors.sname}</span>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="input_group">
                <p className="form_lable">Registration no</p>
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

export default Student;
