import React from "react";
import "./AboutMe.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import profileImg from '../../assests/img/mypic.jpg';

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="content-left">
        <div className="heading1">Hello</div>
        <div className="heading2">
          I'm <span className="Name">Piyush</span>
        </div>
        <div className="heading3">
          <span className="Name">Jain</span>
        </div>
        <div className="heading4">A Web Developer</div>
        <div className="Buttons">
          <div className="buttonOnTop">
            <button className="button1">Skills</button>
            <button className="button2">My Works</button>
          </div>
          <div className="buttonOnBottom">
            <button className="button3">Download Resume</button>
          </div>
        </div>
      </div>
      <div className="content-right">
        <img className="profileImg" src={profileImg} alt="Profile Image here" />
        <div className="AboutMeIcons">
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
