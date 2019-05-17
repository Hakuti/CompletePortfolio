import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (
    <button onClick={props.click} className="toggle-button">
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </button>
);

export default drawerToggleButton;