import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Dashboard.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Sidebar from "./Layouts/Sidebar";

const Assignment = () => {
  return (
    <div className="announcements">
      <Navbar />
      <div className="main" style={{ marginTop: "5rem" }}>
        <div className="container flex" style={{ alignItems: "start" }}>
          <Sidebar />
          <section
            className="mainbar"
            style={{ width: "100%", overflowY: "hidden" }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdXVTbpHAuqUbhasLO250P7DnI1vnUeOwRx3XdckWiy7dBncg/viewform?embedded=true"
              width="640"
              height="1074"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              style={{width:'100%'}}
            >
              Loading…
            </iframe>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assignment;
