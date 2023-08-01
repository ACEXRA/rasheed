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
            I am <span style={{ color: "#0aff9d" }}>Full Stack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p>
            I've spent the last 5 years building and scaling software for some
            pretty cool companies. I also teach people to paint online (incase
            you've got an empty canvas layin' around 🎨). Let's connect!
          </p>
        </Reveal>
        <Reveal>
          <button className="cust_btn">Contact</button>
        </Reveal>
      </div>
      <Droplets />
    </div>
  );
}
