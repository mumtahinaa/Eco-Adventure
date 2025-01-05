import React from 'react';
import { Link } from 'react-router-dom';

const WhyChoose = () => {
    return (
        <div className=" py-12 w-11/12 mx-auto">
  <div className="container mx-auto px-6 md:px-12 text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-[#8BBF44] mb-6">
      Why Choose Eco-Trek Asia?
    </h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto">
      Eco-Trek Asia is your ultimate destination for eco-friendly travel
      experiences. We craft sustainable adventures that let you explore
      breathtaking locations while preserving their natural beauty. With us,
      you don’t just travel—you make a positive impact.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#8BBF44]">Sustainability Focused</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Every trip is planned with eco-conscious practices to reduce environmental impact.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#8BBF44]">Expert Local Guides</h3>
        <p className="text-gray-600 mt-2 text-sm ">
          Our guides are knowledgeable locals who ensure safety and authentic cultural experiences.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#8BBF44]">Tailored Experiences</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Adventures designed for beginners and seasoned travelers alike.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#8BBF44]">Small Group Sizes</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Focused on intimate, personalized, and less intrusive experiences.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#8BBF44]">Eco-Friendly Practices</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Plastic-free policies, renewable energy use, and support for local eco-projects.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-[#8BBF44]">Award-Winning Service</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Recognized globally for sustainable travel excellence.
        </p>
      </div>
    </div>

   <Link to='/about'> <button className="mt-8 px-6 py-3 btn text-base font-semibold bg-[#8BBF44] text-white hover:bg-[#94cb47]">
      Learn More About Our Mission
    </button></Link>
  </div>
</div>

    );
};

export default WhyChoose;