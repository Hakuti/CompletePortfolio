import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  const location = useLocation();
  const backgroundColor = () => {
    if (location.pathname === "/") {
      console.log("home");
      return "#30D2FF";
    } else if (location.pathname === "/Contact") {
      console.log("contact");
      return "#FF7474";
    } else {
      return "";
    }
  };
  // const match = useMatch("/");
  if (props.show) {
    // console.log(location);
    // console.log(props);
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul style={{ backgroundColor: backgroundColor() }}>
        <li onClick={props.drawerClickHandler}>
          <Link to="/">Jean Canales</Link>

          {/* <a href="/">Jean Canales</a> */}
        </li>
        <li onClick={props.drawerClickHandler}>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li onClick={props.drawerClickHandler}>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
        <li onClick={props.drawerClickHandler}>
          <a
            href="https://www.linkedin.com/in/jean-canales-6b1441a7/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li onClick={props.drawerClickHandler}>
          <a href="https://github.com/Hakuti" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
      </ul>
      {/* <div className="side-drawer__x-button">
            X
        </div> */}
    </nav>
  );
};

export default SideDrawer;
