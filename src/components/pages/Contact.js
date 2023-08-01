import React from "react";
import Reveal from "../misc/Reveal";

export default function Contact() {
  return (
    <div data-section id="contact" className="section">
      <div className="contact_content">
        <Reveal width={true}>
          <h1>
            Contact<span style={{ color: "#0aff9d" }}>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p>
            Shoot me an email if you want to connect! You can also find me on
            Linkedin or Twitter if that's more your speed.
          </p>
        </Reveal>
        <Reveal width={true}>
          <a href="#Home">
            <div className="mail">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></path>
              </svg>
              <span
                style={{
                  color: "#0aff9d",
                  fontSize: "2.4rem",
                  textAlign: "center",
                }}
              >
                rasheed.786ahamed@gmail.com
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
