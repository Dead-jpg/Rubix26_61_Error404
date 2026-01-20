import { useState } from "react";
import { Link } from "react-router-dom";
import PlantSearchBar from "../components/PlantSearchBar";

export default function DashboardHome() {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-16">
      {/* 🔍 DASHBOARD SEARCH BAR */}
      <div className="flex justify-center">
        <PlantSearchBar query={query} setQuery={setQuery} />
      </div>

      {/* 🌿 HERO / WELCOME SECTION */}
      <section className="bg-gradient-to-br from-green-200 to-green-100 p-10 rounded-3xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          Welcome to your Virtual Herbal Garden 🌿
        </h1>

        <p className="text-green-800 max-w-3xl text-lg">
          Explore medicinal plants, learn traditional AYUSH knowledge,
          and understand natural remedies through a modern digital experience.
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <Link
            to="/dashboard/plants"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Explore Plants →
          </Link>

        </div>
      </section>

      {/* 🌱 WHAT YOU CAN DO */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          What can you do here?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="🌿 Explore Medicinal Plants"
            description="Browse plants with botanical details, medicinal uses, and precautions."
          />
          <FeatureCard
            title="🧭 Guided Learning"
            description="Follow curated thematic tours like immunity, digestion, and stress relief."
          />
          <FeatureCard
            title="📖 Learn AYUSH Knowledge"
            description="Understand traditional medicine systems using modern digital tools."
          />
        </div>
      </section>

      {/* 🧠 LEARNING HIGHLIGHT */}
      <section className="bg-white/60 backdrop-blur p-8 rounded-3xl border">
        <h2 className="text-2xl font-semibold mb-3">
          Designed for Learning & Awareness
        </h2>

        <p className="text-gray-700 max-w-4xl">
          This platform is built for students, educators, and anyone interested
          in India’s medicinal plant heritage.
        </p>
      </section>

      {/* ⚡ QUICK ACCESS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickCard
            title="Explore All Plants"
            description="Browse complete medicinal plant database"
            gradient="from-green-100 to-green-50"
            to="/dashboard/plants"
          />
          <QuickCard
            title="Immunity Boosters"
            description="Curated immunity enhancing plants"
            gradient="from-blue-100 to-blue-50"
            to="/dashboard/search"
          />
          <QuickCard
            title="Stress Relief"
            description="Plants for mental wellness"
            gradient="from-purple-100 to-purple-50"
            to="/dashboard/search"
          />
        </div>
      </section>
    </div>
  );
}

/* 🔹 COMPONENTS */

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function QuickCard({ title, description, gradient, to }) {
  return (
    <Link to={to}>
      <div className={`cursor-pointer bg-gradient-to-br ${gradient} p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all`}>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </Link>
  );
}
