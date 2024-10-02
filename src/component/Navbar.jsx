import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaUserPlus } from "react-icons/fa"; 
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const handleLogOut = () =>{
    localStorage.removeItem("isLoggedIn")
    alert("LogOut Successfully")
    navigate("/login")

  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-700 h-20 relative z-[2]">
      <div className="flex items-center justify-between h-full px-4 md:px-16">
        
        <Link to="/">
          <img className="h-12 w-12 md:h-16 md:w-16" src="/src/assets/Logo.png" alt="Logo" />
        </Link>

        
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
        </button>

        
        <ul
          className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 absolute md:static top-20 left-0 w-full bg-blue-700 md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <li className="flex flex-col md:flex-row gap-4 md:gap-16 text-lg md:text-xl font-semibold opacity-90">
            <Link
              className={`text-white hover:bg-orange-400 ${
                location.pathname === "/plans" ? "bg-orange-400" : ""
              } p-2 rounded-md`}
              to="/plans"
              onClick={() => setIsOpen(false)} 
            >
              Plans
            </Link>
            
            <Link
              className={`text-white hover:bg-orange-400 ${
                location.pathname === "/contact" ? "bg-orange-400" : ""
              } p-2 rounded-md`}
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              className={`text-white hover:bg-orange-400 ${
                location.pathname === "/aboutus" ? "bg-orange-400" : ""
              } p-2 rounded-md`}
              to="/aboutus"
              onClick={() => setIsOpen(false)}
            >
              About-Us
            </Link>
            <Link
              className={`text-white hover:bg-orange-400 ${
                location.pathname === "/updates" ? "bg-orange-400" : ""
              } p-2 rounded-md`}
              to="/updates"
              onClick={() => setIsOpen(false)}
            >
              Updates
            </Link>
            <Link
              className={`text-white hover:bg-orange-400 flex items-center gap-2 ${
                location.pathname === "/signup" ? "bg-orange-400" : ""
              } p-2 rounded-md`}
              to="/signup"
              onClick={() => setIsOpen(false)}
            >
              <FaUserPlus /> Sign-Up
            </Link>
            {isLoggedIn ? (
              <button className="text-white hover:bg-orange-400 p-2 rounded-md flex items-center gap-2" onClick={handleLogOut}> <CiLogout  className="font-extrabold"/>
LogOut</button>
            ):( <Link
              className={`text-white hover:bg-orange-400 flex items-center gap-2 ${
                location.pathname === "/login" ? "bg-orange-400" : ""
              } p-2 rounded-md`}
              to="/login"
              onClick={() => setIsOpen(false)}
            >
              <FaUser /> LogIn
            </Link>)}
           
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
