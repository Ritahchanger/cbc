import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Subjects from "../../SchoolResources/Subjects";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardCard from "../../components/DashboardCard";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="container section_a">
        <p className="title-first">
          LET'S SUPPORT COMPETENCY FOR SUSTAINABILITY GUARANTEED RESULTS
        </p>
        <div className="main_dashboard grid">
          <DashboardCard />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
