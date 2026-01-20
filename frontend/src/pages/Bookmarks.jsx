import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(stored);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bookmarked Plants</h1>

      {bookmarks.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-gray-500">
          No bookmarks added yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((plant) => (
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
