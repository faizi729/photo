import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("https://photo-n1fe.onrender.com/api/users/login", formData);
      localStorage.setItem("token", res.data.token);
      
      navigate("/", { replace: true });
      window.location.reload(); // ✅ Force page reload on redirect
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };
  

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#111828] flex flex-col mt-32 mb-20 w-[350px] rounded-3xl h-[500px]">
        <div className="flex mt-5 justify-center">
          <h1 className="text-white font-light text-[25px]">Login</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-10 ml-10 flex flex-col gap-2">
            <label htmlFor="email" className="text-[#C9C6C6] text-xl">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-[#C9C6C6] bg-[#fff] px-5 w-[90%] py-3 rounded-md"
            />
          </div>

          <div className="mt-5 ml-10 flex flex-col gap-2">
            <label htmlFor="password" className="text-[#C9C6C6] text-xl">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-[#C9C6C6] bg-[#fff] px-5 w-[90%] py-3 rounded-md"
            />
          </div>

          <div className="bg-[#A78BFA] mx-auto mt-8 w-[90%] cursor-pointer rounded-md">
            <button
              type="submit"
              className="w-full py-3 text-white cursor-pointer font-semibold"
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-center gap-2 text-white mt-5">
            <p>Don't have an account?</p>
            <Link to="/register" className="text-[#A78BFA] underline">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
