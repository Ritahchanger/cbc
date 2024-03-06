import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sub_jects } from "../../Datasheet";
const Sidebar = ({ currentIframe, handleNavLinkClick, setCurrentIframe }) => {
  return (
    <div className="dashboard__navigation">
      <p className="screen__title">Assignments</p>
      <ul>
        <ul>
          {sub_jects.map((subject) => (
            <li
              onClick={() => {
                handleNavLinkClick(subject.assignment);
              }}
            >
              <Link to="#">{subject.lesson}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
