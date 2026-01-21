import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardBackground from "../components/DashboardBackground";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(storedBookmarks);

    const storedNotes = JSON.parse(localStorage.getItem("herbalNotes")) || [];
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
    <div className="relative min-h-screen overflow-hidden p-6">
      {/* 🌿 Falling Leaves Background */}
      <DashboardBackground />

      <div className="relative z-10 space-y-16">
        {/* 🌿 Bookmarked Plants */}
        <section>
          <h1 className="text-3xl font-extrabold text-white drop-shadow-lg mb-6">
            🌿 Bookmarked Plants
          </h1>

          {bookmarks.length === 0 ? (
            <div className="bg-white/20 backdrop-blur-xl p-6 rounded-3xl shadow-lg text-white/80 text-center">
              No bookmarks added yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarks.map((plant) => (
                <div
                  key={plant._id}
                  className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="h-48 w-full object-cover rounded-t-3xl"
                  />

                  <div className="p-4 space-y-2">
                    <h2 className="text-lg font-bold text-gray-900 drop-shadow-sm">
                      {plant.name}
                    </h2>

                    <p className="italic text-sm text-gray-700">
                      {plant.scientificName}
                    </p>

                    <span className="inline-block mt-2 bg-green-100/70 text-green-800 px-3 py-1 rounded-full text-xs">
                      {plant.ayushSystem}
                    </span>

                    <p className="text-sm text-gray-700 mt-3 line-clamp-3">
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

        {/* 📝 Notes Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-white drop-shadow-lg mb-6">
            📝 My Notes
          </h2>

          <div className="bg-white/20 backdrop-blur-xl p-6 rounded-3xl shadow-lg space-y-4">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your notes here..."
              className="w-full h-32 border border-white/30 rounded-2xl p-4 bg-white/30 backdrop-blur-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-md resize-none"
            />

            <button
              onClick={saveNote}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-2xl font-semibold shadow-md transition transform hover:scale-[1.03]"
            >
              Save Note
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {notes.length === 0 && (
              <p className="text-white drop-shadow-md text-center">
                No notes added yet.
              </p>
            )}

            {notes.map((n) => (
              <div
                key={n.id}
                className="bg-white/20 backdrop-blur-xl p-4 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
              >
                <p className="text-gray-900">{n.text}</p>
                <span className="text-xs text-gray-400">{n.date}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
