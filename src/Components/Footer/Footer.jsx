import React from "react";
import footerStyles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className={`${footerStyles.upper_footer} text-white text-center`}>
        <div className="container">
          <div className="row flex-md-row flex-sm-column gy-3 gx-4">
            <div className="inner d-flex flex-md-row flex-sm-column py-5">
              <div className="col-md-4 col-sm-12">
                <div className="me-3 py-4">
                  <h3 className="text-uppercase">Location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="me-5 py-4">
                  <h3 className="text-uppercase">around the web</h3>
                  <div
                    className={`${footerStyles.social_icons} d-flex flex-row justify-content-center`}
                  >
                    <div className="d-flex justify-content-center align-items-center p-2 rounded-circle text-center me-2">
                      <Link className={`${footerStyles.link}`}>
                        <i class="fa-brands fa-facebook"></i>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center p-2 rounded-circle text-center me-2">
                      <Link className={`${footerStyles.link}`}>
                        <i class="fa-brands fa-twitter"></i>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center p-2 rounded-circle text-center me-2">
                      <Link className={`${footerStyles.link}`}>
                        <i class="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-center align-items-center p-2 rounded-circle text-center me-2">
                      <Link className={`${footerStyles.link}`}>
                        <i class="fa-solid fa-globe"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="me-2 py-4">
                  <h3 className="text-uppercase">about freelancer</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${footerStyles.lower_footer} text-center py-3`}>
        <p>Copyright © Your Website 2025</p>
      </div>
    </>
  );
}
