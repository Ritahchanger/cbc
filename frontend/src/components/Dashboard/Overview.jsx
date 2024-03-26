import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Overview.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { overviewCardsDescription } from "../Datasheet";
import OverviewModal from "../OverView/OverviewModal";


const Overview = () => {

  const [ modal,showModal] = useState(false);

  const handleModal=()=>{

    showModal(!modal);

  }

  return (
    <div className="announcements">
      <Navbar />
      <div className="container">
        <div className="section-a-overview">
          <p className="layouts-title">OVERVIEW</p>
          <div className="grid">
            {overviewCardsDescription.map((card) => (
              <div className="subject-overview-cards">
                <p className="subject-name">{card.subjectName}</p>
                <Link to={card.path} className="view-button" onClick={handleModal}>
                  view
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* overview-modal */}


      <div className={ `overview-modal ${modal ? 'active':''} ` }>
        <div className="overview-modal-body">
          <p className="close-button" onClick={handleModal}>&times;</p>
          <OverviewModal />
        </div>
      </div>
    </div>
  );
};

export default Overview;
