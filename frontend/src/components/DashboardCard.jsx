import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const DashboardCard = ({icon,title}) => {
  return (
    <div className="card">
      <p>
        <FontAwesomeIcon icon={icon} className="icon" />
      </p>
      <p>
        <Link to="#">{title}</Link>
      </p>
    </div>
  );
};

export default DashboardCard;
