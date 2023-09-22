import axios from "axios";
import React, { useEffect, useState } from "react";
import Shop from "../Shop/Shop";
import img1 from "../../img/pexels-photo-7007191.jpeg";
import img2 from "../../img/apple-iphone-smartphone-desk.jpg";
import img3 from "../../img/pexels-photo-7679453.jpeg";
import img4 from "../../img/pexels-photo-11519635.jpeg";
import SliderData from "../SliderData/SliderData";

export default function Home() {


  return (
    <>
      <SliderData />

      <section className="   ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide  container   "
          data-bs-ride="carousel"
          // style={{ width: "80%" }}
          style={{ width: "100%" }}

        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active "
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner  ">
            <div className="carousel-item active ">
              <img
                src={img1}
                className="d-block w-100"
                alt="IPhone"
                height="500px"
              />
            </div>
            <div className="carousel-item ">
              <img
                src={img2}
                className="d-block w-100"
                alt="IPhone"
                height="500px"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100"
                alt="IPhone"
                height="500px"
              />
            </div>
            <div className="carousel-item">
              <img
                src={img4}
                className="d-block w-100"
                alt="IPhone"
                height="500px"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <Shop />
      </section>
    </>
  );
}
