import { useState } from "react";
import img1 from "../assets/image21.png";
import img2 from "../assets/image22.png";
import img3 from "../assets/image23.png";
import img4 from "../assets/image24.png";
 

import card from '../assets/mobile.png';
const Services = () => {

// Sample product data (replace with actual data source)
const products = [
  { id: 1, title: 'Wedding Invitation (WD-1)', price: '₹200', image: card, alt: 'Wedding Invitation WD-1' },
  { id: 2, title: 'Wedding Invitation (WD-2)', price: '₹250', image: card, alt: 'Wedding Invitation WD-2' },
  { id: 3, title: 'Wedding Invitation (WD-3)', price: '₹300', image: card, alt: 'Wedding Invitation WD-3' },
  { id: 4, title: 'Wedding Invitation (WD-4)', price: '₹350', image: card, alt: 'Wedding Invitation WD-4' },
 
];

// Reusable ProductCard component
const ProductCard = ({ title, price, image, alt }) => (
  <div className="flex flex-col items-center w-[300px] justify-center  p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <img src={image} alt={alt} className="w-[250px] h-auto object-cover rounded-md" />
    <div className="flex flex-col items-center mt-3">
      <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      <h2 className="text-xl font-semibold text-gray-900">{price}</h2>
    </div>
    <button
      className="mt-4 w-44 px-2 py-3 bg-amber-950 text-white rounded-md cursor-pointer hover:bg-amber-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600"
    >
      Add to Cart
    </button>
  </div>
);
  const videos = [
    { id: 1, src: "https://videos.pexels.com/video-files/29560142/12723934_360_640_60fps.mp4", alt: "Bridge" },
    { id: 2, src: "https://videos.pexels.com/video-files/31192424/13324326_360_640_25fps.mp4", alt: "Night Sky" },
    { id: 3, src: "https://videos.pexels.com/video-files/30958081/13235231_360_640_60fps.mp4", alt: "Mountains" },
    { id: 4, src: "https://videos.pexels.com/video-files/31644045/13481933_640_360_60fps.mp4", alt: "Rocks" },
  ];
  const [activeTab, setActiveTab] = useState("photo");

  return (
    <>
      <div className="flex justify-center font-bold text-[40px] mb-10">Services</div>

      <div className="flex flex-row justify-center gap-5">
        <div className="w-[80%] h-[850px] bg-gray-100 rounded-2xl p-6 shadow-[inset_6px_6px_12px_#d1d5db,_inset_-6px_-6px_12px_#ffffff] overflow-hidden">
          
          {/* TAB BUTTONS */}
          <div className="flex justify-center gap-8 mb-10">
            <button
              onClick={() => setActiveTab("photo")}
              className={`px-6 py-2 rounded-full text-lg font-medium ${
                activeTab === "photo"
                  ? "bg-gray-300 text-black shadow-inner"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Photo
            </button>
            <button
              onClick={() => setActiveTab("invitation")}
              className={`px-6 py-2 rounded-full text-lg font-medium ${
                activeTab === "invitation"
                  ? "bg-gray-300 text-black shadow-inner"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              E-Invitation
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-6 py-2 rounded-full text-lg font-medium ${
                activeTab === "video"
                  ? "bg-gray-300 text-black shadow-inner"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Video
            </button>
            <button
              onClick={() => setActiveTab("film")}
              className={`px-6 py-2 rounded-full text-lg font-medium ${
                activeTab === "film"
                  ? "bg-gray-300 text-black shadow-inner"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              Short Film
            </button>
          </div>

          {/* CONTENT AREA */}
          <div className="text-center text-xl text-gray-700 mt-10">
            {activeTab === "photo" && (
              <div className="flex justify-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-4xl">
                  <img
                    src={img1}
                    alt="img1"
                    className="w-full h-[250px] object-cover rounded-xl"
                  />
                  <img
                    src={img2}
                    alt="img2"
                    className="w-full h-[250px] object-cover rounded-xl"
                  />
                  <img
                    src={img3}
                    alt="img3"
                    className="w-full h-[250px] object-cover rounded-xl"
                  />
                  <img
                    src={img4}
                    alt="img4"
                    className="w-full h-[250px] object-cover rounded-xl"
                  />
                </div>
              </div>
            )}

            {activeTab === "invitation" && <div>
              <div className="grid grid-cols-1 mb-20 ml-24 gap-60 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mt-10  mx-auto ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            alt={product.alt}
          />
        ))}
      </div>
              </div>}

            {activeTab === "video" && (
<>
  <div className="flex justify-center items-start gap-4 px-4">
  {/* Left side (Large + two small videos) */}
  <div className="flex flex-col gap-4">
    {/* Large video */}
    <div className="w-[600px] h-[400px] relative group">
      <video
        src={videos[0].src}
        className="w-full h-full object-cover rounded-xl"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
        <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
      </div>
    </div>

    {/* Bottom row - two small videos */}
    <div className="flex gap-4">
      <div className="w-[200px] h-[300px] relative group">
        <video
          src={videos[2].src}
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
          <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
        </div>
      </div>

      <div className="w-[200px] h-[300px] relative group">
        <video
          src={videos[3].src}
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
          <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
        </div>
      </div>
      <div className="w-[200px] h-[300px] relative group">
        <video
          src={videos[3].src}
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
          <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
        </div>
      </div>
    </div>
  </div>

  {/* Right side - tall video */}
  <div className="w-[400px] h-[700px] relative group">
    <video
      src={videos[1].src}
      className="w-full h-full object-cover rounded-xl"
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
      <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
    </div>
  </div>


</div>
<div className="flex justify-center gap-4 mt-6">
  <button className="px-6 py-2 border border-black text-black rounded hover:bg-gray-100">
    Contact Us
  </button>
  <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
    Load More
  </button>
</div>
</>



)}


            {activeTab === "film" && (
              <div className="flex mt-20 place-content-center">
                <iframe
                  width="1000"
                  height="700"
                  src="https://www.youtube.com/embed/UH9TjmPbws4?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
