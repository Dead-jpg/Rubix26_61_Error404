import { useState } from "react";

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
    <form onSubmit={submit} className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl mb-4">Login</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-green-600 text-white px-4 py-2 w-full">
        Login
      </button>
      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <a href="/register" className="text-green-600">
          Sign Up
        </a>
      </p>
    </form>
  );
}
