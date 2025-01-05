import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-6/12 mx-auto flex items-center flex-col  mt-64 gap-4">
        <h1 className=" text-2xl"><span className="text-6xl font-extrabold mr-4">404 </span>Page not Found!</h1>
        <p className="text-base font-normal text-gray-500 ml-60 ">The requested page was not found</p>
        <button onClick={()=>navigate('/')} 
                            type="button"
                            className="btn text-base font-semibold bg-[#8BBF44] border-[#8BBF44] hover:bg-[#8BBF44] hover:border-[#8BBF44] text-white"
                        >
                            Go Back
                        </button>
     </div>
    );
};

export default ErrorPage;