import React, { useState } from 'react';
import everest from '../assets/everestreck.png';
import mangrove from '../assets/mangrove.jpg';
import safari from '../assets/safari_LE_.jpg';
import 'animate.css';

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(1); // Track the active slide

    const handleSlideChange = (newSlide) => {
        setActiveSlide(newSlide);
    };

    return (
        <div className="carousel w-full overflow-hidden">
            {/* Slide 1 */}
            <div
                id="slide1"
                className={`carousel-item relative w-full lg:h-[546px] ${
                    activeSlide === 1 ? 'block' : 'hidden'
                }`}
            >
                <img src={safari} className="w-full h-full object-fill relative" alt=''/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-20">
                    <h1
                        className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white ${
                            activeSlide === 1 ? 'animate__animated animate__fadeInLeftBig' : ''
                        }`}
                    >
                        Welcome to Eco-Adventures
                    </h1>
                    <p
                        className={`mt-4 text-sm md:text-lg lg:text-2xl font-medium text-gray-800 bg-[#8BBF44] px-6 py-2 ${
                            activeSlide === 1 ? 'animate__animated animate__fadeInLeftBig animate__delay-1s' : ''
                        }`}
                    >
                        Discover sustainable travel experiences tailored for eco-enthusiasts
                    </p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button onClick={() => handleSlideChange(3)} className="btn btn-circle">
                        ❮
                    </button>
                    <button onClick={() => handleSlideChange(2)} className="btn btn-circle">
                        ❯
                    </button>
                </div>
            </div>

            {/* Slide 2 */}
            <div
                id="slide2"
                className={`carousel-item relative w-full lg:lg:h-[546px] ${
                    activeSlide === 2 ? 'block' : 'hidden'
                }`}
            >
                <img src={everest} className="w-full h-full object-fill" alt='' />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-20">
                    <p
                        className={`text-sm md:text-lg lg:text-2xl font-medium text-gray-800 bg-[#8BBF44] px-6 py-2 ${
                            activeSlide === 2 ? 'animate__animated animate__fadeInLeftBig' : ''
                        }`}
                    >
                        Embark on a Journey Through the Himalayas and Sherpa Heartlands
                    </p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button onClick={() => handleSlideChange(1)} className="btn btn-circle">
                        ❮
                    </button>
                    <button onClick={() => handleSlideChange(3)} className="btn btn-circle">
                        ❯
                    </button>
                </div>
            </div>

            {/* Slide 3 */}
            <div
                id="slide3"
                className={`carousel-item relative w-full lg:h-[546px] ${
                    activeSlide === 3 ? 'block' : 'hidden'
                }`}
            >
                <img src={mangrove} className="w-full h-full object-fill" alt=''/>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-20">
                    <p
                        className={`text-sm md:text-lg lg:text-2xl font-medium text-gray-800 bg-[#8BBF44] px-6 py-2 ${
                            activeSlide === 3 ? 'animate__animated animate__fadeInLeftBig' : ''
                        }`}
                    >
                        Explore Untamed Wildlife and Navigate the Mystical Waterways
                    </p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button onClick={() => handleSlideChange(2)} className="btn btn-circle">
                        ❮
                    </button>
                    <button onClick={() => handleSlideChange(1)} className="btn btn-circle">
                        ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
