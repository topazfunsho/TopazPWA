import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";

function MobileNav() {
  return (
    <div className="">
      <div className="contain-justify m-nav">
        <div>
          <Link to="/home">
            <FaHome size={30} color="black"/>
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <FaUser size={30} color="black" />
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <FaUser size={30} color="black" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
