import React from "react";
import { lessons } from "./Datasheet";

const Lesson = () => {
  return (
    <>
    {  lessons.map((lesson)=>(
        <div className="lesson" style={{ margin: "1rem 0rem" }}>
        <p className="title-first">{lesson.title}</p>
        <p className="description" style={{ fontSize: "2rem" }}>
         {lesson.description}
        </p>
      </div>
    )) }
    </>
  );
};

export default Lesson;
