import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
      });
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#111828] flex flex-col mt-32 mb-20 w-[350px] rounded-3xl h-[600px]">
        <div className="flex mt-5 justify-center">
          <h1 className="text-white font-light text-[25px]">Registration</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {["username", "email", "password", "confirmPassword"].map((field) => (
            <div key={field} className="mt-5 ml-10 flex flex-col gap-2">
              <label
                htmlFor={field}
                className="text-[#C9C6C6] text-xl capitalize"
              >
                {field === "confirmPassword" ? "Confirm Password" : field}
              </label>
              <input
                id={field}
                type={field.includes("password") ? "password" : "password"}
                value={formData[field]}
                onChange={handleChange}
                className="border border-[#C9C6C6] px-5 w-[90%] py-3 rounded-md"
              />
            </div>
          ))}

          <div className="bg-[#A78BFA] mx-auto mt-6 w-[90%] cursor-pointer rounded-md">
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-2 text-white mt-2">
          <p>Already have an account?</p>
          <Link to="/login" className="text-[#A78BFA] underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
