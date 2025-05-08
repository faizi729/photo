import React, { useEffect, useState } from 'react';
import img1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);

  // Sync token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 
        bg-white/10 backdrop-blur-md rounded-b-xl 
        border-b border-white/30 shadow-md text-black font-bold text-[20px]">

        {/* Logo */}
        <div className="ml-2">
          <Link to="/">
          <img src={img1} alt="logo" className="w-30 h-15 rounded-full" />
          </Link>
        </div>

        {/* Main Links */}
        <div className="hidden mt-3 md:flex gap-10 ml-10">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/About">About</Link>
          <Link to="/demo">Demo</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Auth Options */}
        {token ? (
          <div className="hidden md:flex items-center gap-3 mr-2">
            <ShoppingBag />
            <LogOut onClick={handleLogout} className="cursor-pointer" />
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3 mr-2">
            <ShoppingBag />
            <Link to="/register">Register</Link>
          </div>
        )}

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center mr-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-4 right-4 bg-white/10 backdrop-blur-lg rounded-xl 
          shadow-md p-4 flex flex-col gap-4 md:hidden z-40 text-black border border-white/20">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/demo" onClick={() => setIsOpen(false)}>Demo</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

          {token ? (
            <div className="flex items-center gap-2 mt-2">
              <ShoppingBag />
              <LogOut
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="cursor-pointer"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2 mt-2">
              <ShoppingBag />
              <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
