import React from "react";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </>
  );
}
