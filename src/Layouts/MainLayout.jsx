import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='font-poppins '>
           <div className=' mx-auto  bg-blue-950'> 
           <Navbar className="w-11/12 mx-auto"></Navbar> 
           </div>
          <div className='min-h-[calc(100vh-408px)]'>
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;