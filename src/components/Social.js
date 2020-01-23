import React from "react";
import gsoc from "../assets/gsoc.png";
import gsocg from "../assets/gsoc-g.png";
import twt from "../assets/twt.png";
import twtg from "../assets/twtg.png";
import lin from "../assets/in.png";
import ling from "../assets/ing.png";
import Fade from "react-reveal/Fade";

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverID: ""
    };
  }

  hoverOnArrow = event => {
    this.setState({ hoverID: event.target.id });
    console.log(event.target.id);
  };
  leaveArrow = () => {
    console.log("leave", this.state.hoverID);
    this.setState({ hoverID: "" });
  };
  render() {
    return (
      <div
        style={{ position: "fixed", right: "0", bottom: "0" }}
        className="flex flex-column white pr5"
        id="456"
      >
        <div className="flex flex-column">
          <Fade top delay={800}>
            <div className="w-100 br2 grow ">
              <a href="https://github.com/qurram-zaheer/qfeedbacker">
                {this.state.hoverID === "p1" ? (
                  <img alt="" onMouseLeave={this.leaveArrow} src={gsocg}></img>
                ) : (
                  <img
                    alt=""
                    id="p1"
                    onMouseEnter={this.hoverOnArrow}
                    src={gsoc}
                  ></img>
                )}
                {/* <img
              id="p1"
              src={srcImage}
              onMouseEnter={this.hoverOnArrow}
              onMouseLeave={this.leaveArrow}
            ></img> */}
              </a>
            </div>
          </Fade>
          <Fade top delay={600}>
            <div className="w-100 br2 grow ">
              <a href="https://in.linkedin.com/">
                {this.state.hoverID === "p2" ? (
                  <img alt="" onMouseLeave={this.leaveArrow} src={ling}></img>
                ) : (
                  <img
                    id="p2"
                    alt=""
                    onMouseEnter={this.hoverOnArrow}
                    src={lin}
                  ></img>
                )}
              </a>
            </div>
          </Fade>
          <Fade top delay={400}>
            <div className="w-100 br2 grow ">
              <a href="https://twitter.com/Decoherence17">
                {this.state.hoverID === "p3" ? (
                  <img alt="" onMouseLeave={this.leaveArrow} src={twtg}></img>
                ) : (
                  <img
                    alt=""
                    id="p3"
                    onMouseEnter={this.hoverOnArrow}
                    src={twt}
                  ></img>
                )}
              </a>
            </div>
          </Fade>
          <Fade top>
            <div className="h4 bg-white center" style={{ width: "2px" }}></div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Social;
