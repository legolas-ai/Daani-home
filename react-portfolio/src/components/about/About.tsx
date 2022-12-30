import React from "react";
import "./about.css";

export default function About(): JSX.Element {
  return (
    <section id="about" className="about container about__container">
      <h1 className="about__title">About Me</h1>
      <div className="row">
        <div className="column"></div>
        <div className="column"></div>
      </div>
    </section>
  );
}
