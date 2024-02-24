import React from "react";
import { lessons } from "./Datasheet";

const Lesson = () => {
  return (
    <>
      {lessons.map((lesson) => (
        <div className="lesson" style={{ margin: "1rem 0rem" }}>
          <p className="title-first" style={{ textAlign:"start" }}  >{lesson.title}</p>
          <p className="description" style={{ fontSize: "2rem" }}>
            {lesson.description}
          </p>
          <a href="#" className="hero_button">Read More</a>
        </div>
      ))}
    </>
  );
};

export default Lesson;
