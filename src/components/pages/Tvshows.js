import React from "react";
import "../../styles/Tvshows.css";
import { Carousel } from "../elements/Carousel";

export const Tvshows = () => {
  return (
    <div>
      <section className="tvshowSection ">
        <h2>
          Tv <span>Show</span>
        </h2>
        <ul className="d-flex">
          <li style={{ color: "black" }}>Home</li>
          <li>|</li>
          <li style={{ color: "black", borderBottom: "2px solid black" }}>
            Tv Show
          </li>
        </ul>
      </section>
      <section
        style={{ backgroundColor: "rgba(21, 20, 27, 0.966)", color: "white" }}
      >
        <br />
        <br />
        <Carousel />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};
