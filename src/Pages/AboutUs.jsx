import React from 'react';
import DynamicTitle from '../components/DynamicTitle';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
           <DynamicTitle />
           <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
       
        <div className="text-center">
          <h1 className="lg:text-4xl text-2xl md:text-4xl  font-bold text-[#8BBF44] mb-6">
            About Eco-Trek Asia
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            At Eco-Trek Asia, we strive to create sustainable travel experiences
            that leave a lasting positive impact on the environment and local
            communities. Our goal is to connect adventurers with the wonders of
            Asia while preserving its natural beauty and cultural heritage.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="lg:text-2xl md:text-xl text-xl font-semibold text-[#8BBF44]">Our Mission</h3>
            <p className="text-gray-600 mt-4 text-sm">
              To inspire eco-conscious travel and promote responsible tourism
              that safeguards the environment and empowers local communities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="lg:text-2xl md:text-xl text-xl font-semibold text-[#8BBF44]">Our Vision</h3>
            <p className="text-gray-600 mt-4 text-sm">
              A world where travel contributes to environmental conservation and
              cultural preservation, ensuring a sustainable future for generations
              to come.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="lg:text-2xl md:text-xl text-xl font-semibold text-[#8BBF44]">Our Values</h3>
            <p className="text-gray-600 mt-4  text-sm">
              Sustainability, community engagement, and a commitment to creating
              meaningful travel experiences that benefit everyone involved.
            </p>
          </div>
        </div>

      

       
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Join us in creating unforgettable memories while making the world a
            better place.
          </p>
        <Link to='/'>
        <button className="mt-6 px-6 py-3 btn text-base font-semibold bg-[#8BBF44] text-white hover:bg-[#94cb47]">
            Explore Our Adventures
          </button></Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AboutUs;