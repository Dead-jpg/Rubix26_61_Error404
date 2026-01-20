import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Navbar({ onMenuClick }) {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-md
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🌿 Logo */}
        <Link
          to="/"
          className="
            flex items-center gap-2 text-lg md:text-xl font-extrabold
            text-green-100 hover:text-green-200 drop-shadow-md transition
          "
        >
          🌿 Virtual Herbal Garden
        </Link>

        {/* 🔗 Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <NavItem to="/about">About Us</NavItem>
          <NavItem to="/faqs">FAQs</NavItem>
          <NavItem to="/contact">Contact Us</NavItem>

          <Link
            to="/login"
            className="
              bg-green-600/90 hover:bg-green-500/90 text-white
              px-5 py-2 rounded-xl font-semibold shadow-md
              transition transform hover:scale-[1.02]
            "
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-white text-2xl hover:text-green-200 transition"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

/* 🔹 Navigation link */
function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="
        px-3 py-2 rounded-md font-medium text-white
        hover:text-green-200 hover:bg-white/20 transition
      "
    >
      {children}
    </Link>
  );
}
