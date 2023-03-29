import React from 'react';
import './Header.css'
import logo from '../../../public/Logo.svg';

const Header = () => {
  return (
    <div>
      <div>
            <div className="navbar text-white ema-jon-nav-bar">
              <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    <img src={logo} />
                </a>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li><a href='/#'>Order</a></li>
                  <li><a href='/#'>Order Review</a></li>
                  <li><a href='/#'>Manage Inventory</a></li>
                  <li><a href='/#'>Login</a></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Header;