import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Utillity/AuthProvider';
import { FaEye,FaEyeSlash } from "react-icons/fa6";
import DynamicTitle from '../components/DynamicTitle';

const LogIn = () => {
     const {googleLogIn,setUser,logIn} = useContext(AuthContext);
     const [error,setError]= useState('');
     const [showPass, setShowPass] = useState(false);
     const [emailGet, setEmailGet] = useState("");
    

     
     
     const location = useLocation();
     const navigate= useNavigate();
     console.log(location)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const  password = e.target.password.value;
        setError('');

        logIn(email,password)
        .then(result=>{
            const userInfo = result.user;
            console.log(userInfo);
            setUser(userInfo)
            navigate(location?.state ? location?.state : '/');
        })
        .catch((err) => {
            const errCode = err.code;
            const errMessage = err.message;
            console.log(errCode,errMessage);
            setError(errCode);
          });
        

    }
    const onGoogleLogin =()=>{
        googleLogIn()
        .then(result=>{
            setUser(result.user)
            navigate(location?.state ? location?.state : '/');
        });
    }

//   const handleReset =()=>{
//    console.log(emailRef.current.value)
//   }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <DynamicTitle />
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Sign In to EcoTreck-Asia
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                       
                        name='email'
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            value={emailGet}
                            onChange={(e)=>setEmailGet(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mb-4 relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                        name='password'
                            type={showPass? 'text':'password'}
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                         <button type='button' onClick={()=> setShowPass(!showPass)} className='btn btn-ghost btn-xs absolute right-[10px] top-12 '  > {showPass ?<FaEyeSlash size={20} /> :<FaEye size={20}  />}</button>
                        <label  className="label">
                            <Link
                                to='/forget-pass'
                                state={{emailGet}}
                                className="label-text-alt link link-hover text-blue-600"
                            >
                                Forgot password?
                            </Link>
                        </label>
                        
                        {
                            error && <small className='text-red-700'>{error}</small>
                        }
                        
                    </div>
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn text-base font-semibold bg-[#8BBF44] border-[#8BBF44] hover:bg-[#8BBF44] hover:border-[#8BBF44] text-white"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don’t have an account?{' '}
                        <Link
                            to="/register"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
                <div className="divider">OR</div>
                <div className="flex justify-center">
                    <button onClick={onGoogleLogin} className="btn btn-outline  border-gray-300 text-gray-600 flex items-center gap-2  text-base font-semibold">
                        <FcGoogle  />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
