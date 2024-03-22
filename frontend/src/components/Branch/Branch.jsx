import React from "react";
import "./Branch.css";
const Branch = () => {
  return (
    <div className="container">
      <div className="container-wrapper">
        <form action="" className="select-form" id="select-personel">
          <p>WHO ARE YOU</p>
          <div className="personnel-div">
            <select name="person">
              <option value="TUTOR">TUTOR</option>
              <option value="TUTOR">STUDENT</option>
              <option value="TUTOR">PARENT</option>
            </select>
            <button className="btn">OK</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Branch;
