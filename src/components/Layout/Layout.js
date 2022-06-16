//create a react component
import React from "react";
import { Outlet } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import Toolbar from "../Toolbar/Toolbar";
export default function Layout() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [showOverlay, setShowOverlay] = React.useState(false);
  const handleOverlayClick = () => setShowOverlay(!showOverlay);

  const [showSideDrawer, setShowSideDrawer] = React.useState(false);
  const handleSideDrawerClick = () => setShowSideDrawer(!showSideDrawer);

  const backdrop = showOverlay ? (
    <Backdrop className="backdrop" onClick={handleOverlayClick} />
  ) : null;

  return (
    <>
      <Toolbar drawerClickHandler={handleSideDrawerClick} />
      <SideDrawer show={show} onClick={handleClick} />
      {backdrop}
      <Outlet />
    </>
  );
}
