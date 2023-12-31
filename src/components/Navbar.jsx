import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-12 shadow-md ">
      <Link to="/">
        <h2 className="font-semibold text-2xl tracking-wide ">Logo</h2>
      </Link>
    </nav>
  );
};

export default Navbar;
