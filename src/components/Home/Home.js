import React from "react";
import AboutMe from "../About Me/AboutMe";
import Contact from "../Contact Me/Contact";
import Education from "../Education/Education";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Work from "../Work Experience/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Education />
      <Work />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
