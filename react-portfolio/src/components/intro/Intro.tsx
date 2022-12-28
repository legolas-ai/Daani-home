import React from "react";
import "./intro.css";
const cochlearImplant = require("../../assets/cochlearImplant.png");
const habitTracker = require("../../assets/habit_tracker_mobile_hf.png");
const breathlyserOutputGraph = require("../../assets/breathlyserOutputGraph.png");

export default function Intro(): JSX.Element {
  return (
    <body className="intro">
      <div className="container intro__container">
        <h1 className="intro__title">Featured Projects</h1>
        <div className="row">
          <div className="column">
            <img
              className="intro__image"
              alt="cochlear implant"
              src={cochlearImplant}
            ></img>
          </div>
          <div className="column">
            <h2 className="intro__subheading">
              Cochlear: N7 for N22 Lead Engineer
            </h2>
            <h4 className="intro__body">
              Lead design engineer for enabling the latest Cochlear Implant
              external sound processor at the time to be compatibilie with the
              earliest implant
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h2 className="intro__subheading">
              Holitic: Health Tech Startup Founder
            </h2>
            <h4 className="intro__body">
              Was the Founder and CEO of a startup that released to market a
              recomednation engine driven habit tracker and subscription gym
              pass.
            </h4>
          </div>
          <div className="column">
            <img
              className="intro__image"
              alt="habit tracker"
              src={habitTracker}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <img
              className="intro__image"
              alt="breathlyser output graph"
              src={breathlyserOutputGraph}
            ></img>
          </div>
          <div className="column">
            <h2 className="intro__subheading">Alcolizer Technology: R&D</h2>
            <h4 className="intro__body">
              Operating as a research mechatronics engineer, developed a novel
              machine learning algorithm to detect mouth alcohol presence as
              part of a honours engineering thesis.
            </h4>
          </div>
        </div>
      </div>
    </body>
  );
}
