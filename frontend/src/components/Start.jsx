import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="bg-black mt-5 text-white flex flex-col sm:flex-row gap-4 sm:gap-20 opacity-85 py-12 px-6 sm:px-10 justify-center items-center text-center sm:text-left">
      <p className="font-bold mr-2  text-2xl sm:text-3xl max-w-md">
        Start a new photo-project with US?
      </p>
      <Link to="/contact" aria-label="Contact Us">
        <button className="border cursor-pointer border-white py-3 px-6 sm:py-4 sm:px-10 text-base sm:text-lg hover:bg-white hover:text-black transition duration-300">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Start;
