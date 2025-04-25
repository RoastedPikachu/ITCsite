import React from "react";

import "@/styles/widgets/printPage.css";

const PrintPageContent = () => {
  return (
    <main>
      <section className="printSection">
        <h1 className="printSection-title">
          <b className="printSection-title-bold">3D-печать:</b> воплощаем идеи в
          реальность
        </h1>

        <div className="printSection-container">
          <div className="printSection-container-item">
            <img
              src="/static/3dprint/Kipfin.png"
              alt=""
              className="printSection-container-item-image"
            />

            <h4 className="printSection-container-item-title">
              3Д МОДЕЛЬ{" "}
              <b className="printSection-container-item-title-bold">КИПФИН</b>
            </h4>
          </div>

          <div className="printSection-container-item">
            <img
              src="/static/3dprint/Robot.png"
              alt=""
              className="printSection-container-item-image"
            />

            <p className="printSection-container-item-title">
              3Д МОДЕЛЬ{" "}
              <b className="printSection-container-item-title-bold">
                РОБОТ ИТС
              </b>
            </p>
          </div>

          <div className="printSection-container-item">
            <img
              src="/static/3dprint/Microcircuit.png"
              alt=""
              className="printSection-container-item-image"
            />

            <p className="printSection-container-item-title">
              3Д МОДЕЛЬ{" "}
              <b className="printSection-container-item-title-bold">
                МИКРОСХЕМА ИТС
              </b>
            </p>
          </div>

          <div className="printSection-container-item">
            <img
              src="/static/3dprint/Comics.png"
              alt=""
              className="printSection-container-item-image"
            />

            <p className="printSection-container-item-title">
              КОМИКС{" "}
              <b className="printSection-container-item-title-bold">
                ЗОВ ВОСПОМИНАНИЙ
              </b>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrintPageContent;
