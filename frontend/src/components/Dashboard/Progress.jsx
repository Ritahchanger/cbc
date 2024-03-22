import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import "./progress.css"
const Progress = () => {
  const generateRandomMarks = () => {
    return Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
  };

  const subjects = [
    "Social Studies",
    "English",
    "Mathematics",
    "Kiswahili",
    "Integrated Science",
    "Business Studies",
    "Agriculture",
    "Pre-Technical",
    "Religious Education",
  ];
  
  const marks = subjects.map((subject) => generateRandomMarks());

  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
  labels: subjects,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 1, // Set the width of the line to cover the entire width of the canvas
      data:marks,
    },
  ],
};
  return (
    <div className="progress">
      <Navbar/>
      <p className="title">SUBJECTS MARKS PERFORMANCE</p>
      <Line data={data} />
      <p className="title">STUDENT PERSONAL PERFORMANCE</p>
      <Line data={data} />
      <p className="title">CLASS PERFORMANCE</p>
      <Line data={data} />
      <p className="title">SCHOOL PERFORMANCE</p>
      <Line data={data} />
      <Footer/>
    </div>
  );
};
export default Progress;
