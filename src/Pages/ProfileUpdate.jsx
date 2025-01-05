import React, { useContext, useState } from 'react';
import { AuthContext } from '../Utillity/AuthProvider';
import { useNavigate } from 'react-router-dom';
import {  toast, ToastContainer } from 'react-toastify';
import DynamicTitle from '../components/DynamicTitle';

const ProfileUpdate = () => {
    const {handleUpdatedData}= useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const handleUpdate =(e)=>{
              e.preventDefault();
              const name = e.target.name.value;
              const photo =e.target.photo.value;
              console.log(name,photo);
               setError('');
              if(name.length <5){
                setError("**name should be more than 5 character");
                return;
              }

              handleUpdatedData({displayName:name,photoURL:photo})
              .then(()=>{
                toast.success("Profile Updated");

                navigate('/profile');
                

              })
              .catch((err)=>{
                console.log(err)
              })


    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <DynamicTitle />
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                Update Your Profile
            </h1>
            <form onSubmit={handleUpdate}>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Enter your name"
                        className="input input-bordered"
                        required
                    />
                    {
                        error && <small className='text-xs text-red-700'>{error}</small>
                    }
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="url"
                        name='photo'
                        placeholder="Enter photo URL"
                        className="input input-bordered"
                        
                    />
                </div>
                {/* {error && <p className="text-red-600 text-sm">{error}</p>}
                {success && <p className="text-green-600 text-sm">{success}</p>} */}
                <div className="form-control mt-6">
                    <button
                        type="submit"
                        className="btn text-base font-semibold bg-[#8BBF44] border-[#8BBF44] hover:bg-[#8BBF44] hover:border-[#8BBF44] text-white"
                    >
                        Update Information
                    </button>
                </div>
            </form>
        </div>
        <ToastContainer/>
    </div>
    );
};

export default ProfileUpdate;