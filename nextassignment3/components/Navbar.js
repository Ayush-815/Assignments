import Link from "next/link";

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">AyushNext_Assigenment3</h2>
      </div>
      <div className="nav-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="nav-right">
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}