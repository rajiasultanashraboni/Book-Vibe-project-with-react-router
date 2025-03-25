import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "px-4 py-2 border-2 border-green-500 rounded-lg"
            : "px-4 py-2"
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to='/booklist' className={({ isActive }) =>
          isActive
            ? "px-4 py-2 border-2 border-green-500 rounded-lg"
            : "px-4 py-2"
        }>Listed Books</NavLink>
      </li>
      <li>
        <a>Pages to read</a>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="w-[80%] mx-auto navbar ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">Boi poka</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a className="btn bg-cyan-400 text-white">Sign In</a>
          <a className="btn bg-green-500 text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
