import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  if (loading) {
    return <p className="p-6">Loading plants...</p>;
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Medicinal Plants</h1>
          <p className="text-gray-500">
            Explore AYUSH medicinal plant database
          </p>
        </div>

        <Link
          to="/dashboard/add-plant"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          + Add Plant
        </Link>
      </div>

      {/* Plant Cards */}
      {plants.length === 0 ? (
        <p>No plants found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
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
                <h2 className="text-lg font-semibold">{plant.name}</h2>
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
    </div>
  );
}
