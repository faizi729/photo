import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo4.png"; // Make sure this path is correct

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500); // 2 seconds loader
    return () => clearTimeout(timeout);
  }, [location.pathname]); // triggers on route change

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        <img
          src={logo}
          alt="Loading..."
          className="w-24 h-24 animate-pulse"
        />
      </div>
    );
  }

  return children;
}
