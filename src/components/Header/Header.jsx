import React, { useState } from 'react';
import './Header.css'
import logo from '../../../public/Logo.svg';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'
<Bars3Icon className="h-6 w-6 text-blue-500" />

const Header = () => {
  const [open , setOpen] = useState();
  return (
    <div>
      <div className='lg:container mx-auto  p-2 font-semibold lg:text-white ema-jon-nav-bar'>
            <div className='flex flex-row-reverse items-center justify-between'>
                <button onClick={() => setOpen(!open)} className='lg:hidden'>
                    <span>{open === true ? 
                        <XMarkIcon className="h-10 w-10 text-white" /> : 
                        <Bars3Icon className="h-10 w-10 text-white" />}
                    </span>
                </button>
                <img className='lg:hidden' src={logo} alt="" />               
            </div>
            <nav className='flex items-center justify-between'>
                <img src={logo} className='hidden lg:block' />
                <ul className={`menu-bar-item z-50 rounded-l-md lg:flex gap-5 text-xl absolute lg:static duration-500 ${open ? `top-14 right-0` : `-top-40 right-0`}`}>
                  <li><a href='/#'>Order</a></li>
                  <li><a href='/#'>Order Review</a></li>
                  <li><a href='/#'>Manage Inventory</a></li>
                  <li><a href='/#'>Login</a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Header;