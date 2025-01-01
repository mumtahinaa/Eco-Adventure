import React from 'react';
import Banner from '../components/Banner';
import EcoAd from '../components/EcoAd';
import { useLoaderData } from 'react-router-dom';
import WhyChoose from '../components/WhyChoose';

const Home = () => {
    const adventures = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
           <EcoAd adventures={adventures}></EcoAd>
          <div className='bg-gray-100'> <WhyChoose ></WhyChoose></div>
        </div>
    );
};

export default Home;