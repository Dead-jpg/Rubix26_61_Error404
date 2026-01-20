import { Link } from "react-router-dom";
import FallingLeaves from "../components/FallingLeaves";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      {/* 🌿 3D FALLING LEAVES BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FallingLeaves />
      </div>
      <Navbar />

      {/* 🌿 FOREGROUND CONTENT */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 py-28 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Explore the Power of <br />
              <span className="text-green-300">Medicinal Plants</span>
            </h1>

            <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-10">
              Discover, learn, and manage herbal knowledge with our interactive
              Virtual Herbal Garden. Powered by Ayurveda and modern technology.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/plants"
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition"
              >
                Explore Plants 🌿
              </Link>
              <Link
                to="/register"
                className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-lg transition"
              >
                Get Started →
              </Link>
            </div>
          </div>

          {/* Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Platform Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                [
                  "🌱 Herbal Plant Library",
                  "Browse medicinal plants with scientific names and AYUSH systems.",
                ],

                [
                  "📚 Educational Focus",
                  "Designed for students and researchers.",
                ],
                [
                  "🌍 Digital Herbal Garden",
                  "Ancient wisdom meets modern web tech.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:scale-105 transition"
                >
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-green-100">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Nature Digitally?
          </h2>
          <p className="text-green-100 mb-8">
            Join now and start discovering medicinal plants from anywhere.
          </p>

          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition"
          >
            Login to Continue →
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="py-6 text-center text-sm text-green-200 border-t border-white/20">
          © 2026 Virtual Herbal Garden • Built with 🌿 & ❤️
        </footer>
      </div>
    </div>
  );
}
