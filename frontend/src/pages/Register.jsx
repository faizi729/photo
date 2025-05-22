import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import registerLogo from "../assets/logo4.png";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });

    if (errors[id]) setErrors({ ...errors, [id]: undefined });
    if (formError) setFormError("");
    if (formSuccess) setFormSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};
    const { username, email, password, confirmPassword, agree } = formData;

    if (!username.trim()) newErrors.username = "Full Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Must be at least 8 characters";

    if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    if (!agree) newErrors.agree = "You must agree to the Terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const { username, email, password } = formData;

      const res = await axios.post("https://photo-n1fe.onrender.com/api/users/register", {
        username,
        email,
        password,
      });

      if (res.data.success) {
        setFormSuccess("Registration successful!");
        setFormError("");
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          agree: false,
        });
      } else {
        setFormError(res.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      setFormError(
        error.response?.data?.message || "Registration failed. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen   flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center">
          <img src={registerLogo} alt="IndianInvite" className="w-12 h-12" />
        </div>
        <h2 className="text-center text-xl font-semibold mt-2 text-pink-700">
          Your premier Indian event planning platform
        </h2>

        <h3 className="text-center text-xl font-semibold mt-6 text-pink-900">
          Create Account
        </h3>
        <p className="text-center text-gray-500 mb-4">
          Sign up to get started with IndianInvite
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name *</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Password *</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Confirm Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I agree to the{" "}
              <span className="text-pink-600 underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-pink-600 underline cursor-pointer">
                Privacy Policy
              </span>
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded"
          >
            Create Account
          </button>

          {formError && <p className="text-red-500 text-sm">{formError}</p>}
          {formSuccess && (
            <p className="text-green-600 text-sm">{formSuccess}</p>
          )}

           

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-600 font-medium">
              Sign In
            </Link>
          </p>
        </form>

        <div className="text-center mt-6 text-xs text-gray-500">
          © 2025 IndianInvite. All rights reserved.
        </div>

        <div className="text-center text-xs text-gray-500 flex justify-center gap-4 mt-2">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Help</a>
        </div>

        <div className="flex justify-center gap-3 mt-2 text-gray-500 text-xl">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Register;
