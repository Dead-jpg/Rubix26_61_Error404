import { useState } from "react";

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
    if (!payload.sketchfabUrl) {
      delete payload.sketchfabUrl; // ✅ IMPORTANT
    }

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
    <form onSubmit={submit} className="max-w-md mx-auto p-6">
      <h2 className="text-2xl mb-4">Add Plant</h2>

      <input
        placeholder="Name"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Scientific Name"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, scientificName: e.target.value })}
      />
      <input
        placeholder="Ayush System"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, ayushSystem: e.target.value })}
      />
      <input
        placeholder="Uses"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, uses: e.target.value })}
      />
      <input
        placeholder="Image URL"
        className="border p-2 w-full mb-4"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <input
        name="sketchfabUrl"
        placeholder="Sketchfab Embed URL (optional)"
        className="input"
        onChange={(e) => setForm({ ...form, sketchfabUrl: e.target.value })}
      />
      <button className="bg-green-600 text-white px-4 py-2 w-full">
        Add Plant
      </button>
    </form>
  );
}
