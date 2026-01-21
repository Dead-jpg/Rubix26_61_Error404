import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Plant3DView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data));
  }, [id]);

  if (!plant) {
    return <p className="text-center mt-10">Loading 3D Model...</p>;
  }

  if (!plant.sketchfabUrl) {
    return (
      <div className="text-center mt-10">
        <p>No 3D model available for this plant.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-black relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-10 bg-white text-black px-4 py-2 rounded shadow"
      >
        ← Back
      </button>

      <iframe
        src={plant.sketchfabUrl}
        title={plant.commonName}
        className="w-full h-full"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
    </div>
  );
}
