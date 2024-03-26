import React from "react";
import Navbar from "../Navbar/Navbar";
import "./notification.css"

const Notification = () => {
  return (
    <div className="announcements">
      <Navbar />

      <div className="container">
        <div className="notification-form">
          <p className="title">SENT PARENT NOTIFICATION</p>
          <form action="#">
            <div className="input_group">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Tutor Name..."
              />
            </div>
            <div className="input_group">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Parent Email..."
              />
            </div>
            <div className="input_group">
              <textarea name="message" id="" cols="30" rows="10" placeholder="Parent message..."></textarea>
            </div>

            <input type="submit" value="SENT NOTIFICATION" className="notification_button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notification;
