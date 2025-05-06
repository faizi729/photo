import React, { useState } from 'react';
  // Your about image

const About = () => {
  const [activeTab, setActiveTab] = useState('style');

  const content = {
    style: `My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!`,
    mission: `Our mission is to capture authentic, timeless moments through the lens, delivering photographs that narrate stories and evoke emotions with a creative and unique perspective.`,
    vision: `Our vision is to be recognized as a trusted name in photography, setting the benchmark for creativity, innovation, and professionalism in capturing life's beautiful moments.`,
  };

  return (
    <section className="py-44 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>

          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-gray-300 mb-6 pb-2">
            <button 
              onClick={() => setActiveTab('style')}
              className={`font-semibold pb-1 ${activeTab === 'style' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
            >
              My Style
            </button>
            <button 
              onClick={() => setActiveTab('mission')}
              className={`font-semibold pb-1 ${activeTab === 'mission' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
            >
              Mission
            </button>
            <button 
              onClick={() => setActiveTab('vision')}
              className={`font-semibold pb-1 ${activeTab === 'vision' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
            >
              Vision
            </button>
          </div>

          {/* Dynamic Content */}
          <p className="text-gray-700 mb-8">
            {content[activeTab]}
          </p>

          {/* Professionalism & Transparency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* Replace with your icon */}
                <img src="https://cdn-icons-gif.flaticon.com/6172/6172509.gif" alt="Icon" className="w-8 h-8" />
                <h3 className="font-bold text-lg">Professionalism</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We invest all our professionalism, commitment and care.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* Replace with your icon */}
                <img src="https://cdn-icons-gif.flaticon.com/6172/6172515.gif" alt="Icon" className="w-8 h-8" />
                <h3 className="font-bold text-lg">Transparency</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We’re transparent in everything that happens internally and externally.
              </p>
            </div>
          </div>

          {/* Read More */}
          <div className="mt-6">
            <button className="text-orange-600 cursor-pointer font-semibold text-sm underline">Read more</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2">
          <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjB3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" alt="About Us" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default About;
