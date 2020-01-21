import React from "react";
import menuIcon from "../assets/menu.png";

const Navbar = () => {
  return (
    <nav className="fr db pa3">
      <img alt="menuIcon" src={menuIcon}></img>
    </nav>
  );
};

export default Navbar;
