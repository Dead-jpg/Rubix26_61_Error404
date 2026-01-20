import { NavLink } from "react-router-dom";

export default function DashboardSidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={onClose}>✖</button>
        </div>

        <nav className="p-4 space-y-2">
          <SidebarLink to="/dashboard">Dashboard</SidebarLink>
          <SidebarLink to="/dashboard/plants">All Plants</SidebarLink>
          <SidebarLink to="/dashboard/explorer">Explorer</SidebarLink>
          <SidebarLink to="/dashboard/tours">Guided Tours</SidebarLink>
          <SidebarLink to="/dashboard/bookmarks">Bookmarks</SidebarLink>
          <SidebarLink to="/dashboard/search">Advanced Search</SidebarLink>
          <SidebarLink to="/dashboard/add-plant">Add Plant</SidebarLink>
        </nav>
      </aside>
    </>
  );
}

function SidebarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg ${
          isActive ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
