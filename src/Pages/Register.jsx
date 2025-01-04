import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../Utillity/AuthProvider';
import { FaEye,FaEyeSlash } from "react-icons/fa6";

const Register = () => {
const {register,setUser,googleLogIn}= useContext(AuthContext);
const [errorMessage,setErrorMessage]= useState('')
const [showPass, setShowPass] = useState(false);

const navigate = useNavigate();
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const  password = e.target.password.value;
        const name = e.target.name.value;
        const photo =e.target.photo.value;
        console.log(email,password,name,photo);

        setErrorMessage('');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
        setErrorMessage("(**Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.)");
        return; 
    }

        register(email,password)
         .then(result=> {
            const userInfo = result.user;
            setUser(userInfo)
            console.log(userInfo)
            navigate('/');
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
            setErrorMessage(errorCode);
        });

    }

    const onGoogleLogin =()=>{
        googleLogIn()
        .then(result=>{
            setUser(result.user)
            navigate('/');
        });
    }

   
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Register for EcoTrek-Asia
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                        name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                        name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                        name="photo"
                            type="url"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control mb-4 relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                        name="password"
                            type={showPass? 'text':'password'}
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <button type='button' onClick={()=> setShowPass(!showPass)} className='btn btn-ghost btn-xs absolute right-[10px] top-12 '  > {showPass ?<FaEyeSlash size={20} /> :<FaEye size={20}  />}</button>
                    </div>
                    
                    {
                        errorMessage && <small className='text-red-700'>{errorMessage}</small>
                    }
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn text-base font-semibold bg-[#8BBF44] border-[#8BBF44] hover:bg-[#8BBF44] hover:border-[#8BBF44] text-white"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
                <div className="divider">OR</div>
                <div className="flex justify-center">
                    <button onClick={onGoogleLogin}  className="btn btn-outline text-base font-semibold border-gray-300 text-gray-600 flex items-center gap-2">
                        <FcGoogle  />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
