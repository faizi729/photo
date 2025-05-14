import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Pavel Nedved", role: "Businessmen", quote: "Some people dream of success, while other people get up every morning and make it happen.", rating: 4, bgColor: "bg-pink-300" },
  { name: "Michel Platini", role: "Designer", quote: "Some people dream of success, while other people get up every morning and make it happen.", rating: 5, bgColor: "bg-gray-200" },
  { name: "Alfredo Stefano", role: "Marketer", quote: "Some people dream of success, while other people get up every morning and make it happen.", rating: 4, bgColor: "bg-blue-300" },
  { name: "Elena Rossi", role: "Entrepreneur", quote: "Some people dream of success, while other people get up every morning and make it happen.", rating: 5, bgColor: "bg-green-300" },
  { name: "Liam Carter", role: "Developer", quote: "Some people dream of success, while other people get up every morning and make it happen.", rating: 4, bgColor: "bg-yellow-300" },
  { name: "Sofia Mendes", role: "Consultant", quote: "Some people dream of success, while other people get up every morning and make it happen.", rating: 5, bgColor: "bg-purple-300" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [testimonials[prev], testimonials[currentIndex], testimonials[next]];
  };

  const visibleTestimonials = getVisibleTestimonials();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-blue-500 text-sm font-semibold tracking-widest">TESTIMONIALS</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Clients testimonials</h2>
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          Our approach thrives at the intersection between data-driven market research and traditional management consultancies.
        </p>
      </div>

      <div className="flex justify-center items-center mt-8 relative">
        <button onClick={handlePrev} className="absolute left-2 sm:left-4 p-2 bg-gray-200 rounded-full z-10">
          &larr;
        </button>

        <div className="flex space-x-4 sm:space-x-6 overflow-hidden w-full max-w-6xl px-2 sm:px-4">
          <AnimatePresence initial={false}>
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className={`p-4 sm:p-6 rounded-lg w-72 sm:w-80 md:w-96 flex-shrink-0 ${
                  index === 1 ? 'border border-gray-200 shadow-lg' : ''
                }`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${testimonial.bgColor}`}></div>
                </div>
                <h3 className="text-center text-base sm:text-lg font-semibold text-gray-800 mt-4">{testimonial.name}</h3>
                <p className="text-center text-xs sm:text-sm text-gray-500 uppercase">{testimonial.role}</p>
                <p className="text-center text-sm sm:text-base text-gray-600 mt-4">{testimonial.quote}</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.31 9.397c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z"></path>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button onClick={handleNext} className="absolute right-2 sm:right-4 p-2 bg-gray-200 rounded-full z-10">
          &rarr;
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${i === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
