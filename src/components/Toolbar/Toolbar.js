import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import Cloud from "../Cloud_Svg/Cloud";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import CloudDesktop from "../CloudDesktop/CloudDesktop";

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <Cloud minWidth="54.28" minHeight="42.936"></Cloud>
        <CloudDesktop minWidth="250" minHeight="130"></CloudDesktop>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton
            click={props.drawerClickHandler}
          ></DrawerToggleButton>
        </div>
        <div className="toolbar__logo">
          <a href="/">Jean Canales</a>
        </div>
        <div className="spacer"></div>
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <a
                href="https://github.com/Hakuti"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jean-canales-6b1441a7/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
