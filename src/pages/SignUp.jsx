import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validateInput = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const numberRegex =  /^\d{10}$/
    if (firstName === "") {
      newErrors.firstName = "First Name is Required";
    }
    if (lastName === "") {
      newErrors.lastName = "Last Name is Required";
    }
    if (number === "") {
      newErrors.number = "Mobile Number is Required";
    }else if (!numberRegex.test(number)){
      newErrors.number = "Number must be 10 digit"
    }
    if (email === "") {
      newErrors.email = "Email is Required";
    }else if(!emailRegex.test(email)){
      newErrors.email = "Invalid Email Format"
    }
    if (password === "") {
      newErrors.password = "Password is Required";
    }else if(password.length < 8){
      newErrors.password = "Password must be at least 8 charecter long"
    }
    
    if (confirmPassword === "") {
      newErrors.confirmPassword = "Confirm Password is Required";
    }else if(password !== confirmPassword){
      newErrors.confirmPassword = "Password do not match"
    }
    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!validateInput()) {
      return;
    }
    const user = { firstName, lastName, number, email, password, confirmPassword };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! You can login");

    console.log("Form submitted");
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen flex items-center justify-center px-4">
      <div className="h-fit w-[400px] bg-yellow-50 rounded-lg p-4">
        <div className="mb-4">
          <button onClick={() => navigate(-1)} className="flex items-center">
            <IoMdArrowRoundBack className="text-xl text-blue-700" />
            <span className="ml-2 text-lg text-blue-700">Back</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mb-4 gap-2">
          <img className="h-16" src="/src/assets/Logo.png" alt="" />
          <p className="text-xl mb-2">Register</p>
        </div>
        <form onSubmit={handleSignUp} className="grid grid-cols-2 gap-4 mx-4">
          <div>
            <input
              className="p-2 outline-none border border-gray-400 rounded-md w-full"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p className="text-red-500 text-xs">{error.firstName}</p>
          </div>
          <div>
            <input
              className="p-2 outline-none border border-gray-400 rounded-md w-full"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <p className="text-red-500 text-xs">{error.lastName}</p>
          </div>
          <div className="col-span-2">
            <input
              className="p-2 outline-none border border-gray-400 rounded-md w-full"
              type="text"
              placeholder="Mobile Number"
              value={number}
              maxLength={10}
              onChange={(e) => setNumber(e.target.value)}
            />
            <p className="text-red-500 text-xs">{error.number}</p>
          </div>
          <div className="col-span-2 flex gap-4">
            <input
              className="p-2 outline-none border border-gray-400 rounded-md w-full"
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" className="bg-blue-700 text-white w-20 h-10 rounded-md">
              Get OTP
            </button>
          </div>
          <div className="col-span-2">
            <p className="text-red-500 text-xs">{error.email}</p>
          </div>
          <div className="col-span-2">
            <input
              className="p-2 outline-none border border-gray-400 rounded-md w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs">{error.password}</p>
          </div>
          <div className="col-span-2">
            <input
              className="p-2 outline-none border border-gray-400 rounded-md w-full"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs">{error.confirmPassword}</p>
          </div>
          <div className="col-span-2 flex justify-center mt-4">
            <button type="submit" className="bg-blue-700 p-2 rounded-md w-28 text-white">
              Register
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2 items-center justify-center mt-4">
          <Link className="hover:underline text-blue-800 text-sm" to="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
