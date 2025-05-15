import React, { useEffect, useState } from 'react';
import img1 from "../assets/logo4.png";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-4 py-3 bg-white/10 backdrop-blur-md rounded-b-xl border-b border-white/30 shadow-md text-black font-bold text-[18px]">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={img1} alt="logo" className="w-16 h-16 rounded-full object-cover" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/About">About</Link>
          <Link to="/demo">Demo</Link>
          <Link to="/gift">Gift</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          <ShoppingBag className="cursor-pointer" />
          {token ? (
            <LogOut onClick={handleLogout} className="cursor-pointer" />
          ) : (
            <Link to="/register">Register</Link>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 z-[999] transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4 text-black font-semibold text-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/demo" onClick={() => setIsOpen(false)}>Demo</Link>
          <Link to="/gift" onClick={() => setIsOpen(false)}>Gift</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

          {/* Mobile Auth */}
          <div className="flex items-center gap-3 mt-3">
            <ShoppingBag />
            {token ? (
              <LogOut onClick={handleLogout} className="cursor-pointer" />
            ) : (
              <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
