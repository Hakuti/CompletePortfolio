import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./components/Toolbar/Toolbar.css";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Toolbar from "./components/Toolbar/Toolbar";
import Backdrop from "./components/Backdrop/Backdrop";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cloud from "./components/Cloud_Svg/Cloud";

import { throwStatement } from "@babel/types";
import CardPortfolio from "./components/CardPortfolio/CardPortfolio";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import Layout from "./components/Layout/Layout";

class App extends Component {
  state = {
    SideDrawerOpen: false,
  };

  drawerToggleClickerHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        {/* <Router> */}
        <BrowserRouter>
          {/* <Toolbar
            drawerClickHandler={this.drawerToggleClickerHandler}
          ></Toolbar> */}
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
            {/* <SideDrawer show={this.state.SideDrawerOpen} />
            {backdrop} */}
            {/* <main style={{ marginTop: "56px" }}> */}

            {/* <p>This is the page content</p> */}
            {/* <Cloud></Cloud> */}

            {/* <div className="horizontal-scroll"> */}
            {/* <CardPortfolio></CardPortfolio> */}
            {/* <CardPortfolio></CardPortfolio> */}
            {/* <CardPortfolio></CardPortfolio> */}

            {/* </div> */}
            {/* <Route path="/" element={Home} />
              <Route path="/Contact" element={Contact} /> */}
            {/* </main> */}
            {/* </Router> */}
          </Routes>
        </BrowserRouter>
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
