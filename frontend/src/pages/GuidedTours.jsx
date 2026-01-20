export default function GuidedTours() {
  const tours = ["Immunity Boost", "Mental Wellness", "Skin Care"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Guided Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((t) => (
          <div key={t} className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold">{t}</h2>
            <p className="text-sm text-gray-500 mt-2">
              Guided herbal exploration
            </p>
            <button className="mt-4 text-green-600 font-medium">
              Start Tour →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
