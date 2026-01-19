import { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";

export default function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
}
