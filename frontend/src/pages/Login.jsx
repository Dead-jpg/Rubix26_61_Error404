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
      window.location.href = "/dashboard";
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background */}
      <SplineBackground />

      {/* Login Card */}
      <form
        onSubmit={submit}
        className="relative z-10 w-[340px] p-6 rounded-2xl 
           bg-white/20 backdrop-blur-xl 
           border border-white/30 
           shadow-2xl 
           text-white"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-green-700">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <input
          placeholder="Email"
          className="w-full p-2.5 mb-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2.5 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
