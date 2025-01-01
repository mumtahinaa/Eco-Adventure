import React from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";



const Navbar = () => {
    return (
        <div className="navbar bg-blue-950">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-950 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
              <NavLink to='/' className='lg:text-white lg:text-lg lg:font-normal text-base font-normal  text-white '>Home</NavLink>
          <NavLink to='/adventure' className='lg:text-white lg:text-lg lg:font-normal text-base font-normal  text-white'>Adventures</NavLink>
        
          <NavLink to='/about' className='lg:text-white lg:text-lg lg:font-normal text-base font-normal text-white'>About Us</NavLink>
          <NavLink to='/myprofile' className='lg:text-white lg:text-lg lg:font-normal text-base font-normal text-white'>My Profile</NavLink>
            </ul>
          </div>
          <div><FaRegUserCircle className='text-gray-300 w-10 h-10 lg:hidden block' /></div>
          <div className='lg:px-0 lg:block hidden'><img src={logo} alt="" /></div>
        </div>
        <div className='navbar-center lg:hidden block'>
        <div className='lg:px-0 lg:hidden block'><img src={logo} alt="" /></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center lg:gap-5">
          <NavLink to='/' className='lg:text-white lg:text-lg lg:font-normal '>Home</NavLink>
          <NavLink to='/adventure' className='lg:text-white lg:text-lg lg:font-normal '>Adventures</NavLink>
        
          <NavLink to='/about' className='lg:text-white lg:text-lg lg:font-normal '>About Us</NavLink>
          <NavLink to='/myprofile' className='lg:text-white lg:text-lg lg:font-normal '>My Profile</NavLink>
          </ul>
        </div>
        <div className="navbar-end lg:mr-8 lg:gap-3">
        <div><FaRegUserCircle className='text-gray-300 w-10 h-10 lg:block hidden' /></div>
          <Link to='/login' ><button className='btn text-base font-semibold bg-[#8BBF44] border-[#8BBF44]  hover:bg-[#8BBF44] hover:border-[#8BBF44]  text-white'>LogIn</button></Link>
          

        </div>
      </div>
    );
};

export default Navbar;