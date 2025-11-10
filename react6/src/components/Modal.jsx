import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>AMNIL</h2>
          <button
            className="close-button"
            onClick={onClose}
            onMouseEnter={(e) => (e.target.style.color = "red")}
            onMouseLeave={(e) => (e.target.style.color = "#4a5568")}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="modal-body">
          <p>AMNIL Technologies intern project</p>
        </div>

        <div className="modal-footer">
          <button className="btn primary" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
