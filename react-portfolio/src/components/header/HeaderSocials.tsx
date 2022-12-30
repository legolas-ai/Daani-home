import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function HeaderSocials(): JSX.Element {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/daanifaiz" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/daanifaiz" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}
