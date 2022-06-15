import React from "react";
import "./Skills.css";

// React Icons link below
// https://react-icons.github.io/react-icons

import {
  DiVisualstudio,
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiJava,
  DiGit,
  DiGithubBadge,
  DiNpm,
  DiBootstrap,
  DiMongodb,
  DiNodejs,
} from "react-icons/di";

const Skills = () => {
  return (
    <div className="Skills">
      <div className="SkillsHeading"> Skills component below (done)</div>
      <div className="SkillIcons">
        <DiVisualstudio />
        <DiJavascript1 />
        <DiReact />
        <DiHtml5 />
        <DiCss3 />
        <DiJava />
        <DiGit />
        <DiGithubBadge />
        <DiNpm />
      </div>
    </div>
  );
};

export default Skills;
