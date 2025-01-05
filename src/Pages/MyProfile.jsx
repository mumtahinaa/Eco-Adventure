import React, { useContext } from 'react';
import { AuthContext } from '../Utillity/AuthProvider';
import { Link } from 'react-router-dom';
import DynamicTitle from '../components/DynamicTitle';

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    const registeredAdventures = [
        { name: "Diving in Raja Ampat", date: "2025-02-15", status: "Confirmed" },
        { name: "Cultural and Eco-Tour in Bhutan", date: "2025-03-10", status: "Pending" },
        { name: "Wildlife Safari in Borneo", date: "2025-04-05", status: "Completed" },
    ];

    return (
        <div className="min-h-screen  flex items-center justify-center">
              <DynamicTitle/>
            <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center mb-6 text-[#8BBF44]">
                    Welcome to Your Eco Adventure, {user?.displayName || 'Explorer'}!
                </h1>
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={user?.photoURL || 'https://via.placeholder.com/150'}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-4 border-[#8BBF44] shadow-lg mb-4"
                    />
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-700">Name: {user?.displayName || 'N/A'}</p>
                        <p className="text-lg font-medium text-gray-700">Email: {user?.email || 'N/A'}</p>
                    </div>
                    <Link
                        to="/update-pro"
                        className="mt-4 btn text-base font-semibold bg-[#8BBF44] border-[#8BBF44] hover:bg-[#8BBF44] hover:border-[#8BBF44] text-white"
                    >
                        Update Profile
                    </Link>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-[#8BBF44] mb-4">Your Adventures</h2>
                    <div className="space-y-4">
                        {registeredAdventures.map((adventure, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
                            >
                                <div>
                                    <p className="text-lg font-medium text-gray-700">{adventure.name}</p>
                                    <p className="text-sm text-gray-500">Date: {adventure.date}</p>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        adventure.status === 'Completed'
                                            ? 'bg-green-200 text-green-700'
                                            : adventure.status === 'Confirmed'
                                            ? 'bg-blue-200 text-blue-700'
                                            : 'bg-yellow-200 text-yellow-700'
                                    }`}
                                >
                                    {adventure.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
