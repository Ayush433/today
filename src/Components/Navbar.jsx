import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import UserList from "./UserList";

function Navbar() {
  return (
    <>
      <nav className="bg-indigo-500 flex justify-between items-center p-2">
        <div className="flex items-center">
          <img src="" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-white text-xl font-medium white-space-nowrap">
            My App
          </span>
        </div>
        <div className="flex items-center">
          <NavLink to="/home" href="#home" className="text-white mx-8">
            Home
          </NavLink>
          <NavLink to="/about" href="#about" className="text-white mx-8">
            About
          </NavLink>
          <NavLink to="/contact" href="#contact" className="text-white mx-8">
            Contact
          </NavLink>
          <NavLink to="/todo" href="#contact" className="text-white mx-8">
            Todo List
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
