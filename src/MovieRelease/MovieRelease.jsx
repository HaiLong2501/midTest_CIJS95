import React from "react";
import "./MovieRelease.css";
export default function MovieRelease(props) {
  return (
    <div className="MovieItem" onClick={props.onMovieClick}>
      <h3>episode {props.episode}</h3>

      <img src={props.img} alt="" />

      <div className="name">
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}
