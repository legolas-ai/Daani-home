import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiMedium } from "react-icons/si";

export default function HeaderSocials(): JSX.Element {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/daanifaiz" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/daanifaiz" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://medium.com/@daanifaiz">
        <SiMedium />
      </a>
    </div>
  );
}
