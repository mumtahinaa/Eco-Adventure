import React from 'react';
import EcoSingle from './EcoSingle';
import { Link } from 'react-router-dom';

const EcoAd = ({adventures}) => {
console.log(adventures)

    return (
        <div className='my-14 w-11/12 mx-auto px-6  md:px-0  ' >
            <h1 className='lg:text-4xl  text-[#8BBF44]  text-center text-2xl md:text-4xl font-bold'>Dive into Eco-Treasures of Asia</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-9  mt-8 mx-auto'>
                {
                  adventures.slice(0,6).map( adventure =>(<EcoSingle key={adventure.id} adventure={adventure}></EcoSingle>))
                }
                <Link to='/adventure'><button className="btn text-base font-semibold bg-[#8BBF44] text-white hover:bg-[#94cb47]">
           View All
          </button></Link>
            </div>
        </div>
    );
};

export default EcoAd;
