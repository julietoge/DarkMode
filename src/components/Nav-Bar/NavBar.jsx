import React from "react";
import NavBarComp from "./NavBarcomp";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="haspac-wrapper">
      <NavBarComp pages={"Home"} />
      <NavBarComp pages={"About"} />
      <NavBarComp pages={"Skills_&_Tools"} />
      <NavBarComp pages={"Projects"} />
      <NavBarComp pages={"Contact"} />
    </div>
  );
};

export default NavBar;
