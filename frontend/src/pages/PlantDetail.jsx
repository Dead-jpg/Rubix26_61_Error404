import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PlantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data))
      .catch(() => setPlant(null));
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
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* 🔙 Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-green-700 font-semibold"
      >
        ← Back
      </button>

      {/* 🌿 HEADER */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* 🌱 IMAGE */}
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow"
        />

        {/* 📘 INFO PANEL */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {plant.name}
            </h1>

            <p className="italic text-green-700 mt-1">
              {plant.scientificName}
            </p>

            <span className="inline-block mt-3 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
              {plant.ayushSystem}
            </span>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {plant.uses}
            </p>

            {/* 🔹 QUICK FACTS */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <QuickFact label="Category" value="Medicinal Plant" />
              <QuickFact label="System" value={plant.ayushSystem} />
              <QuickFact label="Usage" value="Herbal Remedies" />
              <QuickFact label="Form" value="Natural" />
            </div>
          </div>

          {/* 🔳 3D BUTTON */}
          <button
            onClick={handle3DView}
            className={`w-fit px-6 py-2 rounded-xl font-medium transition ${
              plant.sketchfabUrl
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            View 3D Model
          </button>
        </div>
      </div>

      {/* 📚 DETAILED INFORMATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoBox
          title="Medicinal Uses"
          content={plant.uses}
        />

        <InfoBox
          title="Precautions"
          content={plant.precautions}
        />

        <InfoBox
          title="Parts Used"
          content={plant.partsUsed}
        />

        <InfoBox
          title="Region / Origin"
          content={plant.origin}
        />
      </div>
    </div>
  );
}

/* 🔹 COMPONENTS */

function InfoBox({ title, content }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}

function QuickFact({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}


