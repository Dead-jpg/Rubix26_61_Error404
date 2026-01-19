import { useState } from "react";

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
    <form onSubmit={submit} className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl mb-4">Sign Up</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        placeholder="Name"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
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
  );
}
