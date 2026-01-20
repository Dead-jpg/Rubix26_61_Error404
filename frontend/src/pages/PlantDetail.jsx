import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PlantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data));
  }, [id]);

  if (!plant) {
    return <p className="p-10 text-gray-500">Loading plant details...</p>;
  }

  const handle3DView = () => {
    if (!plant.sketchfabUrl) {
      alert("⚠️ 3D model not available for this plant yet");
      return;
    }
    navigate(`/dashboard/plants/${plant._id}/3d`);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{plant.name}</h1>
            <p className="italic text-green-700 mt-1">{plant.scientificName}</p>

            <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {plant.ayushSystem}
            </span>

            <p className="mt-6 text-gray-700 leading-relaxed">{plant.uses}</p>
          </div>

          {/* ✅ VIEW 3D BUTTON */}
          <button
            onClick={handle3DView}
            className={`mt-6 w-fit px-5 py-2 rounded-lg font-medium transition ${
              plant.sketchfabUrl
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            View 3D Model
          </button>
        </div>
      </div>

      {/* Extra Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard title="Medicinal Uses" value="Immunity, digestion, stress" />
        <InfoCard title="Plant Type" value="Herbal Plant" />
        <InfoCard title="Recommended For" value="Daily wellness" />
      </div>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{value}</p>
    </div>
  );
}
