import React from "react";
import "./About.css";
import profilePic from "../assets/dp.jpeg";
import arrow from "../assets/arrow.png";
import arrows from "../assets/arrows.png";
import Fade from "react-reveal/Fade";
const techArray = [
  "JS(ES6+)",
  "React",
  "Express",
  "Node.js",
  "HTML and CSS",
  "Redux"
];
const About = () => {
  return (
    <div className="about" id="about">
      <div
        className="flex flex-wrap ba near-white border-shadow-1 w-70"
        style={{ margin: "auto", marginLeft: "0px" }}
      >
        <div className="about-card flex flex-wrap w-60 alata near-white  mr0 pa3">
          <Fade duration={1500}>
            <div
              className="w-50 f3 lh-title pr2 pb1 silver bb"
              style={{ cursor: "default" }}
            >
              <img alt="" className="pr1" src={arrow}></img>About me
            </div>
          </Fade>
          <Fade delay={200} duration={1500}>
            <div
              className="w-100 pa2 mt2 josefin"
              style={{ fontSize: "18px", cursor: "default" }}
            >
              Hi, I'm Qurram and I'm currently a CS undergrad. I enjoy
              programming, and am very passionate about building things in code.
              I am aspiring to be a fullstack developer. I really enjoy speaking
              in public, and love taking part in creative speaking/writing
              events.
              <br></br>
              <br></br>My goal is to build high performance, modern websites
              with pixel perfect UIs and very optimized backends.
            </div>
          </Fade>
          <Fade delay={600} duration={1500}>
            <div className="pa2 w-100 josefin " style={{ fontSize: "18px" }}>
              Here are a few technologies I'm familiar with:{" "}
            </div>
            <div className="pl2 w-80 flex flex-wrap f6 lato">
              {techArray.map(skill => {
                return (
                  <div className="w-50 pa0 ma0">
                    <ul className="pa0 ma2" style={{ fontSize: "13px" }}>
                      <img alt="" className="pr1" src={arrows}></img>
                      {skill}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
        <Fade duration={1500}>
          <div className="h5 w-40" style={{ margin: "auto" }}>
            <img alt="" src={profilePic} className="profile ml5"></img>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
