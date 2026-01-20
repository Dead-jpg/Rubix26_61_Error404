export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  );
}
