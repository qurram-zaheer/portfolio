import React from "react";
import qf from "../assets/qf.png";
import jsr from "../assets/jsr.png";
import qdex from "../assets/qdex.png";
import arrow from "../assets/arrow.png";
import git from "../assets/git.png";
import Fade from "react-reveal/Fade";
import "./Project.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverID: ""
    };
  }

  hoverOnArrow = event => {
    this.setState({ hoverID: event.target.id });
  };
  leaveArrow = () => {
    this.setState({ hoverID: "" });
  };
  render() {
    return (
      <div className="project" id="projects">
        <div className="projects-card flex flex-wrap  w-60">
          <Fade duration={1500}>
            <div className="w-80 f3 lh-title silver alata bb pb1">
              <img alt="" className="pr1" src={arrow}></img>Projects:{" "}
            </div>
          </Fade>
          <div className=" mt4 w-30 pl2 pr3 pb3 grow pimage vh-25 pointer">
            <a
              href="https://github.com/qurram-zaheer/qurram_dex"
              target="_blank"
              rel="noopener"
            >
              <div
                id="p1"
                className="w-100 br2"
                style={{
                  backgroundImage: `url(${qdex})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100%"
                }}
                onMouseEnter={this.hoverOnArrow}
                onMouseLeave={this.leaveArrow}
              >
                {this.state.hoverID === "p1" ? (
                  <div
                    className="br2 center alata "
                    style={{
                      height: "100%"
                    }}
                  >
                    <div className="w-70 center pt5">
                      <p className="ba black">QurramDex</p>
                    </div>
                    <div className="w-10"></div>
                  </div>
                ) : null}
              </div>
            </a>
            {/* <div className="w-50 alata pt2">
            Dynamic Pokedex webapp, with pokemon details up to Gen 5, using
            PokeAPI, powered by React
          </div> */}
          </div>
          <div className="mt4 w-30 pl2 pr3 pb3 grow pimage vh-25 pointer">
            <a
              href="https://github.com/qurram-zaheer/jsrec-frontend"
              target="_blank"
              rel="noopener"
            >
              <div
                className="w-100 br2"
                id="p2"
                style={{
                  backgroundImage: `url(${jsr})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100%"
                }}
                onMouseEnter={this.hoverOnArrow}
                onMouseLeave={this.leaveArrow}
              >
                {this.state.hoverID === "p2" ? (
                  <div
                    className="br2 center alata "
                    style={{
                      height: "100%"
                    }}
                  >
                    <div className="w-70 center pt5 ">
                      <p className="ba black">JSRec</p>
                    </div>
                  </div>
                ) : null}
                {/* <img className="br2 shadow-2" src={jsr}></img> */}
              </div>
            </a>
            {/* <div className="w-50 alata pt2">
            Face recognition webapp using Clarifai API, powered by React. Fully
            functional backend and database using express.js and PostgreSQL
          </div> */}
          </div>
          <div className="mt4 w-30 pl2 pr3 pb3 grow pimage vh-25 pointer">
            <a
              href="https://github.com/qurram-zaheer/qfeedbacker"
              target="_blank"
              rel="noopener"
            >
              <div
                className="w-100 br2"
                id="p3"
                style={{
                  backgroundImage: `url(${qf})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100%"
                }}
                onMouseEnter={this.hoverOnArrow}
                onMouseLeave={this.leaveArrow}
              >
                {this.state.hoverID === "p3" ? (
                  <div
                    className="br2 center alata "
                    style={{
                      height: "100%"
                    }}
                  >
                    <div className="w-70 center pt5 ">
                      <p className="ba black">qFeedbacker</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </a>
          </div>
          <div className="mt4 w-30 pl2 pr3 pb3 grow pimage vh-25 pointer">
            <a
              href="https://github.com/qurram-zaheer"
              target="_blank"
              rel="noopener"
            >
              <div
                className="w-100 br2"
                id="git"
                style={{
                  backgroundImage: `url(${git})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100%"
                }}
                onMouseEnter={this.hoverOnArrow}
                onMouseLeave={this.leaveArrow}
              >
                {this.state.hoverID === "git" ? (
                  <div
                    className="br2 center alata "
                    style={{
                      height: "100%"
                    }}
                  >
                    <div className="w-70 center pt5 ">
                      <p className="ba blue">Check out my Github!</p>
                    </div>
                  </div>
                ) : null}
                {/* <img className="br2 shadow-2" src={jsr}></img> */}
              </div>
            </a>
            {/* <div className="w-50 alata pt2">
            Face recognition webapp using Clarifai API, powered by React. Fully
            functional backend and database using express.js and PostgreSQL
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
