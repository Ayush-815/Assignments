import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ButtonDoc from "./pages/ButtonDoc";
import TableDoc from "./pages/TableDoc";
import NotFound from "./pages/NotFound";
import "./styles/components.css";
import "./styles/cards.css";
import "./styles/pages.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-area">
        <div className="card-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button" element={<ButtonDoc />} />
            <Route path="/table" element={<TableDoc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;