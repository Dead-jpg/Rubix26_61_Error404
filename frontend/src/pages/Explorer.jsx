export default function Explorer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Plant Image */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
        <img src="/tulsi.png" alt="Tulsi" className="mx-auto max-h-[420px]" />
      </div>

      {/* Plant Details */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-bold">Tulsi (Holy Basil)</h2>
        <p className="italic text-green-700 mt-1">Ocimum sanctum</p>

        <div className="mt-4 text-gray-700">
          Tulsi is revered in Ayurveda for immunity, respiratory health, and
          stress relief.
        </div>

        <div className="mt-6">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Ayurveda
          </span>
        </div>
      </div>
    </div>
  );
}
