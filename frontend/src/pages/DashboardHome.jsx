import StatCard from "../components/StatCard";

export default function DashboardHome() {
  return (
    <div className="space-y-10">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Medicinal Plants" value={248} type="plants" />
        <StatCard label="Bookmarked" value={12} type="bookmarks" />
        <StatCard label="Notes Taken" value={7} type="notes" />
        <StatCard label="Completed Tours" value={4} type="tours" />
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickCard
            title="Explore All Plants"
            description="Browse complete medicinal plant database"
            gradient="from-green-100 to-green-50"
          />
          <QuickCard
            title="Immunity Boosters"
            description="Curated immunity enhancing plants"
            gradient="from-blue-100 to-blue-50"
          />
          <QuickCard
            title="Stress Relief"
            description="Plants for mental wellness"
            gradient="from-purple-100 to-purple-50"
          />
        </div>
      </div>
    </div>
  );
}

function QuickCard({ title, description, gradient }) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all`}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
