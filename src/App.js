import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Toolbar/Toolbar.css';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Toolbar from './components/Toolbar/Toolbar'
import Backdrop from './components/Backdrop/Backdrop';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cloud from './components/Cloud_Svg/Cloud';

import { throwStatement } from '@babel/types';
import CardPortfolio from './components/CardPortfolio/CardPortfolio';
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/Contact/Contact';


class App extends Component {

  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickerHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  }

  render(){
    let backdrop;

    if(this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    
    

  return (
    <div style={{height: '100%'}} >
    <Router>
      
      <Toolbar drawerClickHandler={this.drawerToggleClickerHandler}></Toolbar>
      <SideDrawer show={this.state.SideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop: '56px'}}>

      
      {/* <p>This is the page content</p> */}
      {/* <Cloud></Cloud> */}

      {/* <div className="horizontal-scroll"> */}
      {/* <CardPortfolio></CardPortfolio> */}
      {/* <CardPortfolio></CardPortfolio> */}
      {/* <CardPortfolio></CardPortfolio> */}

      {/* </div> */}
      <Route path="/" exact component={Home}/>
      <Route path="/Contact" exact component={Contact}/>

      </main>
      </Router>
    </div>





    // <div className="Desktop-NavMenu-Wrapper">
    // <React.Fragment>
      /* <div className="Mobile-Menu-Overlay">
      <nav className="Desktop-NavMenu">
      <div className="Cloud">

      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Github</li>
        <li>LinkedIn</li>
        </ul>
      </nav>


    <nav className="Mobile-NavMenu">

      <div>

      </div>
      <h5>
        Jean Canales
      </h5>
    </nav>


    </div>
   
    <div className="Mobile-DrawerMenu">

    </div> */

    // </React.Fragment>





    
  );
  }
}

export default App;
