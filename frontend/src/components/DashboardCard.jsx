import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ iD, icon, title, path, displayModal }) => {
  const handleClick = () => {
    if (iD === 3) {
      console.log("Card with iD 3 clicked");

      if (displayModal()) {
        displayModal();
      }
    }
  };

  return (
    <div className="card" onClick={iD === 3 ? handleClick : null}>
      <p>
        <FontAwesomeIcon icon={icon} className="icon" />
      </p>
      <p>
        {path && (
          <Link to={path}>
            {title}
            {/* If iD is 3, render a specific link text */}
          </Link>
        )}
      </p>

      {/* <div className="custom-modal">
       <div className="container">
        <div className="modal-body">
        <div className="title">
          NO ANNOUNCEMENTS
        </div>
        </div>
       </div>
      </div> */}
    </div>
  );
};

export default DashboardCard;
