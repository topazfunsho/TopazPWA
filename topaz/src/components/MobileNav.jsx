import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHome, FaBell, FaCog, FaHistory } from "react-icons/fa";

function MobileNav() {
  return (
    <div className="">
      <div className="contain-justify m-nav">
        <div className="nav">
          <Link to="/home">
            <FaHome size={30} color="black" />
          </Link>
          <span>Dashboard</span>
        </div>
        <div>
          <Link to="/history">
            <FaHistory size={30} color="black" />
            <span>History</span>
          </Link>
        </div>
        <div>
          <Link to="/notifications">
            <FaBell size={30} color="black" />
            <span>Alerts</span>
          </Link>
        </div>
        <div>
          <Link to="/settings">
            <FaCog size={30} color="black" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
