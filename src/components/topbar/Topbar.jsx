import React from "react";
import "./topbar.scss";
import { Person, Mail, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Venchy
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>++ 222 222 2222</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <spam>yadian@seas.upenn.edu</spam>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href=""> linkedIn....</a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
