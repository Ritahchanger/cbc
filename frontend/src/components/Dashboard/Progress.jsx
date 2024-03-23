import React from "react";
import Chart from "chart.js/auto";
import { Line, Pie, Bar } from "react-chartjs-2";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./progress.css";
import Analytics from "../Analytics/Analytics";
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
  const data = {
    labels: subjects,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        data: marks,
      },
    ],
  };

  const pieColors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 206, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(128, 128, 128)",
  ];

  const pieData = {
    labels: subjects,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: pieColors,
        borderColor: pieColors,
        borderWidth: 1,
        data: marks,
      },
    ],
  };

  return (
    <div className="progress">
      <Navbar />
      <div className="container">
        <p className="title">SUBJECTS MARKS PERFORMANCE</p>
        <div className="graph_container">
          <Bar data={data} />
        </div>
        <p className="title">STUDENT PERSONAL PERFORMANCE</p>
        <div className="graph_container">
          <Line data={data} />
        </div>
        <p className="title">CLASS PERFORMANCE</p>

        <div className="graph_container">
          <Pie
            data={pieData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between 2016-2020",
                },
              },
            }}
          />
        </div>

        <p className="title">SCHOOL PERFORMANCE</p>
        <div className="graph_container">
          <Line data={data} />
        </div>
      </div>
     <Analytics/>
    </div>
  );
};
export default Progress;
