import React, { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);
  const handleScroll = () => {
    const pageYOffset = parseInt(
      document.body.getBoundingClientRect().top * -1 + 200
    );
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sidebar">
      <a href="#home">
        <span className="title">
          R<span style={{ color: "#0aff9d" }}>.</span>
        </span>
      </a>
      <a
        href="#about"
        className={`link ${activeSection === "about" ? "active" : ""}`}
      >
        About
      </a>
      {/* <a
        href="#projects"
        className={`link ${activeSection === "projects" ? "active" : ""}`}
      >
        Projects
      </a> */}
      <a
        href="#experience"
        className={`link ${activeSection === "experience" ? "active" : ""}`}
      >
        Experience
      </a>
      <a
        href="#contact"
        className={`link ${activeSection === "contact" ? "active" : ""}`}
      >
        Contact
      </a>
    </div>
  );
};
export default Sidebar;
