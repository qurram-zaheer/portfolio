import React from "react";

import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Intro />
      </div>
      <div style={{ height: "100vh" }}>
        <About />
      </div>
      <div style={{ height: "100vh" }}>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
