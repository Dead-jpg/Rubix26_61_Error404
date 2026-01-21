import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlantSearchBar({ query, setQuery }) {
  const [plants, setPlants] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch(() => setPlants([]));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const q = query.toLowerCase();

    const filtered = plants.filter((plant) => {
      const name =
        (plant.commonName ||
          plant.name ||
          "").toLowerCase();

      const scientific =
        (plant.botanicalName ||
          plant.scientificName ||
          "").toLowerCase();

      return name.includes(q) || scientific.includes(q);
    });

    setSuggestions(filtered.slice(0, 5));
  }, [query, plants]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (suggestions.length > 0) {
        navigate(`/dashboard/plants/${suggestions[0]._id}`);
      } else {
        const exact = plants.find((plant) =>
          (
            plant.commonName ||
            plant.name ||
            ""
          )
            .toLowerCase()
            .includes(query.toLowerCase())
        );

        if (exact) {
          navigate(`/dashboard/plants/${exact._id}`);
        }
      }
    }
  };

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search medicinal plants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEnter}
        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* 🔍 Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
          {suggestions.map((plant) => (
            <div
              key={plant._id}
              onClick={() =>
                navigate(`/dashboard/plants/${plant._id}`)
              }
              className="px-4 py-3 cursor-pointer hover:bg-green-50"
            >
              <p className="font-medium">
                {plant.commonName ||
                  plant.name ||
                  "Unnamed Plant"}
              </p>
              <p className="text-xs text-gray-500">
                {plant.botanicalName ||
                  plant.scientificName ||
                  "Scientific name not available"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
