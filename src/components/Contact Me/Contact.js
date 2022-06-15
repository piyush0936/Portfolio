import { TextareaAutosize, TextField } from "@mui/material";
import React from "react";
import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="ContactMe">
      <div className="MainHeading">GET IN TOUCH</div>
      <div className="Sections">
        <div className="sec-left">
          <div className="ListItems">
            <ul>
              <li>
                <span className="ContactIcons">
                  <MdEmail />
                </span>
                <span className="ContactText">piyush.pj936@gmail.com</span>
              </li>
              <li>
                <span className="ContactIcons">
                  <MdPhone />
                </span>
                <span className="ContactText">0123456789</span>
              </li>
              <li>
                <span className="ContactIcons">
                  <MdLocationOn />
                </span>
                <span className="ContactText">India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="sec-right">
          <div className="Top-section">
            <div className="Top-Name">
              <TextField label="Your Name" variant="outlined" />
            </div>
            <div>
              <TextField label="Your Email" variant="outlined" />
            </div>
          </div>
          <div className="Bottom-Subject">
            <TextField
              className="Bottom"
              label="Your Subject"
              variant="outlined"
            />
          </div>
          <div className="Bottom-Message">
            <TextField
              className="Bottom"
              label="Your Message"
              variant="outlined"
            />
          </div>
          <button className="SubmitButton">SEND ME</button>
        </div>
      </div>
      <div className="Footer">
        Made with &nbsp;
        <span className="HeartIcon">
          <BsFillSuitHeartFill />
        </span>
        &nbsp; by Piyush Jain
      </div>
    </div>
  );
};

export default Contact;
