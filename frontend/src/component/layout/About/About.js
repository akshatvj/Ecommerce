import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/akshat__vj";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dgsxhhmwy/image/upload/v1685860933/profile_yrnvl1.png"
              alt="Founder"
            />
            <Typography>Akshat vijay</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              My name is <strong>Akshat vijay</strong>.I am a <strong> IIT Kharagpur</strong> Gradute from the department
               of <strong>Computer Science and Engineering</strong>.
              This is a sample wesbite made by Me. Only with the
              purpose to learn and implement MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">MY Account</Typography>
            <a href="https://instagram.com/akshat__vj" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
