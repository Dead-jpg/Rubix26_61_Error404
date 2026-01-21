import { useState } from "react";
import DashboardBackground from "../components/DashboardBackground"; // falling leaves component

export default function AddPlant() {
  const [form, setForm] = useState({
    name: "",
    scientificName: "",
    ayushSystem: "",
    uses: "",
    image: "",
    sketchfabUrl: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const payload = { ...form };
    if (!payload.sketchfabUrl) delete payload.sketchfabUrl;

    const res = await fetch("http://localhost:5000/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
    } else {
      alert("Plant added successfully 🌱");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌿 FALLING LEAVES BACKGROUND */}
      <DashboardBackground />

      {/* 🌿 FORM CARD DIRECTLY ON TOP OF LEAVES */}
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <form
          onSubmit={submit}
          className="w-full max-w-lg bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl space-y-4"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-6 drop-shadow-md">
            Add New Plant 🌿
          </h2>

          <input
            placeholder="Plant Name"
            className="w-full p-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-md"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Scientific Name"
            className="w-full p-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-md"
            onChange={(e) => setForm({ ...form, scientificName: e.target.value })}
          />
          <input
            placeholder="AYUSH System"
            className="w-full p-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-md"
            onChange={(e) => setForm({ ...form, ayushSystem: e.target.value })}
          />
          <input
            placeholder="Uses"
            className="w-full p-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-md"
            onChange={(e) => setForm({ ...form, uses: e.target.value })}
          />
          <input
            placeholder="Image URL"
            className="w-full p-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-md"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <input
            placeholder="Sketchfab Embed URL (optional)"
            className="w-full p-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-sm placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-md"
            onChange={(e) => setForm({ ...form, sketchfabUrl: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-2xl shadow-lg transition transform hover:scale-[1.02]"
          >
            Add Plant
          </button>
        </form>
      </div>
    </div>
  );
}
