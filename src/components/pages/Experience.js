import React from "react";
import Reveal from "../misc/Reveal";

export default function Experience() {
  return (
    <div data-section id="experience" className="section">
      <div className="title_head" style={{ flexDirection: "row-reverse" }}>
        <div className="line"></div>

        <h3>
          <Reveal>
            <span>
              Experience<span style={{ color: "#0aff9d" }}>.</span>
            </span>
          </Reveal>
        </h3>
      </div>
      <div className="experience_content">
        <Reveal width={true}>
          <div className="experience_heading">
            <span>Infosys</span>
            <span>2022-present</span>
          </div>
        </Reveal>
        <Reveal width={true}>
          <div className="experience_heading">
            <span style={{ color: "#0aff9d" }}>Role</span>
            <span>Chennai,TamilNadu</span>
          </div>
        </Reveal>
        <Reveal>
          <p>
            I help build and scale Google Photos. Increased throughput of our
            primary services by 70%. Migrated backend service from Java to Go.
            Also helped make it look prettier.
          </p>
        </Reveal>
        <Reveal>
          <div className="experience_items">
            <span className="item">Java</span>
            <span className="item">Spring</span>
            <span className="item">Github</span>
            <span className="item">Jira</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
