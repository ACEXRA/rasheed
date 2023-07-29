import React from "react";

export default function Home() {
  return (
    <div
      data-section
      id="home"
      className="section"
      style={{ marginBottom: "9.6rem" }}
    >
      <div className="home">
        <h1>
          Hey, I am Rasheed<span style={{ color: "#0aff9d" }}>.</span>
        </h1>
        <h2>
          I am <span style={{ color: "#0aff9d" }}>Full Stack Developer</span>
        </h2>
        <p>
          I've spent the last 5 years building and scaling software for some
          pretty cool companies. I also teach people to paint online (incase
          you've got an empty canvas layin' around 🎨). Let's connect!
        </p>

        <button className="cust_btn">Contact</button>
      </div>
    </div>
  );
}
