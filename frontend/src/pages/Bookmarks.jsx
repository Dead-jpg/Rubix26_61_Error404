import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);

    const storedNotes =
      JSON.parse(localStorage.getItem("herbalNotes")) || [];
    setNotes(storedNotes);
  }, []);

  const saveNote = () => {
    if (!note.trim()) return;

    const newNote = {
      id: Date.now(),
      text: note,
      date: new Date().toLocaleString(),
    };

    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem("herbalNotes", JSON.stringify(updatedNotes));
    setNote("");
  };

  return (
    <div className="p-6 space-y-14">
      {/* 🌿 BOOKMARKED PLANTS */}
      <section>
        <h1 className="text-2xl font-bold mb-6">
          Bookmarked Plants 🌿
        </h1>

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
                  <h2 className="text-lg font-semibold">
                    {plant.name}
                  </h2>

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
      </section>

      {/* 📝 NOTES SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          My Notes 📝
        </h2>

        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your notes here..."
            className="w-full h-32 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={saveNote}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Save Note
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {notes.length === 0 && (
            <p className="text-gray-500">
              No notes added yet.
            </p>
          )}

          {notes.map((n) => (
            <div
              key={n.id}
              className="bg-white p-4 rounded-xl shadow"
            >
              <p className="text-gray-800">{n.text}</p>
              <span className="text-xs text-gray-400">
                {n.date}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
