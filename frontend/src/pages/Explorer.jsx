import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ---------- Bookmark Utilities ---------- */
const getBookmarks = () => JSON.parse(localStorage.getItem("bookmarks")) || [];

const isBookmarked = (id) => getBookmarks().some((p) => p._id === id);

const toggleBookmark = (plant) => {
  let bookmarks = getBookmarks();

  if (bookmarks.some((p) => p._id === plant._id)) {
    bookmarks = bookmarks.filter((p) => p._id !== plant._id);
  } else {
    bookmarks.push(plant);
  }

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

/* ---------- Medical Uses Options ---------- */
const MEDICAL_USES = [
  "Immunity",
  "Stress",
  "Digestion",
  "Respiratory",
  "Skin",
  "Pain",
];

export default function Explorer() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [ayush, setAyush] = useState("All");
  const [only3D, setOnly3D] = useState(false);
  const [selectedUses, setSelectedUses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  /* ---------- Filter Logic ---------- */
  const filteredPlants = plants.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.scientificName.toLowerCase().includes(search.toLowerCase());

    const matchesAyush = ayush === "All" || p.ayushSystem === ayush;
    const matches3D = !only3D || p.sketchfabUrl;

    const matchesUses =
      selectedUses.length === 0 ||
      selectedUses.some((use) =>
        p.uses?.toLowerCase().includes(use.toLowerCase()),
      );

    return matchesSearch && matchesAyush && matches3D && matchesUses;
  });

  const toggleUse = (use) => {
    setSelectedUses((prev) =>
      prev.includes(use) ? prev.filter((u) => u !== use) : [...prev, use],
    );
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">🌿 Explorer</h1>
        <p className="text-gray-600">
          Discover medicinal plants by system, use & 3D models
        </p>
      </div>

      {/* AYUSH Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        {["All", "Ayurveda", "Yoga", "Unani", "Siddha", "Homeopathy"].map(
          (sys) => (
            <button
              key={sys}
              onClick={() => setAyush(sys)}
              className={`px-4 py-1 rounded-full text-sm transition ${
                ayush === sys
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {sys}
            </button>
          ),
        )}

        <label className="flex items-center gap-2 ml-4 text-sm">
          <input
            type="checkbox"
            checked={only3D}
            onChange={(e) => setOnly3D(e.target.checked)}
          />
          Only 3D models
        </label>
      </div>

      {/* Medical Uses Filter */}
      <div>
        <h3 className="font-medium mb-2">Filter by Medical Uses</h3>
        <div className="flex flex-wrap gap-2">
          {MEDICAL_USES.map((use) => (
            <button
              key={use}
              onClick={() => toggleUse(use)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                selectedUses.includes(use)
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {use}
            </button>
          ))}
        </div>
      </div>

      {/* Plant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <div
            key={plant._id}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Bookmark Icon */}
            <button
              onClick={() => {
                toggleBookmark(plant);
                window.location.reload();
              }}
              className="absolute top-3 right-3 z-10 bg-white rounded-full p-1 shadow"
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

            <Link to={`/dashboard/plants/${plant._id}`}>
              <img
                src={plant.image}
                alt={plant.name}
                className="h-44 w-full object-cover rounded-t-2xl"
              />

              <div className="p-4 space-y-2">
                <h2 className="font-bold text-lg">{plant.name}</h2>
                <p className="italic text-sm text-gray-600">
                  {plant.scientificName}
                </p>

                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  {plant.ayushSystem}
                </span>

                {plant.sketchfabUrl && (
                  <p className="text-xs text-green-600 font-medium">
                    🎯 3D Model Available
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <p className="text-gray-500 text-center">
          No plants match your filters 🌱
        </p>
      )}
    </div>
  );
}
