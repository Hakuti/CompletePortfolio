import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Jean Canales</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Resume</a></li>
            <li><a href="/">LinkedIn</a></li>
            <li><a href="/">Github</a></li>
        </ul>
        {/* <div className="side-drawer__x-button">
            X
        </div> */}
    </nav>
    );
};

export default sideDrawer;