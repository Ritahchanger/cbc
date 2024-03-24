import React, { useState } from "react";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (firstName.trim() === "") {
      newErrors.firstName = "This field is required";
    }
    if (lastName.trim() === "") {
      newErrors.lastName = "This field is required";
    }
    if (email.trim() === "") {
      newErrors.email = "This field is required";
    }
    if (registrationNo.trim() === "") {
      newErrors.registrationNo = "This field is required";
    }
    if (phoneNo.trim() === "") {
      newErrors.phoneNo = "This field is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("The form was submitted successfully");
      console.log(
        `${firstName},${lastName},${email},${registrationNo},${phoneNo}`
      );
    } else {
      console.log("Input correct data into the database");
    }
  };

  return (
    <div className="container">
      <form className="edit_modal" onSubmit={handleSubmit} noValidate>
        <a href="#" className="form_title" style={{ color: "#fff" }}>
          EDIT PROFILE
        </a>
       <div className="row flex">
       <div className="input_group">
          <p className="form_lable">Firstname</p>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div className="input_group">
          <p className="form_lable">Secondname</p>
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
       </div>
        <div className="input_group">
          <p className="form_lable">Email</p>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="input_group">
          <p className="form_lable">Registration</p>
          <input
            type="text"
            value={registrationNo}
            name="registrationNo"
            onChange={(e) => setRegistrationNo(e.target.value)}
          />
          {errors.registrationNo && <span>{errors.registrationNo}</span>}
        </div>
        <div className="input_group">
          <p className="form_lable">Phone No</p>
          <input
            type="tel"
            value={phoneNo}
            name="phoneNo"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          {errors.phoneNo && <span>{errors.phoneNo}</span>}
        </div>
        <input type="submit" value="SEND" />
      </form>
    </div>
  );
};

export default EditProfile;
