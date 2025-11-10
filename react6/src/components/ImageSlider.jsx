import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ImageSlider.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLNXJ1wkHS6kX8C7dgIK02Vv_3xBNC6IjVw&s",  // Straw Hats
  "https://cdn.shopify.com/s/files/1/0568/2298/8958/files/luffy-gear-5-is-op.jpg?v=1733101087",  // Luffy
  "https://wallpapers.com/images/featured/roronoa-zoro-pictures-hfxnwuxph7uv5tsu.jpg",  // Zoro
  "https://images2.alphacoders.com/135/1352221.png",  // Sanji
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWbusrcrsAxYFBezyu_vvUxqg9pIzqRF5TQ&s",  // Jinbe
  "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-121408907/121408907.jpg",  // Brook
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS7KRobztoygNAcDHhZsYUXX-nMFeRGGDlQ&s",  // Franky
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zLRqnLkXCE1Bb9krnl5n03qiqD4buxaREA&s",  // Robin
  "https://images5.alphacoders.com/136/1368508.jpeg",  // Nami
  "https://images8.alphacoders.com/137/1378551.jpg",  // Chopper
  "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/07/10-ways-usopp-is-different-than-the-rest-of-the-straw-hats.jpg"  // Usopp
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);
  const observerRef = useRef(null);

  const startAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
  }, []);

  const stopAutoSlide = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAutoSlide(); // start 
        } else {
          stopAutoSlide(); 
        }
      },
      { threshold: 0.5 } // 50% visible hunu paryo
    );

    if (sliderRef.current) {
      observerRef.current.observe(sliderRef.current);
    }

    return () => {
      stopAutoSlide();
      if (sliderRef.current) {
        observerRef.current.unobserve(sliderRef.current);
      }
    };
  }, [startAutoSlide, stopAutoSlide]);

  const goToSlide = (newIndex) => {
    setIndex(newIndex);
    startAutoSlide(); // reset timer when manually changing
  };

  const nextSlide = () => goToSlide((index + 1) % images.length);
  const prevSlide = () => goToSlide((index - 1 + images.length) % images.length);

  return (
    <div className="slider-container" ref={sliderRef}>
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className="slider-image"
            draggable="false"
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
