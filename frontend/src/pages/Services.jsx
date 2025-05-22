import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const  card =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525356/video8_bzplqk.mp4";
const  card2 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525356/video8_bzplqk.mp4";

const card3  = "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525333/video7_qfqhpm.mp4";
const  card4 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525328/video3_yogjgf.mp4";
const  card5 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525319/video1_x4yvxl.mp4";
const  card6 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525319/video1_x4yvxl.mp4";
const  card7 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525317/video4_l1neo5.mp4";

const card8 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525306/video6_xd6e4q.mp4";

const card9 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525291/video11_cn3iny.mp4";
const  card10 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525276/video2_njywoo.mp4";
const  card11 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525274/video5_fj7zur.mp4";
const  card12 =  "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525261/video12_w5hlq9.mp4";
import  { ShoppingBasket } from 'lucide-react';

// ✅ Replace this with your real Cloudinary video URL:
const card1 = "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525369/video9_q1c4ji.mp4";

const services = [
  'Easter',
  'Wedding E-Invitation',
  'Adult Birthday',
  'Kids Birthday',
  "Baby's New Born",
  'Greeting Cards',
  'Flyer',
  'Parties',
  'Business',
  'Reception',
];

const products = [
  { id: 1, title: 'Wedding Invitation (WD-2)', price: '₹150', video: card, alt: 'Wedding Invitation WD-1' },
  { id: 2, title: 'Wedding Invitation (WD-1)', price: '₹200', video: card1, alt: 'Wedding Invitation WD-1' },
  { id: 3, title: 'Wedding Invitation (WD-5)', price: '₹1', video: card2, alt: 'Wedding Invitation WD-1' },
  { id: 4, title: 'Wedding Invitation (WD-7)', price: '₹300', video: card3, alt: 'Wedding Invitation WD-1' },
  { id: 5, title: 'Wedding Invitation (WD-9)', price: '₹350', video: card4, alt: 'Wedding Invitation WD-1' },
  { id: 6, title: 'Wedding Invitation (WD-12)', price: '₹400', video: card5, alt: 'Wedding Invitation WD-1' },
  { id: 7, title: 'Wedding Invitation (WD-10)', price: '₹450', video: card6, alt: 'Wedding Invitation WD-1' },
  { id: 8, title: 'Wedding Invitation (WD-9)', price: '₹500', video: card7, alt: 'Wedding Invitation WD-1' },
  { id: 9, title: 'Wedding Invitation (WD-8)', price: '₹550', video: card8, alt: 'Wedding Invitation WD-1' },
  { id: 10, title: 'Wedding Invitation (WD-3)', price: '₹600', video: card9, alt: 'Wedding Invitation WD-1' },
  { id: 11, title: 'Wedding Invitation (WD-6)', price: '₹650', video: card10, alt: 'Wedding Invitation WD-1' },
  { id: 12, title: 'Wedding Invitation (WD-15)', price: '₹700', video: card11, alt: 'Wedding Invitation WD-1' },
  { id: 13, title: 'Wedding Invitation (WD-14)', price: '₹750', video: card12, alt: 'Wedding Invitation WD-1' }
];

const ProductCard = ({ id, title, price, video, alt }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <video
      src={video}
      className="w-full max-w-[250px] h-auto object-cover rounded-md"
      autoPlay
      loop
      muted
      alt={alt}
    />
    <div className="flex flex-col items-center mt-3">
      <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      <h2 className="text-xl font-semibold text-gray-900">{price}</h2>
    </div>
    <div className="flex flex-row items-center mt-3">
      <Link to={`/form/${id}`}>
        <button
          className="mt-4 w-56 flex flex-row justify-center gap-2 px-4 py-3 bg-pink-500 text-white rounded-md cursor-pointer hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          Buy Now <ShoppingBasket />
        </button>
      </Link>
    </div>
  </div>
);

const Services = () => {
  const [selectedPrice, setSelectedPrice] = useState('all');

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedPrice === 'all') return true;
    const priceNum = parseInt(product.price.replace('₹', ''));
    if (selectedPrice === 'low') return priceNum < 200;
    if (selectedPrice === 'medium') return priceNum >= 200 && priceNum <= 500;
    if (selectedPrice === 'high') return priceNum > 500;
    return true;
  });

  return (
    <div className="p-5">
      {/* Services Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mt-20 px-4 text-center">
        {services.map((service, index) => (
          <Link
            to={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="text-gray-700 text-base sm:text-lg font-medium hover:text-blue-500 hover:scale-105 transition-all duration-300"
          >
            {service}
          </Link>
        ))}
      </div>

      <hr className="mt-10 border-gray-200" />

      {/* Hero Section */}
      <div className="relative mt-10">
        <img
          src="https://images.pexels.com/photos/450066/pexels-photo-450066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[300px] sm:h-[400px] object-cover"
          alt="Online Invitations"
        />
        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-white text-center px-2 w-full max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">Online Invitations</h1>
        </div>
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 text-center max-w-2xl px-4">
          <p className="text-white text-sm sm:text-lg md:text-2xl mt-5">
            We make online invitations that create real connections for all the moments that matter. Host better parties with confidence.
          </p>
        </div>
        <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-center">
          <button className="bg-pink-500 px-6 sm:px-10 py-2 sm:py-3 text-white rounded-md hover:bg-pink-700 transition-colors">
            Check Out Now!
          </button>
        </div>
      </div>

      {/* Filter by Price Section */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
        <label htmlFor="price" className="text-lg font-medium">
          Filter by Price:
        </label>
        <select
          id="price"
          value={selectedPrice}
          onChange={handlePriceChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          <option value="all">All Prices</option>
          <option value="low">Low (Under ₹200)</option>
          <option value="medium">Medium (₹200 - ₹500)</option>
          <option value="high">High (Over ₹500)</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-4 mt-10 mb-20">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            video={product.video}
            alt={product.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
