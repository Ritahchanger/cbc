import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Subjects from "../../SchoolResources/Subjects";
import Footer from "../../components/Footer/Footer";

const Senior = () => {
  return (
    <div>
      <Navbar />
      <Subjects name="SENIOR SECONDARY SCHOOL" id="4" />
      <Footer />
    </div>
  );
};

export default Senior;
