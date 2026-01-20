import { Link, useNavigate } from "react-router-dom";

export default function PlantCard({ plant }) {
  const navigate = useNavigate();

  const handle3DClick = (e) => {
    e.stopPropagation();

    if (!plant.sketchfabUrl) {
      alert("⚠️ 3D model not available for this plant yet");
      return;
    }

    navigate(`/dashboard/plants/${plant._id}/3d`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:scale-105 transition p-4 flex flex-col">
      {/* Clickable plant info */}
      <Link to={`/plants/${plant._id}`} className="flex-1">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-40 object-cover rounded-lg"
        />

        <h2 className="mt-3 text-xl font-bold">{plant.name}</h2>
        <p className="text-sm text-gray-600 italic">{plant.scientificName}</p>
        <p className="mt-2 text-sm">{plant.uses}</p>
      </Link>
    </div>
  );
}
