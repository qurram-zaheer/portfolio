import React from "react";
import "./Home.css";
import Intro from "./Intro";
import About from "./About";
import Projects from './Projects'

const Home = () => {
  return (
    <div>
      <div className="bgmain firstbg">
        <Intro />
      </div>
      <div style={{ height: "100vh" }}>
        <About />
      </div>
      <div style = {{height:'100vh'}}>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
