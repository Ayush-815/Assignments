import React, { useState } from "react";
import Modal from "./components/Modal.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import useFetch from "./hooks/useFetch.js";
import { useTheme } from "./theme/ThemeContext.jsx";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //toggle ddark/light ko lagi
  const themeSymbol = theme === "light" ? "🌞" : "🌙";

  return (
    <div className="app">
      <center>
      <header>
        <h1>React Assignment</h1>
        <button onClick={toggleTheme}>
          Toggle Theme {themeSymbol}
        </button>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
      </header>
      </center>
      <main>
        <h2>Image Slider</h2>
        <ImageSlider />

        <h2>Fetched Data</h2>
        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
          <ul>
            {data.slice(0, 5).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </main>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Portal Modal</h2>
        <p>This modal uses React Portal.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}