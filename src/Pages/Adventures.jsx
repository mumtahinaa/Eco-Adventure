import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EcoSingle from '../components/EcoSingle';
import DynamicTitle from '../components/DynamicTitle';

const Adventures = () => {
    const adventure = useLoaderData();
    return (
      
        <div className='my-14 w-11/12 mx-auto px-6  md:px-0  ' >
              <DynamicTitle/>
        <h1 className='lg:text-4xl  text-[#8BBF44]  text-center text-2xl md:text-4xl font-bold'>Dive into Eco-Treasures of Asia</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-9  mt-8 mx-auto'>
            {
              adventure.map( adventure =>(<EcoSingle key={adventure.id} adventure={adventure}></EcoSingle>))
}
        </div>
    </div>
    );
};

export default Adventures;