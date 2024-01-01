
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./ServicesMain.css"; // ייבא את קובץ ה-CSS שינוצר
import meeting from "./meeting";
import DisplayMeeting from "./DisplayMeeting";
function ServicesMain() {
  return (
    <>
      <div className="links-container">
        <Link to=""></Link>
        <button><Link to="ServiceView">Show Services</Link></button>
        <button><Link to="meeting">Show Meetings</Link></button>
      </div>
      <br />
      <br />
      <Outlet />
    </>
  );
}

export default ServicesMain;
