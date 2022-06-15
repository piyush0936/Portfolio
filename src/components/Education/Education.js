import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="Education">
      <div className="EducationHeading">Education component (done)</div>
      <div className="Institute">
        <div className="College">
          <div>Dr. A.P.J Abdul Kalam Technical University</div>
          <div>2016-2020</div>
        </div>
        <div>B.Tech - Computer Science & Engineering</div>
      </div>

      <div className="Institute">
        <div className="College">
          <div>Dr. Virendra Swarup Education Center</div>
          <div>2015-2016</div>
        </div>
        <div> 12th - Computer Science</div>
      </div>

      <div className="Institute">
        <div className="College">
          <div>Dr. Virendra Swarup Education Center</div>
          <div>2013-2014</div>
        </div>
        <div> 10th - Computer Science</div>
      </div>
    </div>
  );
};

export default Education;
