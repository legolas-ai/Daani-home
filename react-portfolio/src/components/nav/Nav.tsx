import React, { useState } from "react";
import "./nav.css";
import { BsLinkedin, BsGithub, BsHouse } from "react-icons/bs";
import { SiMedium } from "react-icons/si";

export default function NAV(): JSX.Element {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a className={activeNav === "#" ? "active" : ""} href="/">
        <BsHouse />
      </a>
      <br className="nav__gap"></br>
      <a
        className={activeNav === "#projects" ? "active" : ""}
        href="#projects"
        onClick={() => setActiveNav("#projects")}
      >
        Projects
      </a>
      <a href="#about">Blogs</a>
      <br></br>
      <a href="https://www.linkedin.com/in/daani-faiz/">
        <BsLinkedin />
      </a>
    </nav>
  );
}
