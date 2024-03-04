import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Dashboard.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Sidebar from "./Layouts/Sidebar";

const Assignment = ({
  currentIframe,
  handleNavLinkClick,
  setCurrentIframe,
  iframeSrc,
}) => {
  return (
    <div className="announcements">
      <Navbar />
      <div className="main" style={{ marginTop: "5rem" }}>
        <div className="container flex" style={{ alignItems: "start" }}>
          <Sidebar
            currentIframe={currentIframe}
            handleNavLinkClick={handleNavLinkClick}
            setCurrentIframe={setCurrentIframe}
          />
          <section
            className="mainbar"
            style={{ width: "100%", overflowY: "hidden" }}
          >
            <div className="mainbar">


              { iframeSrc.length > 2 ? ( <iframe
                src={iframeSrc}
                width="640"
                height="1004"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                style={{width:'100%'}}
              >
                Loading…
              </iframe>):(
                <h2>NO ASSIGNMENT</h2>
              )}


             
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assignment;
