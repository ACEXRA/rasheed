import React from "react";

export default function Experience() {
  return (
    <div data-section id="experience" className="section">
      <div className="title_head" style={{ flexDirection: "row-reverse" }}>
        <div className="line"></div>
        <h3>
          Experience<span style={{ color: "#0aff9d" }}>.</span>
        </h3>
      </div>
      <div className="experience_content">
        <div className="experience_heading">
          <span>Infosys</span>
          <span>2022-present</span>
        </div>
        <div className="experience_heading">
          <span style={{ color: "#0aff9d" }}>Role</span>
          <span>Chennai,TamilNadu</span>
        </div>
        <p>
          I help build and scale Google Photos. Increased throughput of our
          primary services by 70%. Migrated backend service from Java to Go.
          Also helped make it look prettier.
        </p>
        <div className="experience_items">
          <span className="item">Java</span>
          <span className="item">Spring</span>
          <span className="item">Github</span>
          <span className="item">Jira</span>
        </div>
      </div>
    </div>
  );
}
