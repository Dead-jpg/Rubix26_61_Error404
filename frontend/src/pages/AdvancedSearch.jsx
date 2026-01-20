export default function AdvancedSearch() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Advanced Search</h1>

      <div className="bg-white p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4">
        <input className="border p-3 rounded" placeholder="Plant Name" />
        <input className="border p-3 rounded" placeholder="Disease" />
        <select className="border p-3 rounded">
          <option>System</option>
          <option>Respiratory</option>
          <option>Digestive</option>
        </select>
        <button className="bg-green-600 text-white px-6 py-2 rounded col-span-full">
          Search
        </button>
      </div>
    </div>
  );
}
