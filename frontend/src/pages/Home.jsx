import { Link } from "react-router-dom";
import FallingLeaves from "../components/FallingLeaves";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
      
      {/* 🌿 Floating Leaves & Nature Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FallingLeaves />
      </div>

      {/* 🌿 Decorative Branches */}
      <img
        src="/branches-left.png"
        className="absolute left-0 top-40 w-52 opacity-80 animate-floatSlow z-0"
      />
      <img
        src="/branches-right.png"
        className="absolute right-0 bottom-32 w-52 opacity-80 animate-floatMedium z-0"
      />

      <Navbar />

      {/* 🌿 FOREGROUND CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 py-32 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 animate-fadeIn">
              Welcome to the <br />
              <span className="text-green-300 drop-shadow-lg">
                Virtual Herbal Garden
              </span>
            </h1>

            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-12">
              Experience India’s medicinal plant heritage through an immersive,
              interactive, and educational digital garden based on AYUSH systems.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              

              <Link
                to="/register"
                className="border border-white/40 hover:bg-white/10 px-8 py-4 rounded-full text-lg transition"
              >
                Get Started →
              </Link>
            </div>
          </div>

          {/* Soft vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Virtual Herbal Garden?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                [
                  "🌱 Extensive Herbal Library",
                  "Explore medicinal plants with botanical details, uses, and precautions.",
                ],
                [
                  "🧠 Guided Thematic Learning",
                  "Learn through curated tours like immunity, digestion, and stress relief.",
                ],
                [
                  "🧪 Modern + Traditional",
                  "Ancient AYUSH wisdom presented using modern 3D web technologies.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-white/10 p-8 rounded-3xl border border-white/20 hover:-translate-y-2 hover:shadow-2xl transition"
                >
                  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                  <p className="text-green-100">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Herbal Journey Today 🌿
          </h2>
          <p className="text-green-100 mb-10 max-w-xl mx-auto">
            Learn, explore, and preserve traditional medicinal knowledge in a
            modern digital experience.
          </p>

          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 px-10 py-5 rounded-2xl font-semibold text-lg transition hover:scale-105"
          >
            Login & Explore →
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-sm text-green-200 border-t border-white/20">
          © 2026 Virtual Herbal Garden • Built with 🌿 & ❤️
        </footer>
      </div>
    </div>
  );
}

