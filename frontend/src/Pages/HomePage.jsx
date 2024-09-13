import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Authentic Indian Cuisine",
      description: "Bringing flavors from across India, right to your table.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Fresh Ingredients",
      description: "Only the freshest ingredients make the finest dishes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Delicious Deserts",
      description: "Finish your meal with our range of delightful desserts.",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <div className="relative z-30 w-full bg-transparent px-5 py-4 flex justify-between items-center fixed top-0">
        <div className="text-black font-bold text-2xl">Flavors of India</div>
        <div className="hidden sm:flex space-x-8">
          <button className="text-black hover:text-orange-600 transition">Home</button>
          <button className="text-black hover:text-orange-600 transition">Menu</button>
          <button className="text-black hover:text-orange-600 transition">Pricing</button>
          <button
            className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
            onClick={() => navigate("/body")}
          >
            Login
          </button>
        </div>
        <button className="sm:hidden text-black" onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full h-[500px] mt-16 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Carousel Navigation */}
        <div className="absolute inset-0 flex justify-between items-center px-5">
          <button
            className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 w-full flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-orange-600" : "bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-30 p-5 bg-black text-white flex justify-center">
        <p>&copy; 2024 Flavors of India. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
