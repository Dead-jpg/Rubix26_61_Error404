import DashboardTabs from "./DashboardTabs";

export default function DashboardNavbar() {
  return (
    <div
      className="relative h-[420px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 text-white">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            AYUSH Virtual Herbal Garden
          </h1>

          {/* Top Nav Pills */}
          <div className="flex gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
            {[
              "Home",
              "Virtual Tour",
              "Advanced Search",
              "Bookmarks",
              "Quiz",
              "Story",
            ].map((item) => (
              <button
                key={item}
                className="px-4 py-1 rounded-full text-sm hover:bg-white/20 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
