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

/* ---------- Filter Options ---------- */
const AYUSH_SYSTEMS = ["Ayurveda", "Yoga", "Unani", "Siddha", "Homeopathy"];
const MEDICAL_USES = ["Immunity", "Stress", "Digestion", "Respiratory", "Skin", "Pain"];
const PLANT_TYPES = ["Tree", "Shrub", "Herb", "Climber", "Grass"];
const CLIMATE_TYPES = ["Tropical", "Temperate", "Arid", "Alpine"];

export default function Explorer() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Dropdown states
  const [ayushOpen, setAyushOpen] = useState(false);
  const [usesOpen, setUsesOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [climateOpen, setClimateOpen] = useState(false);

  // Selected filters
  const [selectedAyush, setSelectedAyush] = useState([]);
  const [selectedUses, setSelectedUses] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedClimates, setSelectedClimates] = useState([]);
  const [only3D, setOnly3D] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Toggle functions
  const toggleFilter = (value, list, setList) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  // Filtered plants
  const filteredPlants = plants.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.scientificName.toLowerCase().includes(search.toLowerCase());
    const matchesAyush = selectedAyush.length === 0 || selectedAyush.includes(p.ayushSystem);
    const matchesUses = selectedUses.length === 0 || selectedUses.some((use) => p.uses?.toLowerCase().includes(use.toLowerCase()));
    const matchesTypes = selectedTypes.length === 0 || selectedTypes.includes(p.type);
    const matchesClimates = selectedClimates.length === 0 || selectedClimates.includes(p.climate);
    const matches3D = !only3D || p.sketchfabUrl;
    return matchesSearch && matchesAyush && matchesUses && matchesTypes && matchesClimates && matches3D;
  });

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">🌿 Explorer</h1>
        <p className="text-white drop-shadow-md">Discover medicinal plants by system, use & 3D models</p>
      </div>

      {/* ---------------- Filters Dropdowns ---------------- */}
      <div className="flex flex-wrap gap-4">

        {/* AYUSH System */}
        <div className="relative w-44">
          <button
            onClick={() => setAyushOpen(!ayushOpen)}
            className="w-full bg-white/20 backdrop-blur-lg text-white drop-shadow-md rounded-lg px-4 py-2 font-medium flex justify-between items-center shadow-sm hover:shadow-md transition"
          >
            AYUSH System {selectedAyush.length > 0 ? `(${selectedAyush.length})` : ""}
            <span>{ayushOpen ? "▲" : "▼"}</span>
          </button>
          {ayushOpen && (
            <div className="absolute z-20 mt-1 w-full bg-white/70 backdrop-blur-xl rounded-lg shadow-lg p-3 space-y-1 max-h-64 overflow-auto">
              {AYUSH_SYSTEMS.map((sys) => (
                <label key={sys} className="flex items-center gap-2 text-slate-900 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                  <input type="checkbox" checked={selectedAyush.includes(sys)} onChange={() => toggleFilter(sys, selectedAyush, setSelectedAyush)} className="accent-green-600"/>
                  {sys}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Medical Uses */}
        <div className="relative w-44">
          <button
            onClick={() => setUsesOpen(!usesOpen)}
            className="w-full bg-white/20 backdrop-blur-lg text-white drop-shadow-md rounded-lg px-4 py-2 font-medium flex justify-between items-center shadow-sm hover:shadow-md transition"
          >
            Medical Uses {selectedUses.length > 0 ? `(${selectedUses.length})` : ""}
            <span>{usesOpen ? "▲" : "▼"}</span>
          </button>
          {usesOpen && (
            <div className="absolute z-20 mt-1 w-full bg-white/70 backdrop-blur-xl rounded-lg shadow-lg p-3 space-y-1 max-h-64 overflow-auto">
              {MEDICAL_USES.map((use) => (
                <label key={use} className="flex items-center gap-2 text-slate-900 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                  <input type="checkbox" checked={selectedUses.includes(use)} onChange={() => toggleFilter(use, selectedUses, setSelectedUses)} className="accent-green-600"/>
                  {use}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Plant Type */}
        <div className="relative w-44">
          <button
            onClick={() => setTypeOpen(!typeOpen)}
            className="w-full bg-white/20 backdrop-blur-lg text-white drop-shadow-md rounded-lg px-4 py-2 font-medium flex justify-between items-center shadow-sm hover:shadow-md transition"
          >
            Plant Type {selectedTypes.length > 0 ? `(${selectedTypes.length})` : ""}
            <span>{typeOpen ? "▲" : "▼"}</span>
          </button>
          {typeOpen && (
            <div className="absolute z-20 mt-1 w-full bg-white/70 backdrop-blur-xl rounded-lg shadow-lg p-3 space-y-1 max-h-64 overflow-auto">
              {PLANT_TYPES.map((type) => (
                <label key={type} className="flex items-center gap-2 text-slate-900 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                  <input type="checkbox" checked={selectedTypes.includes(type)} onChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)} className="accent-green-600"/>
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Climate */}
        <div className="relative w-44">
          <button
            onClick={() => setClimateOpen(!climateOpen)}
            className="w-full bg-white/20 backdrop-blur-lg text-white drop-shadow-md rounded-lg px-4 py-2 font-medium flex justify-between items-center shadow-sm hover:shadow-md transition"
          >
            Climate {selectedClimates.length > 0 ? `(${selectedClimates.length})` : ""}
            <span>{climateOpen ? "▲" : "▼"}</span>
          </button>
          {climateOpen && (
            <div className="absolute z-20 mt-1 w-full bg-white/70 backdrop-blur-xl rounded-lg shadow-lg p-3 space-y-1 max-h-64 overflow-auto">
              {CLIMATE_TYPES.map((climate) => (
                <label key={climate} className="flex items-center gap-2 text-slate-900 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
                  <input type="checkbox" checked={selectedClimates.includes(climate)} onChange={() => toggleFilter(climate, selectedClimates, setSelectedClimates)} className="accent-green-600"/>
                  {climate}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* 3D Models */}
        <label className="flex items-center gap-2 text-white drop-shadow-md mt-2">
          <input type="checkbox" checked={only3D} onChange={(e) => setOnly3D(e.target.checked)} className="accent-green-600"/>
          Only 3D Models
        </label>
      </div>

      {/* ---------------- Plant Cards ---------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredPlants.map((plant) => (
          <div
            key={plant._id}
            className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-white/30 overflow-hidden flex flex-col"
          >
            {/* Bookmark */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"/>
              </svg>
            </button>

            <Link to={`/dashboard/plants/${plant._id}`}>
              <img src={plant.image} alt={plant.name} className="h-44 w-full object-cover rounded-t-2xl"/>
              <div className="p-4 space-y-2">
                <h2 className="font-bold text-lg text-slate-900">{plant.name}</h2>
                <p className="italic text-sm text-slate-700">{plant.scientificName}</p>
                <span className="inline-block bg-green-100/90 text-emerald-900 px-3 py-1 rounded-full text-xs font-medium">{plant.ayushSystem}</span>
                {plant.sketchfabUrl && <p className="text-xs text-green-700 font-medium">🎯 3D Model Available</p>}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <p className="text-gray-200 text-center mt-4">No plants match your filters 🌱</p>
      )}
    </div>
  );
}
