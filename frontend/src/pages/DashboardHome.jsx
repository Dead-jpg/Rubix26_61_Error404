export default function DashboardHome() {
  const stats = [
    { label: "Medicinal Plants", value: 248 },
    { label: "Bookmarked", value: 12 },
    { label: "Notes Taken", value: 7 },
    { label: "Completed Tours", value: 4 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-2xl font-bold">{s.value}</h2>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Explore All Plants", "Immunity Boosters", "Stress Relief"].map(
            (item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Start exploring curated plants
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
