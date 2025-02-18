import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navStyles from "./Navbar.module.css";

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav
        className={`${navStyles.nav
          } navbar navbar-expand-lg py-4 top-0 start-0 fixed transition-all duration-500 z-20 ${isScrolling === false ? "py-10" : "py-4"
          }`}
      >
        <div className="container">
          <Link
            className="navbar-brand fs-2 fw-bolder text-white text-uppercase"
            to="/"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${navStyles.nav_link} fw-bolder text-white text-uppercase px-3 py-2 rounded-3`}
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${navStyles.nav_link} fw-bolder text-white text-uppercase px-3 py-2 rounded-3`}
                  to="portofolio"
                >
                  Portofolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${navStyles.nav_link} fw-bolder text-white text-uppercase px-3 py-2 rounded-3`}
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
