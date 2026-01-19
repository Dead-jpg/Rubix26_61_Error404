import { useState } from "react";
import SplineBackground from "../components/SplineBackground";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
    } else {
      localStorage.setItem("token", data.token);
      window.location.href = "/plants";
    }
  };
  return (
    <div className="h-screen w-full overflow-hidden text-white font-sans">
      <SplineBackground />
      <form onSubmit={submit} className="max-w-sm mx-auto p-6">
        <h2 className="text-2xl mb-4">Login</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/60 text-black outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-lg bg-white/60 text-black outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-600 text-white px-4 py-2 w-full">
          Login
        </button>
        <p className="mt-6 text-teal-100">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="underline text-green-300 hover:text-green-400"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
