import { useState } from "react";
import { Quote } from "lucide-react"; // Optional icon from lucide

const testimonials = [
  {
    name: "Sophia Bennett",
    title: "Wedding Client",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    rating: 5,
    quote: "Absolutely stunning photos! You captured every emotion so perfectly — we’ll cherish these forever.",
  },
  {
    name: "Daniel Wu",
    title: "Model",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    quote: "Professional, creative, and super easy to work with. The shoot was fun and the results were mind-blowing!",
  },
  {
    name: "Rina Kapoor",
    title: "Event Organizer",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 4,
    quote: "Great eye for detail and storytelling through the lens. Our event looked even better in the photos!",
  },
  {
    name: "Jake Thompson",
    title: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 5,
    quote: "The branding shots elevated our business’s online presence. Clean, professional, and striking.",
  },
  {
    name: "Emily Chen",
    title: "Newborn Mom",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    rating: 5,
    quote: "You froze those precious moments of our baby’s first week beautifully. Thank you for such heartfelt work.",
  }
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50 text-center px-4">
      <h4 className="text-sm text-blue-600 font-semibold tracking-wide mb-2">TESTIMONIALS</h4>
      <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>

      <div className="max-w-3xl mx-auto relative">
        <div className="bg-white p-8 rounded-2xl shadow-lg relative">
          {/* Quote Icon */}
          <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-500 opacity-20" />

          {/* Testimonial text */}
          <p className="text-lg text-gray-700 italic mb-8">"{testimonial.quote}"</p>

          {/* Person Info */}
          <div className="flex flex-col items-center mt-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover mb-3"
            />
            <h3 className="text-md font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>

            {/* Rating */}
            <div className="flex space-x-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 ${i >= testimonial.rating ? "opacity-30" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
