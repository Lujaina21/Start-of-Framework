import React from "react";
import portStyles from "./Portofolio.module.css";
import house from "../../assets/port1.png";
import cake from "../../assets/port2.png";
import circus from "../../assets/port3.png";

function Portofolio() {
  const portfolioItems = [
    { img: house, alt: "House" },
    { img: cake, alt: "Cake" },
    { img: circus, alt: "Circus" },
    { img: house, alt: "House" },
    { img: cake, alt: "Cake" },
    { img: circus, alt: "Circus" },
    { img: house, alt: "House" },
    { img: cake, alt: "Cake" },
    { img: circus, alt: "Circus" },
  ];

  const cardElements = [];
  for (let i = 0; i < 9; i++) {
    cardElements.push(
      <div key={i} className="col-md-4">
        <div className="inner rounded-3 overflow-hidden position-relative">
          <img
            src={portfolioItems[i].img}
            alt={portfolioItems[i].alt}
            className="w-100"
          />
          <div
            className={`${portStyles.layer} position-absolute top-0 start-0 end-0 bottom-0`}
            data-bs-toggle="modal"
            data-bs-target="#modalImg"
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <i
                className="fa fa-plus"
                style={{ fontSize: "60px", color: "#fff" }}
              ></i>
            </div>
          </div>
          {/* Modal */}
          <d
            iv
            className="modal fade"
            id="modalImg"
            tabindex="-1"
            aria-labelledby="modalImg"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className={`modal-content ${portStyles.modal_content}`}>
                <div className="modal-body d-flex justify-content-center align-items-center">
                  <img
                    src={portfolioItems[i].img}
                    alt={portfolioItems[i].alt}
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </d>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="pt-5">
        <h1 className="text-center fw-bolder text-uppercase">
          portofolio section
        </h1>
        <div className="star_line d-flex align-items-center justify-content-center mb-3">
          <div className={`me-3 ${portStyles.line}`}></div>
          <div className={`${portStyles.star} fs-3`}>★</div>
          <div className={`ms-3 ${portStyles.line}`}></div>
        </div>
      </header>
      <main className="container mb-5">
        <div className="row gy-5 gx-5">{cardElements}</div>
      </main>
    </>
  );
}

export default Portofolio;
