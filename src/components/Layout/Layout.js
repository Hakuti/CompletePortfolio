import React from "react";
import { Outlet } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import Toolbar from "../Toolbar/Toolbar";

export default function Layout() {
  const [sideDrawerOpen, setSideDrawerOpen] = React.useState(false);
  const [showBackdrop, setShowBackdrop] = React.useState(false);

  const handleSideDrawerClick = () => {
    setShowBackdrop(!showBackdrop);
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
    setShowBackdrop(false);
  };

  const backdrop = showBackdrop ? (
    <Backdrop className="backdrop" onClick={backdropClickHandler} />
  ) : null;

  return (
    <main>
      <Toolbar drawerClickHandler={handleSideDrawerClick} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <Outlet />
    </main>
  );
}
