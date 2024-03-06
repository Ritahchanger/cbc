import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProfileImage from "../../images/passport.jpg";
import "./profile.css";
import ProfileFIeld from "../ProfileFIeld";
import { profileDetails } from "../Datasheet";
import EditProfile from "../EditProfile";

const UserProfile = () => {
  const [displayModal, setDisplayModal] = useState(false);

    const handleDisplayModal = () => {
      setDisplayModal(!displayModal);
    };

  return (
    <div className="profile">
      <Navbar />
      <section style={{ marginTop: "5rem" }} className="container main_section">
        <p className="sub__title">PROFILE</p>
        <div className="main__section">
          <div className="card">
            <img src={ProfileImage} alt="" />
          </div>

          <div className="card">
            {profileDetails.map((detail) => (
              <ProfileFIeld
                fieldName={detail.fieldName}
                fieldValue={detail.fieldValue}
              />
            ))}
            <a href="#" className="custom_button" onClick={handleDisplayModal}>
              EDIT
            </a>
          </div>
        </div>
      </section>

      {!displayModal ? (
        ""
      ) : (
        <section className="modal">
          <p className="close_modal" onClick={handleDisplayModal} >&times;</p>
          <EditProfile />
        </section>
      )}
    </div>
  );
};

export default UserProfile;
