import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardTopbar from "../components/DashboardTopbar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Topbar */}
      <DashboardTopbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
