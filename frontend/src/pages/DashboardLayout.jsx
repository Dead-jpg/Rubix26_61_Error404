import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardTopbar from "../components/DashboardTopbar";
import DashboardBackground from "../components/DashboardBackground";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌿 Animated garden / falling leaves / branches */}
      <DashboardBackground />

      {/* Dark overlay when sidebar opens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Foreground content */}
      <div className="relative z-30">
        <DashboardTopbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex">
          <DashboardSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="flex-1 p-6 transition-all duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
