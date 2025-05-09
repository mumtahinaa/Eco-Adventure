import React from 'react';
import image from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";



const Footer = () => {
    return (
       <div className='mx-auto bg-blue-950'>
         <footer className="footer w-11/12  mx-auto lg:place-items-center md:place-items-center justify-between  bg-blue-950 text-neutral-content p-10 ">
  <aside>
   <img src={image} alt="logo" className='-ml-8' />
    <p className='text-sm text-white w-80'>
      Eco-Trek Asia Ltd.
      <br />
      Your gateway to sustainable adventures and unforgettable eco-friendly experiences across Asia.
    </p>
  </aside>
  <nav className="grid  gap-4">
    <h6 class="footer-title">Services</h6>
    <a href='/about' className="link link-hover">About us</a>
    <a href='/adventure' className="link link-hover">Adventures</a>
    <a href='/profile'className="link link-hover">Profile</a>
  </nav>
  
  <div className='flex flex-col place-items-start'>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href='https://x.com/afrin_mumtahina'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a href='https://www.linkedin.com/in/mumtahina-afrin/'>
      <FaLinkedin  size={26}/>
      </a>
      <a href='https://github.com/mumtahinaa/'>
      <IoLogoGithub size={28} />

      </a>
    </div>
  </div>
</footer>
       </div>
    );
};

export default Footer;