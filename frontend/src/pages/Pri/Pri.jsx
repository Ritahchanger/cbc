import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Subjects from "../../SchoolResources/Subjects";
import Footer from "../../components/Footer/Footer";

const Pri = () => {
  return (
    <div>
      <Navbar />
      <Subjects name="PRIMARY SCHOOL" id="2" />
      <Footer />
    </div>
  );
};

export default Pri;
