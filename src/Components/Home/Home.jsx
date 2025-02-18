import React from "react";
import heroImage from "../../assets/hero-avatar.svg";
import HomeStyles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={HomeStyles.home}>
        <div className="d-flex flex-column justify-content-center align-items-center text-white text-center">
          <img
            src={heroImage}
            className={`${HomeStyles.hero_img} mb-4 mt-5`}
            alt="Avatar"
          />
          <h1 className="text-uppercase fw-bolder">Start Framework</h1>
          <div className="star_line d-flex align-items-center justify-content-center mb-3">
            <div className={`me-3 ${HomeStyles.line}`}></div>
            <div className="text-white fs-3">★</div>
            <div className={`ms-3 ${HomeStyles.line}`}></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
