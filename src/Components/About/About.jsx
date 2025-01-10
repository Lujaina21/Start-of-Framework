import React from "react";
import aboutStyles from "./About.module.css";

function About() {
  return (
    <>
      <div
        className={`${aboutStyles.abt_section} text-white d-flex justify-content-center align-items-center flex-column`}
      >
        <h1 className="text-center fw-bolder text-uppercase">
          About Component
        </h1>
        <div className="star_line d-flex align-items-center justify-content-center mb-3">
          <div className={`me-3 ${aboutStyles.line}`}></div>
          <div className="text-white fs-3">★</div>
          <div className={`ms-3 ${aboutStyles.line}`}></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 pe-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
