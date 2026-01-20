import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardTabs from "../components/DashboardTabs";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f7f8ef]">
      {/* Top Navbar */}
      <DashboardNavbar />

      {/* Hero Section */}
      <section className="relative bg-[url('/leaves-bg.jpg')] bg-cover bg-center">
        <div className="bg-black/40">
          <div className="  max-w-7xl mx-auto px-6 py-20 text-center text-white">
            <h1 className="text-4xl font-bold">
              Discover AYUSH Medicinal Plants
            </h1>
            <p className="mt-4 max-w-xl text-white/80 mx-auto text-lg">
              Explore Ayurveda, Yoga, Unani, Siddha & Homeopathy plants.
            </p>

            {/* Search */}
            <div className="mt-6 flex max-w-xl bg-white rounded-full overflow-hidden mx-auto shadow-lg ">
              <input
                className="flex-1 px-6 py-3 text-black outline-none"
                placeholder="Search plant..."
              />
              <button className="bg-green-600 text-white px-6">
                Discover 🌿
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <DashboardTabs />

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
