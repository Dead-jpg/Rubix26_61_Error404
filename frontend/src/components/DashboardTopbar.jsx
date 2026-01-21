import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardTopbar({ onMenuClick }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
};


  return (
    <header className="sticky top-0 z-[100] bg-green-600 px-6 py-3 flex items-center justify-between shadow-md relative">
      {/* Left */}
      <div className="flex items-center gap-4 text-white">
        <button onClick={onMenuClick} className="text-2xl">
          ☰
        </button>
        <h1 className="font-semibold text-lg">Virtual Herbal Garden</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {/* Search */}

        {/* Profile */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-10 h-10 rounded-full bg-white text-green-700 font-bold flex items-center justify-center ring-2 ring-white hover:ring-4 hover:ring-green-300 transition"
        >
          {user?.name?.[0]?.toUpperCase() || "U"}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 top-14 w-64 bg-white rounded-xl shadow-xl p-4 animate-fadeIn z-[9999]">
            <div className="mb-3">
              <p className="font-semibold text-gray-800">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
              <p className="text-xs text-green-600 mt-1">{user?.role}</p>
            </div>

            <button
              onClick={logout}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
