import React, { useState } from "react";
import "./Header.css";
import logo from "../../../public/Logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
<Bars3Icon className="h-6 w-6 text-blue-500" />;

const Header = () => {
  const [open, setOpen] = useState();
  return (
    <div>
      <div className="lg:container mx-auto  p-2 lg:text-white ema-jon-nav-bar">
        <div className="flex flex-row-reverse items-center justify-between">
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <span>
              {open === true ? (
                <XMarkIcon className="h-10 w-10 text-white" />
              ) : (
                <Bars3Icon className="h-10 w-10 text-white" />
              )}
            </span>
          </button>
          <img className="lg:hidden" src={logo} alt="" />
        </div>
        <nav className="flex items-center justify-between">
          <img src={logo} className="hidden lg:block" />
          <ul
            className={`menu-bar-item z-50 rounded-bl-md lg:flex gap-5 text-xl absolute lg:static duration-500 ${
              open ? `top-14 right-0` : `-top-40 right-0`
            }`}
          >
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/orders">Orders </Link>
            </li>
            <li>
              <Link to="/inventory">Manage Inventory</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
