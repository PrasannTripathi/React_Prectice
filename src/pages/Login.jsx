import React, { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({})
  
  const navigate = useNavigate();
  
  const validateInput = () =>{
    const newErrors = {}
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === "") {newErrors.email ="Email is Required"

    }else if(!emailRegex.test(email)){
      newErrors.email ="Invalid Email Format"
    }
    if(password === "") newErrors.password = "Password is Required"
    setError(newErrors)
    
    return Object.keys(newErrors).length === 0;
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    const storedData = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("isLoggedIn", true)
    
    if (storedData && storedData.email === email && storedData.password === password) {
      alert("Login successfully");
      navigate("/");
    } else {
      alert("Invalid email & password");
    }
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-green-500 h-screen flex items-center justify-center px-4 md:px-32'>
      <div className='bg-yellow-50 h-fit p-6 w-full max-w-md rounded-2xl'>
        
        <div className='mb-4'>
          <button onClick={() => navigate(-1)} className='flex items-center'>
            <IoMdArrowRoundBack className='text-xl text-blue-700' />
            <span className='ml-2 text-xl text-blue-700'>Back</span>
          </button>
        </div>

        <div className='flex flex-col items-center gap-6'>
          <img className='h-28' src="/src/assets/Logo.png" alt="Logo" />
          <p className='text-2xl font-semibold'>Login</p>

          <div className='w-full'>
            <form onSubmit={handleLogin}>
              <input
                className='p-3 w-full outline-none border-2 border-gray-500 rounded-2xl mb-4'
                type="text"
                placeholder='Email ID'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
              {error.email && 
              <p className='text-red-600 text-sm mb-4'>{error.email}</p>
              }
              <input
                className='p-3 w-full outline-none border-2 border-gray-500 rounded-2xl mb-4'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
              />
              {error.password && 
              <p className='text-red-600 text-sm mb-4'>{error.password}</p>
              }
              <button 
                type="submit" 
                className='bg-blue-800 text-white py-2 px-6 w-full md:w-24 font-bold rounded-lg'
              >
                Login
              </button>
            </form>
          </div>
        </div>

        <div className='flex items-center justify-end mb-4'>
          <Link className='text-blue-700 text-sm md:text-base' to="/forgotpassword">
            Forgot Password?
          </Link>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <p className='text-center'>
            <Link className='text-blue-800 hover:underline font-semibold' to="/signup">
              Create Account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
