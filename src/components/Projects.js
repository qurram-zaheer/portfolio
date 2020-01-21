import React from "react";
import qf from "../assets/qf.png";
import jsr from "../assets/jsr.png";
import qdex from "../assets/qdex.png";
import gharrow from "../assets/gharrow.png";
import gh from "../assets/gh.png";
import git from "../assets/git.png";
import "./Project.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreHover: false
    };
  }

  hoverOnArrow = () => {
    this.setState({ moreHover: true });
  };
  leaveArrow = () => {
    this.setState({ moreHover: false });
  };
  render() {
    return (
      <div className="project">
        <div className="projects-card flex flex-wrap pa4 w-60">
          <div className=" w-50 pa2 ">
            <div className="w-100 pa2">
              <img className="br2 shadow-2" src={qdex}></img>
            </div>
            {/* <div className="w-50 alata pt2">
            Dynamic Pokedex webapp, with pokemon details up to Gen 5, using
            PokeAPI, powered by React
          </div> */}
          </div>
          <div className="w-50 pa2">
            <div className="w-100 pa2">
              <img className="br2 shadow-2" src={jsr}></img>
            </div>
            {/* <div className="w-50 alata pt2">
            Face recognition webapp using Clarifai API, powered by React. Fully
            functional backend and database using express.js and PostgreSQL
          </div> */}
          </div>
          <div className="w-50 pa2">
            <div className="w-100 pa2">
              <img className="br2 shadow-2" src={qf}></img>
            </div>
            {/* <div className="w-50 alata pt2">
            Webapp for dynamic email survey creation and batch sending of
            emails, powered by React, Redux for frontend, OAuth using Google
            API, Stripe JS for payments, and express and MongoDB(via Mongoose)
            for backend and database
          </div> */}
          </div>
          <div className=" pa2 w-50">
            <div className="w-100 pa2">
              <img className="br2 shadow-2" src={git}></img>
              {/* {this.state.moreHover ? (
                <img
                  className="dim pa2 pointer center"
                  src={gh}
                  onMouseEnter={this.hoverOnArrow}
                  onMouseLeave={this.leaveArrow}
                ></img>
              ) : (
                <img
                  className=" shrink pa2 link pointer center"
                  src={gharrow}
                  onMouseEnter={this.hoverOnArrow}
                  onMouseLeave={this.leaveArrow}
                ></img>
              )} */}
            </div>
            {/* <div className="w-50 alata pt2">
            Webapp for dynamic email survey creation and batch sending of
            emails, powered by React, Redux for frontend, OAuth using Google
            API, Stripe JS for payments, and express and MongoDB(via Mongoose)
            for backend and database
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
