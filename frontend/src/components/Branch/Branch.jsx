import React, { useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"; 
import "./Branch.css";
const Branch = () => {
  const [selectedOption, setSelectedOption] = useState("TUTOR");
  const history = useHistory();

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === "STUDENT") {
      history.push("/student-signup");
    }
    if (selectedOption === "TUTOR") {
      history.push("/tutor-signup");
    }
    if (selectedOption === "PARENT") {
      history.push("/parent-signup");
    }
  };

  return (
    <div className="container">
      <div className="container-wrapper">
        <form
          className="select-form"
          id="select-personel"
          onSubmit={handleSubmit}
        >
          <p>WHO ARE YOU</p>
          <div className="personnel-div">
            <select
              name="person"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="TUTOR">TUTOR</option>
              <option value="PARENT">PARENT</option>
              <option value="STUDENT">STUDENT</option>
            </select>
            <button type="submit" className="btn">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Branch;
