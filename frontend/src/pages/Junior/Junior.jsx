import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Subjects from "../../SchoolResources/Subjects";
const Junior = () => {
  return (
    <div>
      <Navbar />
      <Subjects name="JUNIOR SECONDARY" />
      <Footer />
    </div>
  );
};

export default Junior;
