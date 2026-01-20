export default function DashboardTopbar({ onMenuClick }) {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button onClick={onMenuClick} className="text-2xl focus:outline-none">
          ☰
        </button>

        <h1 className="text-lg font-semibold">Virtual Herbal Garden</h1>
      </div>

      <input
        className="border rounded-lg px-3 py-1 w-64 hidden md:block"
        placeholder="Search plants, diseases..."
      />
    </div>
  );
}
