import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Social from "./Social";

const App = () => {
  return (
    <div className="bgmain firstbg">
      <Navbar></Navbar>
      <Home></Home>
      <Social></Social>
    </div>
  );
};

export default App;
