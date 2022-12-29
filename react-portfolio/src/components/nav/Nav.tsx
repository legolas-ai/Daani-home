import React, { useState } from "react";
import "./nav.css";
import { BsLinkedin } from "react-icons/bs";
import { SiMedium } from "react-icons/si";

export default function NAV(): JSX.Element {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a className={activeNav === "#" ? "active" : ""} href="/">
        Daani Faiz
      </a>
      <br className="nav__gap"></br>
      <a
        className={activeNav === "#projects" ? "active" : ""}
        href="#projects"
        onClick={() => setActiveNav("#projects")}
      >
        Projects
      </a>
      <a href="#about">About</a>
      <br></br>
      <a href="#blog">
        <SiMedium />
      </a>
      <a href="#linkedIn">
        <BsLinkedin />
      </a>
    </nav>
  );
}
