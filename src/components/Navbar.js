import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link style={{ padding: "5px", color: "gray" }} to="/">
        Home
      </Link>
      <Link style={{ padding: "5px", color: "gray" }} to="/profile">
        Profile
      </Link>
      <Link style={{ padding: "5px", color: "gray" }} to="/changecolor">
        Change Colour
      </Link>
    </nav>
  );
};

export default Navbar;
