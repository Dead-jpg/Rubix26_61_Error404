import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <Link to={`/plants/${plant._id}`}>
      <div className="bg-white rounded-xl shadow-md hover:scale-105 transition p-4">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h2 className="mt-3 text-xl font-bold">{plant.name}</h2>
        <p className="text-sm text-gray-600 italic">{plant.scientificName}</p>
        <p className="mt-2 text-sm">{plant.uses}</p>
      </div>
    </Link>
  );
}
