import React from "react";
import "./About.css";
import profilePic from "../assets/dp.jpeg";
import arrow from "../assets/arrow.png";
import Fade from "react-reveal/Fade";
const techArray = [
  "JavaScript(ES6+)",
  "React",
  "Express",
  "Node.js",
  "HTML and CSS",
  "Redux"
];
const About = () => {
  return (
    <div className="about">
      <div className="about-card flex flex-wrap w-60 alata">
        <Fade duration={1500}>
          <div className="f1 lh-title w-70 pa2">About me</div>
        </Fade>
        <Fade delay={200} duration={1500}>
          <div className="w-100 pa2 lh-copy">
            Hi, I'm Qurram and I'm currently a CS undergrad. I enjoy
            programming, and am very passionate about building things in code. I
            am aspiring to be a fullstack developer.
          </div>
        </Fade>
        <Fade delay={600} duration={1500}>
          <div className="pa2 w-100">
            Here are a few technologies I'm familiar with:{" "}
          </div>
          <div className="pl2 w-60 flex flex-wrap f6">
            {techArray.map(skill => {
              return (
                <div className="w-40 pa0 ma0">
                  <ul className="pa0 ma2">
                    <img className="pr1" src={arrow}></img>
                    {skill}
                  </ul>
                </div>
              );
            })}
            {/* <div className="w-50">
            <ul>
              <img className="pr1 pa0" src={arrow}></img>Python
            </ul>
          </div>
          <div className="w-50">
            <ul>
              <img className="pr1 pa0" src={arrow}></img>JavaScript (ES6+)
            </ul>
          </div>
          <div className="w-50">
            <ul>
              <img className="pr1 pa0" src={arrow}></img>Python
            </ul>
          </div> */}
          </div>
        </Fade>
      </div>
      <Fade duration={1500}>
        <div className=" about-card ml0 w-40 h5">
          <img src={profilePic} className="profile ml5"></img>
        </div>
      </Fade>
    </div>
  );
};

export default About;
