import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SplineBackground from "../components/SplineBackground";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ STORE BOTH TOKEN AND USER
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background */}
      <SplineBackground />

      {/* Login Card */}
      <form
        onSubmit={submit}
        className="relative z-10 bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-green-700">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2.5 mb-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2.5 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setPassword(e.target.value)}
          required
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
