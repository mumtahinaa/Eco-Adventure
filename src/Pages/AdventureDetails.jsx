
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCheckCircle, FaMapMarkerAlt, FaDollarSign, FaClock } from "react-icons/fa";

const AdventureDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [adventure, setAdventure] = useState(null);
   const [modalOpen, setModalOpen]= useState(false);
//   const [Modal, setModal] = useState(false);
  console.log(adventure);

  const handleAction = () => {

    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const startTime = 10* 60; 
    const endTime = 20 * 60; 
    const currentTimeInMinutes = currentHours * 60 + currentMinutes;

    
    if (currentTimeInMinutes >= startTime && currentTimeInMinutes <= endTime) {
      
      window.open("https://meet.google.com/vtn-zhoy-ysp");
    } else {

       setModalOpen(true);
    }
}

  useEffect(() => {
    const singleEco = data.find(
      (ecoAdventure) => ecoAdventure.id === parseInt(id)
    );
    setAdventure(singleEco);
  }, [data, id]);

  if (!adventure) {
    return <p>Loading...</p>;
  }


  

  const {
    adventureTitle,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = adventure;

  return (
    <div className="mx-auto">
      
      <div className="relative  overflow-hidden shadow-lg ">
        <img
          src={image}
          alt={adventureTitle}
          className="w-full h-96 object-fill"
        />
        <div className="absolute  inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center p-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center ">
           {adventureTitle}
          </h1>
        </div>
      </div>

     
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto">
       
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600">{shortDescription}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Eco-Friendly Features
            </h3>
            <ul className="list-none space-y-2">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-600 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Included Items
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              {includedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Details</h2>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="text-green-600 mr-3" />
            <span>
              <strong>Location:</strong> {location}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock className="text-green-600 mr-3" />
            <span>
              <strong>Duration:</strong> {duration}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaDollarSign className="text-green-600 mr-3" />
            <span>
              <strong>Cost:</strong> ${adventureCost}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-600 mr-3">🧭</span>
            <span>
              <strong>Adventure Level:</strong> {adventureLevel}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-600 mr-3">👥</span>
            <span>
              <strong>Max Group Size:</strong> {maxGroupSize}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-600 mr-3">📅</span>
            <span>
              <strong>Booking Availability:</strong>{" "}
              {bookingAvailability ? "Available" : "Not Available"}
            </span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Special Instructions
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              {specialInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>  

      <div className="mt-10 flex justify-center">
        <button  className="btn bg-[#8BBF44] text-white hover:bg-[#94cb47] px-6 py-3 rounded-lg text-lg font-semibold"onClick={handleAction}>
        Talk with Expert
        </button>

      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      {modalOpen && (
        <div>
          <input type="checkbox" id="consultation-modal" className="modal-toggle" checked />
          <div className="modal">
            <div className="modal-box">
              <h2 className="font-bold text-lg">Consultation Time</h2>
              <p className="py-4">
                Our consultation hours are from <strong>10:00 AM</strong> to
                <strong> 8:00 PM</strong>. Please check back during those hours.
              </p>
              <div className="modal-action">
                <label
                  htmlFor="consultation-modal"
                  className="btn bg-[#8BBF44] text-white hover:bg-[#94cb47] px-6  rounded-lg text-lg font-semibold"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
  };

export default AdventureDetails;
