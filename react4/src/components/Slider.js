import { useState, useEffect } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function Slider() {
  return (
    <div>
      {Object.keys(products).map(category => (
        <CategoryCarousel key={category} title={category} items={products[category]} />
      ))}
    </div>
  );
}

function CategoryCarousel({ title, items }) {
  const [index, setIndex] = useState(0);

  // Auto-slide/ carousel ko lagi
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  const prevSlide = () => {
    setIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setIndex(prev => (prev + 1) % items.length);
  };

  return (
    <div style={{ marginBottom: "30px", position: "relative", width: "300px" }}>
      <h3>{title}</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={prevSlide}>&#10094;</button>
        <div style={{ width: "200px", textAlign: "center" }}>
          <ProductCard product={items[index]} />
        </div>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
      <p style={{ textAlign: "center" }}>
        {index + 1} / {items.length}
      </p>
    </div>
  );
}
