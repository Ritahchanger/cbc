import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { sub_jects } from "../../Datasheet";
const Sidebar = () => {
  const getLesson=()=>{
    console.log("Something has been clicked");
  }
  return (
    <section className="sidebar">
      <div className="dashboard__navigation">
        <p className="screen__title">Assignments</p>
        <ul>
          <ul>
            {sub_jects.map((subject) => (
              <li onClick={getLesson}>
                <Link to="#">{subject.lesson}</Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
