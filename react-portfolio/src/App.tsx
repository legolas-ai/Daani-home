import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Intro />
      <Footer />
    </>
  );
}
