import React, { useState } from "react";
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
  const [displaySidebar, setDisplaySideBar] = useState(true);

  const handleDisplaySideBar = () => {
    setDisplaySideBar(!displaySidebar);
  };

  return (
    <div className="announcements">
      <Navbar />
      <div className="main" style={{ marginTop: "5rem" }}>
        <div className="container flex" style={{ alignItems: "start" }}>
          {displaySidebar ? (
            <section className="sidebar">
              <p
                className="close_modal"
                style={{ marginTop: "5rem", color: "#fff" }}
                onClick={handleDisplaySideBar}
              >
                &times;
              </p>
              <Sidebar
                currentIframe={currentIframe}
                handleNavLinkClick={handleNavLinkClick}
                setCurrentIframe={setCurrentIframe}
              />
            </section>
          ) : null}
          <section
            className="mainbar"
            id={!displaySidebar ? "mainbar" : "null"}
          >
            <div className="mainbar">
              {iframeSrc.length > 2 ? (
                <iframe
                  src={iframeSrc}
                  width="640"
                  height="1004"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  Loading….........................
                </iframe>
              ) : (
                <h2>WORK TO DO</h2>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
