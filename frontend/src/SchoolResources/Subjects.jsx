import React, { useState } from "react";
import "./Resources.css";
import { Link } from "react-router-dom";

import { sub_jects } from "../components/Datasheet";

const Subjects = ({ name, id }) => {
  const [studentSubject, setStudentSubject] = useState({});

  const handleSubjectsDisplay = (courseIndex) => {
    setStudentSubject((prevState) => ({
      ...prevState,
      [courseIndex]: !prevState[courseIndex]
    }));
  };

  return (
    <div className="container">
      <div className="content">
        <p className="title-first">{name}</p>

        {sub_jects.map((subject, index) => (
          <div className="grade-wrapper" key={index}>
            {subject.iD === id ? (
              <div className="subject_div">
                {subject.grades.map((course, courseIndex) => (
                  <div key={courseIndex} className="subject-container">
                    <p
                      className="grade-level"
                      onClick={() => handleSubjectsDisplay(courseIndex)}
                    >
                      {course.grade}{" "}
                      <span className="arrow-dropdown">
                        <i className="fa-solid fa-caret-down"></i>
                      </span>{" "}
                    </p>
                    <ul className={`grade-ul ${studentSubject[courseIndex] ? 'active' : ''}`}>
                      {course.subjects.map((lesson, lessonIndex) => (
                        <li key={lessonIndex}>{lesson.lession_subjecs}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
