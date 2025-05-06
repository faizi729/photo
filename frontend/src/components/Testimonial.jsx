import { useState } from "react";

const testimonials = [
  {
    name: "Pavel Nedved",
    title: "Businessmen",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", // Replace with real images
    rating: 4,
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
  },
  {
    name: "Michel Platini",
    title: "Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    rating: 5,
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
  },
  {
    name: "Alfredo Stefano",
    title: "Marketer",
    image: "https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg",
    rating: 5,
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
  },
  
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white text-center">
      <h4 className="text-sm text-blue-600 font-semibold tracking-wide">TESTIMONIALS</h4>
      <h2 className="text-4xl font-bold mt-2 mb-4">Clients testimonials</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        Our approach thrives at the intersection between data-driven market research and traditional management consultancies.
      </p>

      <div className="flex items-center justify-center space-x-8">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
        >
          <span>&larr;</span>
        </button>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-md transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-105" : "bg-gray-50"
              }`}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-xs uppercase text-gray-400 mb-4">{testimonial.title}</p>
              <p className="text-gray-600 text-sm mb-4">{testimonial.quote}</p>
              <div className="flex justify-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-orange-400 ${i >= testimonial.rating ? "opacity-30" : ""}`}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100 transition"
        >
          <span>&rarr;</span>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
