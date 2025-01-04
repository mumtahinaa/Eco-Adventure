import React from 'react';
import { useLocation } from 'react-router-dom';

const ForgetPass = () => {
    const location = useLocation();
    
    const email = location.state?.emailGet || '';
    console.log(email)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Reset Your Password
                </h1>
                <form>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            className="input input-bordered"
                            readOnly
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">New Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn text-base font-semibold bg-[#8BBF44] border-[#8BBF44] hover:bg-[#8BBF44] hover:border-[#8BBF44] text-white"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Remembered your password?{' '}
                        <a
                            href="/login"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;
