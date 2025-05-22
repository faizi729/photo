import { useState } from "react";
import img1 from "../assets/image21.png";
import img2 from "../assets/image22.png";
import img3 from "../assets/image23.png";
import img4 from "../assets/image24.png";
import { Link } from "react-router-dom";

const card1 = "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525317/video4_l1neo5.mp4";
const card2 = "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525306/video6_xd6e4q.mp4";
const card3 = "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525291/video11_cn3iny.mp4";
const card4 = "https://res.cloudinary.com/daeyt0uqy/video/upload/v1746525276/video2_njywoo.mp4";

const Services = () => {
  const products = [
    { id: 1, title: 'Wedding Invitation (WD-1)', price: '₹200', video: card1, alt: 'Wedding Invitation WD-1' },
    { id: 2, title: 'Wedding Invitation (WD-2)', price: '₹250', video: card2, alt: 'Wedding Invitation WD-2' },
    { id: 3, title: 'Wedding Invitation (WD-3)', price: '₹300', video: card3, alt: 'Wedding Invitation WD-3' },
    { id: 4, title: 'Wedding Invitation (WD-4)', price: '₹350', video: card4, alt: 'Wedding Invitation WD-4' },
  ];

  const ProductCard = ({ title, video, alt }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-[300px] mx-auto">
      <video 
        src={video}
        muted
        autoPlay
        loop
        alt={title}
        playsInline
        className="w-[250px] h-auto object-cover rounded-md"
      />
      <div className="flex flex-col items-center mt-3">
        <h1 className="text-lg font-medium text-gray-800">{title}</h1>
      </div>
      <Link to="/services">
        <button className="mt-4 w-44 px-2 py-3 bg-pink-500 text-white rounded-md cursor-pointer hover:bg-amber-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600">
          check Pricing
        </button>
      </Link>
    </div>
  );

  const videos = [
    { id: 1, src: "https://videos.pexels.com/video-files/29560142/12723934_360_640_60fps.mp4", alt: "Bridge" },
    { id: 2, src: "https://videos.pexels.com/video-files/31192424/13324326_360_640_25fps.mp4", alt: "Night Sky" },
    { id: 3, src: "https://videos.pexels.com/video-files/30958081/13235231_360_640_60fps.mp4", alt: "Mountains" },
    { id: 4, src: "https://videos.pexels.com/video-files/31644045/13481933_640_360_60fps.mp4", alt: "Rocks" },
  ];

  const [activeTab, setActiveTab] = useState("invitation");

  return (
    <>
      <div className="flex justify-center font-bold text-[32px] sm:text-[40px] mb-10 text-center">Services</div>

      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-[1500px] bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-[inset_6px_6px_12px_#d1d5db,_inset_-6px_-6px_12px_#ffffff]">
          
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-10">
            {["invitation", "photo", "video", "film"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-lg font-medium ${
                  activeTab === tab
                    ? "bg-gray-300 text-black shadow-inner"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-center text-xl text-gray-700 mt-6 sm:mt-10">

            {activeTab === "invitation" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mt-10">
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
                <div className="mt-5 bg-black py-3 px-5 flex justify-center w-[200px] mx-auto cursor-pointer text-white">
                  <Link to="/services">
                    <button className="cursor-pointer">Load More</button>
                  </Link>
                </div>
              </>
            )}

            {activeTab === "photo" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {[img1, img2, img3, img4].map((src, index) => (
                    <img key={index} src={src} alt={`img${index + 1}`} className="w-full h-[200px] sm:h-[250px] object-cover rounded-xl" />
                  ))}
                </div>
                <div className="mt-5 bg-black py-3 px-5 flex justify-center w-[200px] mx-auto cursor-pointer text-white">
                  <Link to="/services">
                    <button className="cursor-pointer">Load More</button>
                  </Link>
                </div>
              </>
            )}

            {activeTab === "video" && (
              <>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  {/* Left Section */}
                  <div className="flex flex-col gap-4 w-full lg:w-3/5">
                    <div className="w-full aspect-video relative group">
                      <video src={videos[0].src} className="w-full h-full object-cover rounded-xl" autoPlay muted loop playsInline />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                        <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[videos[2], videos[3], videos[3]].map((v, i) => (
                        <div key={i} className="w-full aspect-[2/3] relative group">
                          <video src={v.src} className="w-full h-full object-cover rounded-xl" autoPlay muted loop playsInline />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                            <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right video */}
                  <div className="w-full lg:w-2/5 aspect-[3/5] relative group">
                    <video src={videos[1].src} className="w-full h-full object-cover rounded-xl" autoPlay muted loop playsInline />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white p-3 rounded-full shadow-lg">▶</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-6 flex-wrap">
                  <button className="px-6 py-2 border border-black text-black rounded hover:bg-gray-100">Contact Us</button>
                  <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">Load More</button>
                </div>
              </>
            )}

            {activeTab === "film" && (
              <div className="flex justify-center mt-10">
                <div className="w-full max-w-5xl mx-auto px-4 relative pt-[56.25%]">
                  <iframe
                    src="https://player.vimeo.com/video/1084157352?h=ed5d9c99de&badge=0&autopause=0&autoplay=1&muted=1&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    allowFullScreen
                    title="mahi & milan save the date hd eye logo"
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
