import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdvancedSearch() {
  const [allPlants, setAllPlants] = useState([]);
  const [results, setResults] = useState([]);

  const [name, setName] = useState("");
  const [disease, setDisease] = useState("");
  const [system, setSystem] = useState("");

  // Fetch all plants once
  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setAllPlants(data);
        setResults([]);
      });
  }, []);

  const handleSearch = () => {
    const filtered = allPlants.filter((plant) => {
      const matchName =
        !name ||
        plant.name.toLowerCase().includes(name.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(name.toLowerCase());

      const matchDisease =
        !disease || plant.uses.toLowerCase().includes(disease.toLowerCase());

      const matchSystem = !system || plant.ayushSystem === system;

      return matchName && matchDisease && matchSystem;
    });

    setResults(filtered);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold">Advanced Search</h1>

      {/* Search Box */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            placeholder="Plant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            placeholder="Disease / Use (eg: stress, immunity)"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <select
            value={system}
            onChange={(e) => setSystem(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="">System</option>
            <option value="Ayurveda">Ayurveda</option>
            <option value="Yoga">Yoga</option>
            <option value="Unani">Unani</option>
            <option value="Siddha">Siddha</option>
            <option value="Homeopathy">Homeopathy</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Search
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((plant) => (
            <div
              key={plant._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="h-48 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h2 className="font-semibold text-lg">{plant.name}</h2>
                <p className="italic text-sm text-gray-500">
                  {plant.scientificName}
                </p>

                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  {plant.ayushSystem}
                </span>

                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  {plant.uses}
                </p>

                <Link
                  to={`/dashboard/plants/${plant._id}`}
                  className="inline-block mt-4 text-green-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && (
        <p className="text-center text-gray-500">
          No plants found. Try different keywords 🌱
        </p>
      )}
    </div>
  );
}
