import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Toolbar/Toolbar.css";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
