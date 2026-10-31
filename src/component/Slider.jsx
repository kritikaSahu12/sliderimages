
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
    title: "Explore The World",
    description: "Discover beautiful places and create unforgettable memories."
  },
  {
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600",
    title: "Nature's Beauty",
    description: "Experience the peace and beauty of nature."
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
    title: "Adventure Awaits",
    description: "Find your next adventure and enjoy every moment."
  }
];

function Slider() {

  const [current, setCurrent] = useState(0);

  // Next image
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // Previous image
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">

      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="slide-image"
      />

      <div className="overlay"></div>

      <div className="slide-content">
        <h1>{slides[current].title}</h1>

        <p>{slides[current].description}</p>

        <button className="explore-btn">
          Explore More
        </button>
      </div>

      <button className="arrow prev" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="arrow next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {slides.map((item, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

      <div className="slide-number">
        0{current + 1} / 0{slides.length}
      </div>

    </div>
  );
}

export default Slider;
