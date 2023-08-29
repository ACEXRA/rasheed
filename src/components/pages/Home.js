import React from "react";
import Droplets from "../misc/Droplets";
import Reveal from "../misc/Reveal";

export default function Home() {
  return (
    <div
      data-section
      id="home"
      className="section"
      style={{ marginBottom: "9.6rem" }}
    >
      <div className="home">
        <Reveal>
          <h1>
            Hey, I am Rasheed<span style={{ color: "#0aff9d" }}>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2>
            I am <span style={{ color: "#0aff9d" }}>Web Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p>
            I am a dedicated developer with a strong background in
            development💻, problem-solving, and leadership. I'm eager to
            contribute my skills to meaningful projects and drive impactful
            results.
          </p>
        </Reveal>
        <Reveal>
          <button className="cust_btn">
            <a href="#contact">Contact</a>
          </button>
        </Reveal>
      </div>
      <Droplets />
    </div>
  );
}
