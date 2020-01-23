import React from "react";
import "./Intro.css";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="introText alata white">
      <div className="introP">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .changeDelay(50)
              .typeString(
                "<span style = 'text-align: left;'> Hi, my name is </span>"
              )

              .typeString("<span style = 'color:#6fffc1;'>Qurram,</span>")
              .typeString(
                "<br><span>and I like building things for <br>the web.</span>"
              )

              .start();
          }}
        >
          {" "}
        </Typewriter>
      </div>
    </div>
  );
};

export default Intro;
