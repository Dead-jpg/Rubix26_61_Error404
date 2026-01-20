import { Link } from "react-router-dom";
import { tours } from "../data/tours";

export default function GuidedTours() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Guided Tours</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{tour.title}</h2>
            <p className="text-gray-600 mt-1">{tour.description}</p>

            <Link
              to={`/dashboard/tours/${tour.id}/journey`}
              className="inline-block mt-4 text-green-600 font-medium"
            >
              Start Tour →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
