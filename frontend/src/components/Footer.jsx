import React from 'react';

const Footer = () => {
  const customBgStyle = {
    backgroundColor: '#1A2526',
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
  };

  const customFont = {
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {/* Dark background section with clip-path */}
      <div className="w-full h-48" style={customBgStyle}></div>

      {/* Newsletter Subscription Section */}
       

      {/* Navigation Links and Social Media Icons */}
      <div className="w-full max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex flex-col sm:flex-row sm:space-x-8 w-full sm:w-auto">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium" style={customFont}>
            About us
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium" style={customFont}>
            Discover
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium" style={customFont}>
            Explore
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium" style={customFont}>
            Books
          </a>
        </div>
        <div className="flex space-x-4 w-full sm:w-auto justify-center sm:justify-start">
          <a href="#" className="text-gray-700 hover:text-gray-900">📘</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">🐦</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">📹</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">📧</a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 space-y-4 sm:space-y-0">
        <p className="text-gray-500 text-sm" style={customFont}>
          © 2025 Yamya Software. All rights reserved.
        </p>
        <div className="text-blue-600 font-bold border-2 border-blue-600 px-2 py-1" style={customFont}>
          YAMYA
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm" style={customFont}>Terms of Service</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm" style={customFont}>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
