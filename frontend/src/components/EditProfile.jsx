import React from "react";

const EditProfile = () => {
  return (
    <div className="container">
      <form className="edit_modal">
        <a href="#" className="form_title" style={{ color: "#fff" }}>
          EDIT PROFILE
        </a>
        <div className="input_group">
          <p className="form_lable">Firstname</p>
          <input type="text" name="fname" />
        </div>
        <div className="input_group">
          <p className="form_lable">Email</p>
          <input type="text" name="fname" />
        </div>
        <div className="input_group">
          <p className="form_lable">Registration</p>
          <input type="text" name="fname" />
        </div>
        <div className="input_group">
          <p className="form_lable">Firstname</p>
          <input type="text" name="fname" />
        </div>
        <input type="submit" value="SENT" />
      </form>
    </div>
  );
};

export default EditProfile;
