import React from 'react';

const UpdateProfile = () => {
    const handleUpdate =(e)=>{
              e.preventDefault();
              
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        // value={photoURL}
                        // onChange={(e) => setPhotoURL(e.target.value)}
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
    </div>
    );
};

export default UpdateProfile;