import React from "react";
import "./about.css";

export default function About(): JSX.Element {
  return (
    <section id="about" className="about container about__container">
      <h1 className="about__title">About Me</h1>
      <h2 className="about__subheading">Engineer to Product Manager</h2>
      <h4 className="about__body">
        I’m a resilient and empathetic product manager with a diverse
        engineering and business skillset
        <p className="about__p">
          My professional career ranges from designing implantable hearing
          devices as a mechatronics engineer to managing shipping scalable,
          innovative software solutions for Atlassian.{" "}
        </p>
        <p className="about__p">
          I am a naturally curious person and love to fill my spare time I love
          morning runs, a good book, coffee, ocean swims, motorbike rides and
          almond croissants
        </p>
        <p className="about__p"></p>
        <a
          href="https://www.linkedin.com/in/daani-faiz/"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </h4>
    </section>
  );
}
