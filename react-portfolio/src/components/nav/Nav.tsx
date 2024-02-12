import React, { useState } from "react";
import "./nav.css";
import { BsLinkedin, BsGithub, BsHouse, BsGlobe } from "react-icons/bs";
import { SiMedium } from "react-icons/si";

export default function NAV(): JSX.Element {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a className={activeNav === "#" ? "active" : ""} href="/">
        <BsHouse />
      </a>
      <a
        className={activeNav === "#projects" ? "active" : ""}
        href="#projects"
        onClick={() => setActiveNav("#projects")}
      >
        <BsGithub />
      </a>
      <a href="#about">
        <BsGlobe />
      </a>
      <a href="https://www.linkedin.com/in/daanish-faiz/">
        <BsLinkedin />
      </a>
    </nav>
  );
}
