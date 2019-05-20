import React from 'react'

import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Cloud from '../Cloud_Svg/Cloud';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props =>  {
  return (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <Cloud></Cloud>
            <div className="toolbar__toggle-button"><DrawerToggleButton click={props.drawerClickHandler} ></DrawerToggleButton></div>
            <div className="toolbar__logo"><a href="/">Jean Canales</a></div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default toolbar;
