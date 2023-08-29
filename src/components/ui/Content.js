import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Header from "./Header";

const Content = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <div className="end_hue"></div>
    </div>
  );
};
export default Content;
