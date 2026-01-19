import { Link } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <Link to="/">🌿 Virtual Herbal Garden</Link>

      <div className="space-x-4">
        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/add-plant">Add Plant</Link>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
