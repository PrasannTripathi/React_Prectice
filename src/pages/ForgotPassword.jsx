import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleForgotPassword = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-screen flex items-center justify-center px-4 md:px-32">
      <div className="bg-yellow-50 h-fit w-full max-w-lg p-6 rounded-lg">
        
        <div className="mb-6">
          <button onClick={handleForgotPassword} className="flex items-center">
            <IoMdArrowRoundBack className="text-xl text-blue-700" />
            <span className="ml-2 text-xl text-blue-700">Back</span>
          </button>
        </div>

        
        <div className="flex flex-col items-center gap-4">
          <img className="max-h-28" src="/src/assets/Logo.png" alt="Logo" />
          <p className="text-2xl font-semibold mb-4">Forgot Password</p>
        </div>

        
        <div className="flex flex-col gap-5">
          <label className="ml-2 text-lg md:text-xl" htmlFor="email">
            Email:
          </label>
          <div className="flex flex-col md:flex-row gap-4 mx-2">
            <input
              className="p-3 w-full md:flex-grow border-2 border-gray-500 outline-none rounded-lg"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="bg-blue-800 text-white px-6 py-3 rounded-lg w-full md:w-28"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>

        
        <div className="flex items-center justify-center my-8">
          <Link
            className="text-blue-800 text-xl md:text-2xl hover:underline"
            to="/login"
          >
            Login?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
