import React from "react";
import "./Resources.css";
import { Link } from "react-router-dom";

import { sub_jects } from "../components/Datasheet";

const Subjects = ({name,id}) => {
  return (
    <div className="container">
      <div className="content">
        <p className="title-first">{name}</p>

        {sub_jects.map((subject, index) => (
          <div className="grade-wrapper">
            {subject.iD === id ? (
              <div className="subject_div">
                {subject.grades.map((course) => (
                  <>
                    <p className="grade-level">
                      {course.grade}{" "}
                      <span className="arrow-dropdown">
                        <i class="fa-solid fa-caret-down"></i>
                      </span>{" "}
                    </p>
                    <ul class="grade-ul">
                      {course.subjects.map((lession) => (
                        <li>{lession.lession_subjecs}</li>
                      ))}
                    </ul>
                  </>
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
