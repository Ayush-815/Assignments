import { Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Student Portal</h1>
      <nav>
        <Link to="/about-us">About Us</Link> |{" "}
        <Link to="/contact-us">Contact Us</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}