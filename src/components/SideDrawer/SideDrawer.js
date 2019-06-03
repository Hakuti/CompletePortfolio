import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
    <nav className={drawerClasses} 
    background={props.pathname == `/` ? "#30D2FF":
 props.pathname == `/Contact` ? '#FF7474': ""}
    >
        <ul>
            <li><a href="/">Jean Canales</a></li>
            <li><a href="/">Home</a></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><a href="/">Resume</a></li>
            <li><a href="https://www.linkedin.com/in/jean-canales-6b1441a7/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/Hakuti" target="_blank">Github</a></li>
        </ul>
        {/* <div className="side-drawer__x-button">
            X
        </div> */}
    </nav>
    );
};

export default sideDrawer;