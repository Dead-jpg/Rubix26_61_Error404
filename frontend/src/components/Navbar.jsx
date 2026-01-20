import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 w-screen z-50
        bg-gradient-to-r from-green-950 via-green-900 to-green-950
        backdrop-blur-xl border-b border-white/10 shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🌿 Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-green-100 hover:text-green-300 transition"
        >
          🌿 Virtual Herbal Garden
        </Link>

        {/* 🔗 Right-side links */}
        <div className="flex items-center gap-8">
          <Link to="/about" className="hover:text-green-300 transition">
            About Us
          </Link>

          <Link to="/faqs" className="hover:text-green-300 transition">
            FAQs
          </Link>

          <Link to="/contact" className="hover:text-green-300 transition">
            Contact Us
          </Link>

          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-xl transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
