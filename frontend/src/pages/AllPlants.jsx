import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ---------- Bookmark Utilities ---------- */
const getBookmarks = () =>
  JSON.parse(localStorage.getItem("bookmarks")) || [];

const isBookmarked = (id) =>
  getBookmarks().some((plant) => plant._id === id);

const toggleBookmark = (plant) => {
  let bookmarks = getBookmarks();

  if (bookmarks.some((p) => p._id === plant._id)) {
    bookmarks = bookmarks.filter((p) => p._id !== plant._id);
  } else {
    bookmarks.push(plant);
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export default function AllPlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="p-6 text-white text-lg font-medium drop-shadow-md">
        Loading plants...
      </p>
    );

  return (
    <div className="p-6 space-y-8 text-slate-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white drop-shadow-md">
            All Medicinal Plants
          </h1>
          <p className="text-white drop-shadow-md">
            Explore AYUSH medicinal plant database
          </p>
        </div>

        <Link
          to="/dashboard/add-plant"
          className="bg-emerald-600/90 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition"
        >
          + Add Plant
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white/80 backdrop-blur-2xl rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-white/25 overflow-hidden flex flex-col"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {plant.name}
                </h2>
                <p className="italic text-sm text-slate-700">
                  {plant.scientificName}
                </p>

                <span className="inline-block mt-2 bg-emerald-100/90 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">
                  {plant.ayushSystem}
                </span>

                <p className="text-sm text-slate-800 mt-3 line-clamp-3">
                  {plant.uses}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/dashboard/plants/${plant._id}`}
                  className="text-emerald-700 font-medium hover:underline"
                >
                  Learn more →
                </Link>

                {/* Bookmark Icon */}
                <button
                  onClick={() => {
                    toggleBookmark(plant);
                    window.location.reload();
                  }}
                  className="p-1"
                  title="Bookmark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isBookmarked(plant._id) ? "#16a34a" : "none"}
                    viewBox="0 0 24 24"
                    stroke="#16a34a"
                    strokeWidth="2"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
