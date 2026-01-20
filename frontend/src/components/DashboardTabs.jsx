import { NavLink } from "react-router-dom";

const tabs = [
  { name: "Explorer", path: "explorer" },
  { name: "Compendium", path: "compendium" },
  { name: "Tours", path: "tours" },
  { name: "Bookmarks", path: "bookmarks" },
];

export default function DashboardTabs() {
  return (
    <div className="flex justify-center">
      <div className="bg-[#f7f7ef] px-4 py-2 rounded-full shadow flex gap-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            end
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-green-100"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
