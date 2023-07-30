import React from "react";

export default function About() {
  const arr = ["Java", "Spring", "My Sql", "GitHub", "Jira", "UCD"];
  const arr2 = [
    "Figma",
    "Lottie Files",
    "Framer motion",
    "Javascript",
    "Typescript",
    "Html",
    "Css",
    "React",
    "Redux",
  ];
  return (
    <div data-section id="about" className="section">
      <div className="title_head" style={{ flexDirection: "row-reverse" }}>
        <div className="line"></div>
        <h3>
          About<span style={{ color: "#0aff9d" }}>.</span>
        </h3>
      </div>
      <div className="about_content">
        <div>
          <p>
            Hey! I'm Bob, if you haven't already gathered that by now. I'm a
            painter turned software engineer from Daytona, Florida. I specialize
            in the backend, primarily Node and Rust, but love building with
            whatever tools are right for the job.
          </p>
          <p>
            I currently work for Google on Google Photos. I also toss in my ¢2
            with the design systems teams from time to time (once an artist,
            always an artist, amirite?).
          </p>
          <p>
            Outside of work, I still love to paint. Any given Sunday you'll find
            me scribbling some happy clouds with my son ☁️ I even teach courses
            online if you're looking to learn!
          </p>
          \
          <p>
            I'm passively looking for new positions where I can merge my love
            for code with my love for the canvas. If you think you've got an
            opening that I might like, let's connect 🔗
          </p>
          <div className="about_links">
            <p style={{ color: "#0aff9d" }}>My links -{">"}</p>
            <a
              href="https://www.linkedin.com/in/rasheed-ahamed-20022000"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
              </svg>
            </a>

            <a
              href="https://github.com/acexra"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="about_items">
          <div>
            <h4>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#0aff9d"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
              </svg>
              Used for Work
            </h4>
            <div className="about_tech">
              {arr.map((item) => {
                return (
                  <span key={item} className="about_items">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h4>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                color="#0aff9d"
                height="2.4rem"
                width="2.4rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
              </svg>
              Used for fun
            </h4>
            <div className="about_tech">
              {arr2.map((item) => {
                return (
                  <span key={item} className="about_items">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
