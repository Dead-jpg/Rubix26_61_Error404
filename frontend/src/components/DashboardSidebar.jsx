import { NavLink } from "react-router-dom";
import { FaLeaf, FaSeedling, FaSearch, FaQuestionCircle, FaBookOpen, FaFilm, FaBookmark, FaPlus } from "react-icons/fa";

export default function DashboardSidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/20 backdrop-blur-xl shadow-lg z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b border-white/30 flex justify-between items-center">
          <h2 className="font-bold text-lg text-green-900 drop-shadow-sm">🌿 Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-green-700 transition text-lg"
          >
            ✖
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <SidebarLink to="/dashboard" icon={<FaLeaf />}>Dashboard</SidebarLink>
          <SidebarLink to="/dashboard/plants" icon={<FaSeedling />}>All Plants</SidebarLink>
          <SidebarLink to="/dashboard/explorer" icon={<FaSearch />}>Explorer</SidebarLink>
          <SidebarLink to="/dashboard/quiz" icon={<FaQuestionCircle />}>Quiz</SidebarLink>
          <SidebarLink to="/dashboard/learning-tours" icon={<FaBookOpen />}>Guided Tours</SidebarLink>
          <SidebarLink to="/dashboard/multimedia" icon={<FaFilm />}>Multimedia</SidebarLink>
          <SidebarLink to="/dashboard/bookmarks" icon={<FaBookmark />}>Bookmarks</SidebarLink>
          <SidebarLink to="/dashboard/add-plant" icon={<FaPlus />}>Add Plant</SidebarLink>
        </nav>
      </aside>
    </>
  );
}

function SidebarLink({ to, children, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-xl transition-colors duration-300 font-medium text-white ${
          isActive
            ? "bg-green-600 text-white shadow-md"
            : "hover:bg-white/20 hover:text-green-700"
        }`
      }
    >
      <span className="text-green-200">{icon}</span>
      {children}
    </NavLink>
  );
}
