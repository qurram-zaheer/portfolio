import React from "react";
import Fade from "react-reveal/Fade";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="db pa3 josefin" style={{ position: "fixed", right: "0px" }}>
      <div className="db pa2 dtc-l v-top w-100 w-75-l tc tr-l">
        <Fade top delay={200} duration={600}>
          <a
            className="link dim white f6 f5-l dib mr3 mr4-l"
            href="#home"
            title="Home"
          >
            Home
          </a>
        </Fade>
        <Fade top delay={400} duration={600}>
          <a
            className="link dim white f6 f5-l dib mr3 mr4-l "
            href="#about"
            title="About me"
          >
            About me
          </a>
        </Fade>
        <Fade top delay={600} duration={600}>
          <a
            className="link dim white f6 f5-l dib mr3 mr4-l "
            href="#projects"
            title="Projects"
          >
            Projects
          </a>
        </Fade>
      </div>
    </nav>
  );
};

export default Navbar;
