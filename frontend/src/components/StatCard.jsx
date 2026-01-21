export default function StatCard({ label, value, type }) {
  const styles = {
    plants: {
      bg: "bg-gradient-to-br from-green-50 to-green-100",
      border: "border-green-500",
      text: "text-green-700",
    },
    bookmarks: {
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
      border: "border-blue-500",
      text: "text-blue-700",
    },
    notes: {
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      border: "border-yellow-500",
      text: "text-yellow-700",
    },
    tours: {
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      border: "border-purple-500",
      text: "text-purple-700",
    },
  };

  const style = styles[type] || styles.plants; // 🔐 safety fallback

  return (
    <div
      className={`
        ${style.bg}
        border-l-4 ${style.border}
        rounded-2xl p-6 shadow-sm
        hover:shadow-lg hover:-translate-y-1
        transition-all duration-300
      `}
    >
      <h2 className={`text-3xl font-bold ${style.text}`}>{value}</h2>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}
