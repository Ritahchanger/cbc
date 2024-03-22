import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ icon, title, path, key }) => {
  const handleClick=()=>{
    console.log("Hello")
  }
  return (
    <div className="card">
      <p>
        <FontAwesomeIcon icon={icon} className="icon" />
      </p>
      <p>
        {key === 3 ? (
           <Link to={path}>WE are we</Link>
        ) : (
          <Link to={path}>{title}</Link>
        )}
      </p>
    </div>
  );
};

export default DashboardCard;
