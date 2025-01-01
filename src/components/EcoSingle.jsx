import React from 'react';
import { useNavigate } from 'react-router-dom';

const EcoSingle = ({adventure}) => {
    const {id,image,adventureTitle ,ecoFriendlyFeatures } =adventure;
    const navigate =useNavigate()

    const handleExplore =()=>{
        navigate(`/viewDetails/${id}`);
    }
    return (
        
           <div className="card w-full  bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ">
      <figure>
        <img
          src={image}
          alt={adventureTitle}
          className="object-cover w-full h-64"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title text-xl font-semibold text-gray-800">{adventureTitle}</h2>
        <ul className="text-sm text-gray-600 mt-2">
          {ecoFriendlyFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> {feature}
            </li>
          ))}
        </ul>
        <div className="card-actions mt-4 justify-end">
          <button onClick={handleExplore}  className="btn text-base font-semibold bg-[#8BBF44] text-white hover:bg-[#94cb47]">
            Explore Now
          </button>
        </div>
      </div>
    </div>
 
       
    );
};

export default EcoSingle;