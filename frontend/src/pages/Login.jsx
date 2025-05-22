import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo4.png"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return alert("Please fill in all fields.");
    }
    setLoading(true);
    try {
      const res = await axios.post("https://photo-n1fe.onrender.com/api/users/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/", { replace: true });
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <img
            src={logo}
            alt="IndianInvite Logo"
            className="mx-auto h-12 w-12 mb-2"
          />
          <p className="text-sm text-gray-600 mb-6">
            Your premier Indian event planning platform
          </p>
        </div>

        <h2 className="text-xl font-semibold text-center text-pink-800 mb-1">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to continue to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-pink-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-semibold ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        

        <p className="text-center mt-5 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-500 hover:underline">
            Sign Up
          </Link>
        </p>

        <div className="text-center text-xs text-gray-400 mt-6">
          <p>© 2025 IndianInvite. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Help</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
