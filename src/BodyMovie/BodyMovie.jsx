import React, { useState } from "react";
import "./BodyMovie.css";
export default function BodyMovie(props) {
  return (
    <>
      <div className="content">
        <h1>Explore</h1>
        <p style={{ color: "#868686", fontSize: "25px", margin: "20px 0px" }}>
          What are you gonna watch today
        </p>
        <div className="movieInfo">
          <h3 className="nameOfMovie">{props.movieInfo.movieName}</h3>
          <p className="descOfMovie">{props.movieInfo.description}</p>
        </div>
        <div className="image">
          <img src={props.movieInfo.image} alt="" />
        </div>
      </div>
    </>
  );
}
