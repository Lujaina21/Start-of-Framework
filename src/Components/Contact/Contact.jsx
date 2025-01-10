import React from "react";
import contactStyles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <header className="py-5">
        <h1 className="text-center fw-bolder text-uppercase">
          contact section
        </h1>
        <div className="star_line d-flex align-items-center justify-content-center mb-3">
          <div className={`me-3 ${contactStyles.line}`}></div>
          <div className={`${contactStyles.star} fs-3`}>★</div>
          <div className={`ms-3 ${contactStyles.line}`}></div>
        </div>
      </header>

      <form className="w-50 ms-auto me-auto">
        <div className="mb-2">
          <label htmlFor="userName"></label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="User Name"
            className="form-control py-3 border-0 border-bottom rounded-1"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="userAge"></label>
          <input
            type="text"
            id="userAge"
            name="userAge"
            placeholder="User Age"
            className="form-control py-3 my-2 border-0 border-bottom rounded-1"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="userEmail"></label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            placeholder="User Email"
            className="form-control py-3 my-2 border-0 border-bottom rounded-1"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="userPass"></label>
          <input
            type="text"
            id="userPass"
            name="userPass"
            placeholder="User Password"
            className="form-control py-3 my-2 border-0 border-bottom rounded-1"
          />
        </div>
        <div className="d-flex align-items-start justify-content-start w-100">
          <button
            className={`${contactStyles.send_btn} mt-3 mb-5 text-white border-0 rounded-3 px-3 py-2`}
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
