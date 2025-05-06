import { Link } from "react-router-dom"

export default function Footer() {
    return (
      <footer className="bg-blue-700 text-gray-700">
        {/* Newsletter Section */}
        <div className="relative bg-white shadow-lg rounded-t-lg -mt-10 max-w-5xl mx-auto p-8 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Subscribe Newsletters</h2>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-md px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 rounded-r-md hover:bg-blue-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>
  
        {/* Links Section */}
        <div className="mt-12 border-t pt-8 pb-4">
          <div className="flex flex-col text-white md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
            {/* Navigation Links */}
            <div className="flex space-x-8 mb-6 md:mb-0">
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/demo">Demo</Link>
            </div>
  
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-gray-900"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-gray-900"><i className="fab fa-vimeo-v"></i></a>
              <a href="#" className="text-white hover:text-gray-900"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border-t text-white pt-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 text-sm">
            <p>© 2025 Yamya Software Solutions. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <img src="https://cdn-icons-gif.flaticon.com/6416/6416394.gif" className="w-10" alt="LFT Logo" />
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  