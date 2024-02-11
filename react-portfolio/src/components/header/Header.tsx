import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
const cartoonDaani = require("../../assets/cartoonDaani.jpg");

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="container header__container">
        <div className="header__image">
          <h2>
            <p>G'day I'm Daani</p> I'm an Engineer,The purpose of this page is
            to take you on an interactive journey through my work.
            <p></p>
            Checkout the chatbot below to learn a bit about this space
          </h2>
        </div>

        <div className="textbox__container">
          <input
            type="textarea"
            className="textbox__input"
            placeholder="Enter your prompt here"
          />
        </div>
        <h2></h2>
        <p></p>
        <HeaderSocials />
      </div>
    </header>
  );
}
