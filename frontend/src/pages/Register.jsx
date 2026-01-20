import { useState } from "react";
import SplineBackground from "../components/SplineBackground";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background */}
      <SplineBackground />

      <form
        onSubmit={submit}
        className="relative z-10 w-[340px] p-6 rounded-2xl 
           bg-white/20 backdrop-blur-xl 
           border border-white/30 
           shadow-2xl 
           text-white"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-green-700">
          Sign Up
        </h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          placeholder="Name"
          className="w-full p-2.5 mb-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className="w-full p-2.5 mb-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2.5 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-green-600 text-white px-4 py-2 w-full">
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-green-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
