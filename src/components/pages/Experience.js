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
            <span> Dec 2021-present</span>
          </div>
        </Reveal>
        <Reveal width={true}>
          <div className="experience_heading">
            <span style={{ color: "#0aff9d" }}>System Engineer</span>
            <span>Chennai,TamilNadu(Remote)</span>
          </div>
        </Reveal>
        <Reveal>
          <p>
            As a System Engineer at Infosys, I actively contributed to the
            introduction of new currencies within a legacy banking application
            as a Java developer. I adeptly transformed legacy Java Server Pages
            and Java codebase into modern technologies like React and Spring
            microservices, gaining proficiency across diverse tech stacks. I
            efficiently managed project stories in Jira, facilitated builds with
            TeamCity, and ensured smooth code deployments via IBM UrbanCode
            Deploy, demonstrating skills in Java, JSP and Agile Methodologies
          </p>
        </Reveal>
        <Reveal>
          <div className="experience_items">
            <span className="item">Java</span>
            <span className="item">Github</span>
            <span className="item">Jira</span>
            <span className="item">JSP</span>
          </div>
        </Reveal>
        <Reveal width={true}>
          <div className="experience_heading">
            <span>Aequalis Software Solutions Pvt Ltd</span>
            <span>Jun 2021 - Sept 2021</span>
          </div>
        </Reveal>
        <Reveal width={true}>
          <div className="experience_heading">
            <span style={{ color: "#0aff9d" }}>React Developer</span>
            <span>Chennai,TamilNadu(Remote)</span>
          </div>
        </Reveal>
        <Reveal>
          <p>
            During my internship at Aequalis Software Solutions, I played a
            pivotal role as a React Developer. I successfully built an Ethereum
            transaction module with secure rules and improved frontend UI,
            alongside streamlining application processes and creating intuitive
            interfaces for farmer societies.
          </p>
        </Reveal>
        <Reveal>
          <div className="experience_items">
            <span className="item">ReactJs</span>
            <span className="item">Html,css</span>
            <span className="item">Javascript</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
