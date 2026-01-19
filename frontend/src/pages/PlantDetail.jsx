import { useParams, useEffect, useState } from "react";

export default function PlantDetail() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data));
  }, [id]);

  if (!plant) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <img src={plant.image} className="w-full rounded-xl" />
      <h1 className="text-3xl font-bold mt-5">{plant.name}</h1>
      <p className="italic">{plant.scientificName}</p>
      <p className="mt-4">{plant.uses}</p>
      <p className="mt-2 text-sm text-gray-500">System: {plant.ayushSystem}</p>
    </div>
  );
}
