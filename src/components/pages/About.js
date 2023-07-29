import React from "react";

export default function About() {
  return (
    <div data-section id="about" className="section">
      <div className="title_head" style={{ flexDirection: "row-reverse" }}>
        <div className="line"></div>
        <h3>
          About<span style={{ color: "#0aff9d" }}>.</span>
        </h3>
      </div>
      <div className="about_content"></div>
    </div>
  );
}
