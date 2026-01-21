import { useState, useEffect } from "react";

export default function Notes() {
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);

  // Load saved notes on page load
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("herbalNotes")) || [];
    setSavedNotes(stored);
  }, []);

  const handleSave = () => {
    if (!note.trim()) return;

    const newNote = {
      id: Date.now(),
      text: note,
      date: new Date().toLocaleString(),
    };

    const updatedNotes = [newNote, ...savedNotes];
    setSavedNotes(updatedNotes);
    localStorage.setItem("herbalNotes", JSON.stringify(updatedNotes));

    setNote("");
    alert("✅ Note saved successfully");
  };

  return (
    <div className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">My Notes 📝</h1>

      {/* Write Note */}
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
        className="w-full h-32 border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold"
      >
        Save Note
      </button>

      {/* Saved Notes */}
      <div className="space-y-4">
        {savedNotes.length === 0 && (
          <p className="text-gray-500">No notes saved yet 🌱</p>
        )}

        {savedNotes.map((n) => (
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
    </div>
  );
}
